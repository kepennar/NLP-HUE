export const GET_BULBS = "GET_BULBS";
export const getBulbs = () => ({
  type: GET_BULBS
});

export const SET_BULBS = "SET_BULBS";
export const setBulbs = bulbs => ({
  type: SET_BULBS,
  value: bulbs
});

export const SWITCH_ON = "SWITCH_ON";
export const switchOn = bulbId => ({
  type: SWITCH_ON,
  value: bulbId
});

export const SWITCH_OFF = "SWITCH_OFF";
export const switchOff = bulbId => ({
  type: SWITCH_OFF,
  value: bulbId
});

export const CHANGE_BRI = "CHANGE_BRI";
export const changeBri = (bulbId, bri) => ({
  type: CHANGE_BRI,
  value: {
    bulbId,
    bri
  }
});