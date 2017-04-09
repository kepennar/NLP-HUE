import { h, Component } from "preact";
import { connect } from "preact-redux";
import { omit } from "rambda";

import { getScenes } from "../../../store/scenes";

import Scenes from "./Scenes";

class ScenesContainer extends Component {
  async componentWillMount() {
    const { username, getScenes, nbScenes } = this.props;
    if (username && !nbScenes) {
      getScenes();
    }
  }

  render({ scenes }) {
    return scenes.nbScenes
      ? <Scenes scenes={omit("nbScenes", scenes)} />
      : <span>Loading...</span>;
  }
}
export default connect(
  state => ({ scenes: state.scenes, username: state.user.username }),
  { getScenes }
)(ScenesContainer);
