import { h, Component } from "preact";
import { connect } from "preact-redux";

import { activateScene } from "../../../../store/scenes";

import Scene from "./Scene";

class SceneContainer extends Component {
  async activate() {
    const { id, infos, activateScene } = this.props;
    await activateScene(id);
  }

  render(props) {
    return <Scene {...props} onClick={() => this.activate()} />;
  }
}

export default connect(null, { activateScene })(
  SceneContainer
);
