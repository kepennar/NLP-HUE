import { h, Component } from "preact";
import { connect } from "preact-redux";
import { getBulbs } from "../../../store/bulbs";
import { getUsername, blink, switchOn } from "../../../services/HueService";

import Bulbs from "./Bulbs";

class BulbsContainer extends Component {
  async componentWillMount() {
    const username = getUsername();
    if (username) {
      this.props.getBulbs();
    }
  }

  render({ getBulbs, bulbs }) {
    return bulbs
      ? <Bulbs
          bulbs={bulbs}
          onInteract={blink}
          onSwitchOn={switchOn}
          onChange={() => getBulbs()}
        />
      : <span>Loading...</span>;
  }
}
export default connect(state => ({ bulbs: state.bulbs }), { getBulbs })(BulbsContainer);
