import { ApiAiClient, ApiAiStreamClient, Recorder } from "api-ai-javascript";

import { getLights, blink } from "./HueService";

// const action = () => blink().then(getLights);
const action = () => console.log("todo");

let streamClient;
const client = new ApiAiClient({
  accessToken: "e436663c813f419eac2efa99c6ef62f7",
  streamClientClass: ApiAiStreamClient
});
streamClient = client.createStreamClient({
  onInit() {
    console.log("> ON INIT use direct assignment property");
    streamClient.open();
  },
  onStartListening() {
    console.log("> ON START LISTENING");
    this.isListening = true;
  },
  onResults(data) {
    console.log("> RESULT", data);
  },
  onStopListening() {
    console.log("> ON STOP LISTENING");
    this.isListening = false;
  },
  onError(errorCode, message) {
    console.error(errorCode, message);
  }
});

streamClient.init();

export const start = () => {
  if (!streamClient.isListening) {
    streamClient.startListening();
  }
};
export const stop = () => {
  if (streamClient.isListening) {
    streamClient.stopListening();
  }
};
