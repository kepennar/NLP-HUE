import {
  START_LISTENING,
  STOP_LISTENING,
  SET_RESPONSE
} from "./speech.actions";

const EMPTY = { isListening: false, textResponse: "" };
export default (state = EMPTY, action) => {
  switch (action.type) {
    case START_LISTENING:
      return { ...state, isListening: true };
    case STOP_LISTENING:
      return { ...state, isListening: false };
    case SET_RESPONSE:
      return { ...state, textResponse: action.value };
    default:
      return state;
  }
};
