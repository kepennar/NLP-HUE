import { START_LISTENING, STOP_LISTENING } from "./speech.actions";

const EMPTY = { isListening: false };
export default (state = EMPTY, action) => {
  switch (action.type) {
    case START_LISTENING:
      return { ...state, isListening: true };
    case STOP_LISTENING:
      return { ...state, isListening: false };
    default:
      return state;
  }
};
