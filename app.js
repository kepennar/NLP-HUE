const CONF = {}

function init() {
  document.querySelector('#pressBridge').style.display = 'none'
  document.querySelector('#interact').style.display = 'none'

  getBridgeIp()
  .then(ip => {
    CONF.ip = ip

    CONF.username = window.sessionStorage.getItem('username')
    if (!CONF.username) {
      connect()
    } else {
      getLights()
        .then(lights => CONF.lights = lights)
        .then(() => document.querySelector('#interact').style.display = 'block')
    }
  })
}

function getBridgeIp() {
  return fetch('https://www.meethue.com/api/nupnp')
    .then(resp => resp.json())
    .then(data => data[0].internalipaddress)
}
function connect() {
  document.querySelector('#pressBridge').style.display = 'block'
  document.querySelector('#loginBtn').addEventListener('click', () => {
    fetch(`http://${CONF.ip}/api`, {
      method: 'POST',
      body: JSON.stringify({"devicetype":"nlp_hue"})
    })
    .then(resp => resp.json())
    .then(datas => window.sessionStorage.setItem('username', datas[0].success.username))
    .then(() => init())
  })
}
function getLights() {
  return fetch(`http://${CONF.ip}/api/${CONF.username}/lights`)
    .then(resp => resp.json())
}

function switchLight(id, on= true) {
  return fetch(`http://${CONF.ip}/api/${CONF.username}/lights/${id}/state`, {
    method: 'PUT',
    body: JSON.stringify({on})
  })
}
function switchOn(id) {
  return switchLight(id)
}
function switchOff(id) {
  return switchLight(id, false)
}

function blink() {
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

document.querySelector('#btn').addEventListener('click', () => {
    blink()
      .then(() => blink()
        .then(() => blink()
          .then(() => blink()
        )
      )
    )
})

window.addEventListener('load', init)