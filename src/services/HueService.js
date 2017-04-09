const CONF = {};

export async function fetchBridgeIp() {
  let bridgeIp;
  if (!navigator.onLine) {
    bridgeIp = window.localStorage.getItem("bridgeIp");
  } else {
    const resp = await fetch("https://www.meethue.com/api/nupnp");
    const datas = await resp.json();
    if (datas.length === 0) {
      throw new Error("No bridge detected");
    }
    bridgeIp = datas[0].internalipaddress;
    window.localStorage.setItem("bridgeIp", bridgeIp);
  }
  return bridgeIp;
}

export async function connect(ip) {
  const username = window.localStorage.getItem("username");
  return username ? username : fetchConnect(ip);
}

async function fetchConnect(ip) {
  const resp = await fetch(`http://${ip}/api`, {
    method: "POST",
    body: JSON.stringify({ devicetype: "nlp_hue" })
  });
  const datas = await resp.json();

  if (!datas[0].success) {
    throw new Error("Not connected");
  }
  const username = datas[0].success.username;
  window.localStorage.setItem("username", username);
  return username;
}

export async function getLights(ip, username) {
  const resp = await fetch(`http://${ip}/api/${username}/lights`);
  const lights = await resp.json();
  CONF.lights = lights;
  return lights;
}

export async function getScenes() {
  const resp = await fetch(`http://${CONF.ip}/api/${CONF.username}/scenes`);
  return resp.json();
}

export async function switchLight(ip, username, id, on = true) {
  return fetch(`http://${ip}/api/${username}/lights/${id}/state`, {
    method: "PUT",
    body: JSON.stringify({ on })
  });
}

export async function switchOnById(ip, username, id) {
  return switchLight(ip, username, id);
}

export async function switchOffById(ip, username, id) {
  return switchLight(ip, username, id, false);
}

export async function putBriValue(ip, username, id, bri) {
  return fetch(`http://${ip}/api/${username}/lights/${id}/state`, {
    method: "PUT",
    body: JSON.stringify({ bri })
  });
}
