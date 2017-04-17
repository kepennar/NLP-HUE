import { h, Component } from "preact";
import { connect } from "preact-redux";

import { getBridgeIp } from "../../store/user";
import { setHeaderCollapsed } from "../../store/ui";

import App from "./App";

class AppContainer extends Component {
  componentWillMount() {
    this.props.getBridgeIp();
  }

  handleScroll = e => {
    const { collapsed, setHeaderCollapsed } = this.props;
    const offset = e.offset;

    if (this.requestFrame) return;
    this.requestFrame = requestAnimationFrame(() => {
      if (offset > 10 && !collapsed) {
        setHeaderCollapsed(true);
      } else if (offset < 10 && collapsed) {
        setHeaderCollapsed(false);
      }
      this.requestFrame = null;
    });
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
export default connect(state => ({ ...state.user, ...state.ui }), {
  getBridgeIp,
  setHeaderCollapsed
})(AppContainer);
