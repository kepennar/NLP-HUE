import { SET_HEADER_COLLAPSED } from "./ui.actions";

const DEFAULT = { collapsed: false };
export default (state = DEFAULT, action) => {
  switch (action.type) {
    case SET_HEADER_COLLAPSED:
      return { ...state, collapsed: action.value };
    default:
      return state;
  }
};
