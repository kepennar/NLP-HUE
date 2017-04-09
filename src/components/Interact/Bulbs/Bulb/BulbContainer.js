import { h, Component } from "preact";
import { connect } from "preact-redux";

import { switchOn, switchOff, changeBri } from "../../../../store/bulbs";

import Bulb from "./Bulb";

class BulbContainer extends Component {
  async toggle() {
    const { id, infos, update, switchOn, switchOff } = this.props;
    const action = infos.state.on ? switchOff : switchOn;
    await action(id);
    update();
  }

  async changebri(bri) {
    const { id, changeBri } = this.props;
    await changeBri(id, bri);
  }

  render(props) {
    return (
      <Bulb
        {...props}
        onClick={() => this.toggle()}
        onChangeBri={val => this.changebri(val)}
      />
    );
  }
}

export default connect(null, { switchOn, switchOff, changeBri })(BulbContainer);
