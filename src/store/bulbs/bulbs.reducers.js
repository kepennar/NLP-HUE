import { SET_BULBS } from "./bulbs.actions";

const EMPTY = { nbBulbs: 0 };
export default (state = EMPTY, action) => {
  switch (action.type) {
    case SET_BULBS:
      const bulbs = action.value;
      const nbBulbs = Object.values(bulbs).length;
      return { ...bulbs, nbBulbs };
    default:
      return state;
  }
};
