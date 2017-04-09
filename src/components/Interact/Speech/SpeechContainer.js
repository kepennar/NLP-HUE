import { h, Component } from "preact";
import { connect } from "preact-redux";

import { getBulbs } from "../../../store/bulbs";
import { init as initSpeech } from "../../../services/SpeechService";

import Speech from "./Speech";

class SpeechContainer extends Component {
  activateSpeech() {
    initSpeech();
  }

  render({ nbBulbs }) {
    return nbBulbs
      ? <Speech onClick={this.activateSpeech} />
      : <span>Loading...</span>;
  }
}
export default connect(state => ({ ...state.bulbs }))(
  SpeechContainer
);
