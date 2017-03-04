import { h, Component } from 'preact';
import { getUsername, connect } from '../../services/HueService'

import Connect from './Connect'

export default class ConnectContainer extends Component {
  componentWillMount() {
    this.setState({
      username: getUsername()
    })
  }

  connectBridge() {
      connect()
      .then(username => {
        this.setState({username})
      })
  }
  render(props, state) {
    return (
      <div>
        { !state.username && <Connect onConnect={() => this.connectBridge()} /> }
      </div>
    )
  }
}