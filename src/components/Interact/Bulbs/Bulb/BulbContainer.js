import { h, Component } from "preact";
import { switchOnById, switchOffById } from "../../../../services/HueService";

import Bulb from "./Bulb";

export default class BulbContainer extends Component {
  async toggle() {
    const action = this.props.infos.state.on ? switchOffById : switchOnById;
    await action(this.props.id);
    this.props.onChange();
  }

  render(props) {
    const onClick = props.infos.state.on ? switchOffById : switchOnById;
    return <Bulb {...props} onClick={() => this.toggle()} />;
  }
}
