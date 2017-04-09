import { h, Component } from "preact";
import { connect } from "preact-redux";

import { getBulbs } from "../../../store/bulbs";
import { startListening, stopListening } from "../../../store/speech";

import Speech from "./Speech";

class SpeechContainer extends Component {
  activateSpeech = () => {
    const { isListening, startListening, stopListening } = this.props;

    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  render({ nbBulbs, isListening }) {
    return nbBulbs
      ? <Speech isListening={isListening} onClick={this.activateSpeech} />
      : <span>Loading...</span>;
  }
}
export default connect(
  state => ({
    nbBulbs: state.bulbs.nbBulbs,
    ...state.speech
  }),
  { startListening, stopListening }
)(SpeechContainer);
