
const CONF = {}

CONF.username = window.localStorage.getItem('username')

export function getBridgeIp() {
  navigator.onLine
  return fetch('https://www.meethue.com/api/nupnp')
    .then(resp => resp.json())
    .then(data => data[0].internalipaddress)
    .then(ip => CONF.ip = ip)
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
export function switchOn(id) {
  return switchLight(id)
}
export function switchOff(id) {
  return switchLight(id, false)
}

export function blink() {
  return new Promise(resolve => {
    Object.keys(CONF.lights).forEach(lightId => {
      switchOn(lightId)
      .then(() => {
        setTimeout(() => {
          switchOff(lightId)
          .then(() => setTimeout(resolve, 1000))
        }, 500)
      })
    })
  })
}


