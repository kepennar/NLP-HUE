export const START_LISTENING = "START_LISTENING";
export const startListening = () => ({
  type: START_LISTENING
});

export const STOP_LISTENING = "STOP_LISTENING";
export const stopListening = () => ({
  type: STOP_LISTENING
});

export const SET_RESPONSE = "SET_RESPONSE";
export const setResponse = value => ({
  type: SET_RESPONSE,
  value
});
