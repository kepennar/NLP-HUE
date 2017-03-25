import { h, Component } from "preact";
import { connect } from 'preact-redux';

import { getBridgeIp } from "../../services/HueService";

import App from "./App";

export default class AppContainer extends Component {
  async componentWillMount() {
    try {
      await getBridgeIp();
      this.setState({ loaded: true });
    } catch (e) {
      this.setState({ loaded: true, noBridge: true });
    }
  }

  render({}, { loaded, noBridge }) {
    return (
      <div>
        {loaded && <App noBridge={noBridge} />}
      </div>
    );
  }
}
