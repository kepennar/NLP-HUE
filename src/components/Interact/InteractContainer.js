import { h, Component } from "preact";
import {
  getUsername,
  getLights,
  blink,
  switchOn,
  switchOnById
} from "../../services/HueService";
import { init as initSpeech } from "../../services/SpeechService";

import Interact from "./Interact";

export default class InteractContainer extends Component {
  async componentWillMount() {
    const username = getUsername();
    if (username) {
      const lights = await getLights();
      this.setState({ lights });
      initSpeech();
    }
  }
  render({}, { lights }) {
    return (
      <div>
        {lights && <Interact lights={lights} onInteract={blink} switchOnById={switchOnById} onSwitchOn={switchOn} />}
      </div>
    );
  }
}
