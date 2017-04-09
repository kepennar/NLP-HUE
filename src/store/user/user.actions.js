export const GET_BRIDGE_IP = "GET_BRIDGE_IP";
export const getBridgeIp = () => ({
  type: GET_BRIDGE_IP
});

export const SET_BRIDGE_IP = "SET_BRIDGE_IP";
export const setBridgeIp = bridgeIp => ({
  type: SET_BRIDGE_IP,
  value: bridgeIp
});

export const CONNECT_BRIDGE = "CONNECT_BRIDGE";
export const connectBridge = () => ({
  type: CONNECT_BRIDGE
});
export const SET_USERNAME = "SET_USERNAME";
export const setUsername = username => ({
  type: SET_USERNAME,
  value: username
});
