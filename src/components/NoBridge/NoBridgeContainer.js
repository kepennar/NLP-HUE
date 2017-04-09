import { h, Component } from "preact";
import { connect } from "preact-redux";

import NoBridge from "./NoBridge";

class NoBridgeContainer extends Component {
  render({ bridgeIpLoaded, noBridge }) {
    return bridgeIpLoaded && noBridge && <NoBridge />;
  }
}

export default connect(state => ({
  noBridge: !state.user.bridgeIp,
  loaded: state.user.bridgeIpLoaded
}))(NoBridgeContainer);
