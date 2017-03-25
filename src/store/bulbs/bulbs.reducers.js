import { SET_BULBS } from "./bulbs.actions";

const EMPTY = {};
export default (state = EMPTY, action) => {
  switch (action.type) {
    case SET_BULBS:
      return { ...state, bulbs: action.value };
    default:
      return state;
  }
};
