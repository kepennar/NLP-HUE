import { h, Component } from "preact";
import { getUsername, attemptToConnect } from "../../services/HueService";

import Connect from "./Connect";

export default class ConnectContainer extends Component {
  componentWillMount() {
    const username = getUsername();
    if (!username) {
      attemptToConnect()
      .onDone(username => this.setState({ username }));
    } else {
      this.setState({ username });
    }
  }

  render({}, { username }) {
    return (
      <div>
        {!username && <Connect />}
      </div>
    );
  }
}
