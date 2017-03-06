import { h, Component } from "preact";
import { switchOnById, switchOffById } from "../../../services/HueService";

import Light from "./Light";

export default class InteractContainer extends Component {
  async toggle() {
    const action = this.props.infos.state.on ? switchOffById : switchOnById;
    await action(this.props.id);
    this.props.onChange();
  }

  render(props) {
    const onClick = props.infos.state.on ? switchOffById : switchOnById;
    return <Light {...props} onClick={() => this.toggle()} />;
  }
}
