import { h, Component } from "preact";
import { connect } from "preact-redux";

import AIResponse from "./AIResponse";

class AIResponseContainer extends Component {
  render({ textResponse, isListening }) {
    return (
      <AIResponse
        textResponse={textResponse}
        display={!isListening && textResponse}
      />
    );
  }
}
export default connect(state => ({
  ...state.speech
}))(AIResponseContainer);
