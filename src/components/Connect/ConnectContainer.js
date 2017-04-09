import { h, Component } from "preact";
import { connect } from "preact-redux";

import { connectBridge } from "../../store/user/";

import Connect from "./Connect";

class ConnectContainer extends Component {
  componentWillMount() {
    if (this.props.bridgeIp) {
      this.props.connectBridge();
    }
  }

  render({ bridgeIpLoaded, username }) {
    return (
      <div>
        {bridgeIpLoaded && !username && <Connect />}
      </div>
    );
  }
}
export default connect(state => ({ ...state.user }), {
  connectBridge
})(ConnectContainer);
