import { SET_BRIDGE_IP, SET_USERNAME } from "./user.actions";

const DEFAULT = {
  bridgeIp: null,
  username: null,
  bridgeIpLoaded: false
};
export default (state = DEFAULT, action) => {
  switch (action.type) {
    case SET_BRIDGE_IP:
      return { ...state, bridgeIpLoaded: true, bridgeIp: action.value };
    case SET_USERNAME:
      return { ...state, username: action.value };
    default:
      return state;
  }
};
