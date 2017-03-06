import { h, Component } from "preact";
import {
  getUsername,
  getLights,
  blink,
  switchOn
} from "../../services/HueService";
import { init as initSpeech } from "../../services/SpeechService";

import Interact from "./Interact";

export default class InteractContainer extends Component {
  async componentWillMount() {
    const username = getUsername();
    if (username) {
      await this.getLights();
      initSpeech();
    }
  }
  async getLights() {
    const lights = await getLights();
    this.setState({ lights });
  }

  render({}, { lights }) {
    return (
      <div>
        {lights &&
          <Interact
            lights={lights}
            onInteract={blink}
            onSwitchOn={switchOn}
            onChange={() => this.getLights()}
          />}
      </div>
    );
  }
}
