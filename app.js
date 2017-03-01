const USERNAME = 'llwP4-WaW8ptV1qWLQtBzwkacfb3QvhkM2p-ugHO'
let IP

function getBridgeIp() {
  return fetch('https://www.meethue.com/api/nupnp')
    .then(resp => resp.json())
    .then(data => data[0].internalipaddress)
}
function getLights() {
  return fetch(`http://${IP}/api/${USERNAME}/lights`)
    .then(resp => resp.json())
}
function switchOn(id) {
  return fetch(`http://${IP}/api/${USERNAME}/lights/${id}/state`, {
    method: 'PUT',
    body: JSON.stringify({on: true})
  })
}
function switchOff(id) {
  return fetch(`http://${IP}/api/${USERNAME}/lights/${id}/state`, {
    method: 'PUT',
    body: JSON.stringify({on: false})
  })
}

getBridgeIp()
  .then(ip => {
    IP = ip
    return getLights()
  })
  .then(lights => {
    console.log(Object.keys(lights).forEach(lightId => {
      switchOn(lightId).then(_ => setTimeout(() => switchOff(lightId), 500))
    }))
  })

