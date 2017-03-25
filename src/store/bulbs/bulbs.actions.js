export const GET_BULBS = "GET_BULBS";
export const getBulbs = () => ({
  type: GET_BULBS
});

export const SET_BULBS = "SET_BULBS";
export const setBulbs = bulbs => ({
  type: SET_BULBS,
  value: bulbs
});
