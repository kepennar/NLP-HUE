
const CONF = {}

CONF.username = window.localStorage.getItem('username')

export async function getBridgeIp() {
  if (!navigator.onLine) {
    CONF.ip = window.localStorage.getItem('bridgeIp')
  } else {
    const resp = await fetch('https://www.meethue.com/api/nupnp')
    const datas = await resp.json()
    if (datas.length === 0) {
      throw new Error('No bridge detected')
    }
    CONF.ip = datas[0].internalipaddress
    window.localStorage.setItem('bridgeIp', CONF.ip)
  }
}

export function getUsername() {
  return CONF.username
}

export async function connect() {
  const resp = await fetch(`http://${CONF.ip}/api`, {
    method: 'POST',
    body: JSON.stringify({"devicetype":"nlp_hue"})
  })
  const datas = await resp.json()
  const username = datas[0].success.username
  window.localStorage.setItem('username', username)
  CONF.username = username
  return username
}

export async function getLights() {
  const resp = await fetch(`http://${CONF.ip}/api/${CONF.username}/lights`)
  const lights = await resp.json()
  CONF.lights = lights
}

export async function getScenes() {
  const resp = await fetch(`http://${CONF.ip}/api/${CONF.username}/scenes`)
  return resp.json()
}

export async function switchLight(id, on= true) {
  return fetch(`http://${CONF.ip}/api/${CONF.username}/lights/${id}/state`, {
    method: 'PUT',
    body: JSON.stringify({on})
  })
}

export function switchOnById(id) {
  return switchLight(id)
}

export function switchOffById(id) {
  return switchLight(id, false)
}

export function switchOn() {
  const promises = []
  Object.keys(CONF.lights).forEach(lightId => {
    promises.push(switchOnById(lightId))
  })
  Promise.all(promises)
}

export function blink() {
  return new Promise(resolve => {
    Object.keys(CONF.lights).forEach(lightId => {
      switchOnById(lightId)
      .then(() => {
        setTimeout(() => {
          switchOffById(lightId)
          .then(() => setTimeout(resolve, 1000))
        }, 500)
      })
    })
  })
}


