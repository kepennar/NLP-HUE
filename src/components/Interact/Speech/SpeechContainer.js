import { h, Component } from "preact";
import { init as initSpeech } from "../../../services/SpeechService";

import Speech from "./Speech";

export default class SpeechContainer extends Component {
  activateSpeech() {
    initSpeech();
  }

  render() {
    return <Speech onClick={this.activateSpeech}/>;
  }
}
