import { h, Component } from "preact";
import {
  getUsername,
  getLights,
  blink,
  switchOn
} from "../../../services/HueService";

import Bulbs from "./Bulbs";

export default class BulbsContainer extends Component {
  async componentWillMount() {
    const username = getUsername();
    if (username) {
      await this.getLights();
    }
  }

  async getLights() {
    const lights = await getLights();
    this.setState({ lights });
  }

  render({}, { lights }) {
    return lights
      ? <Bulbs
          lights={lights}
          onInteract={blink}
          onSwitchOn={switchOn}
          onChange={() => this.getLights()}
        />
      : <span>Loading...</span>;
  }
}
