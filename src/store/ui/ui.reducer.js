import { SET_HEADER_HEIGHT } from "./ui.actions";

const DEFAULT = { headerHeight: 200 };
export default (state = DEFAULT, action) => {
  switch (action.type) {
    case SET_HEADER_HEIGHT:
      return { ...state, headerHeight: action.value };
    default:
      return state;
  }
};
