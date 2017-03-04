
const CONF = {}

CONF.username = window.sessionStorage.getItem('username')

export function getBridgeIp() {
  return fetch('https://www.meethue.com/api/nupnp')
    .then(resp => resp.json())
    .then(data => data[0].internalipaddress)
    .then(ip => CONF.ip = ip)
}

export function getUsername() {
  return CONF.username
}
export function connect() {
  return fetch(`http://${CONF.ip}/api`, {
    method: 'POST',
    body: JSON.stringify({"devicetype":"nlp_hue"})
  })
  .then(resp => resp.json())
  .then(datas => {
    const username = datas[0].success.username
    window.sessionStorage.setItem('username', username)
    CONF.username = username
    return username
  })
}

export function getLights() {
  return fetch(`http://${CONF.ip}/api/${CONF.username}/lights`)
    .then(resp => resp.json())
    .then(lights => CONF.lights = lights)
}
export function getScenes() {
  return fetch(`http://${CONF.ip}/api/${CONF.username}/scenes`)
    .then(resp => resp.json())
}
export function switchLight(id, on= true) {
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
  return new Promise((resolve => {
    Object.keys(CONF.lights).forEach(lightId => {
      switchOn(lightId)
      .then(() => {
        setTimeout(() => {
          switchOff(lightId)
          .then(() => setTimeout(resolve, 1000))
        }, 500)
      })
    })
  }))
}


