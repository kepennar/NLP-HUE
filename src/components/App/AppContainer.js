import { h, Component } from "preact";
import { connect } from "preact-redux";

import { getBridgeIp } from "../../store/user";

import App from "./App";

class AppContainer extends Component {
  componentWillMount() {
    this.props.getBridgeIp();
  }

  render({ bridgeIp, username }) {
    return <App noBridge={!bridgeIp} connected={!!username}/>;
  }
}
export default connect(state => ({...state.user}), {
  getBridgeIp
})(AppContainer);
