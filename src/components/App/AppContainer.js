import { h, Component } from "preact";
import { connect } from "preact-redux";

import { getBridgeIp } from "../../store/user";
import { setHeaderOffset } from "../../store/ui";

import App from "./App";

class AppContainer extends Component {
  componentWillMount() {
    this.props.getBridgeIp();
  }

  handleScroll = e => {
    const { setHeaderOffset } = this.props;
    setHeaderOffset(e.offset);
  };

  render({ bridgeIp, username }) {
    return (
      <App
        noBridge={!bridgeIp}
        connected={!!username}
        onScroll={this.handleScroll}
      />
    );
  }
}
export default connect(state => ({ ...state.user }), {
  getBridgeIp,
  setHeaderOffset
})(AppContainer);
