import { h, Component } from 'preact';
import { getUsername, connect } from '../../services/HueService'

import Connect from './Connect'

export default class ConnectContainer extends Component {
  componentWillMount() {
    this.setState({
      username: getUsername()
    })
  }

  connectBridge = async () => {
    const username = await connect()
    this.setState({username})
  }

  render({ }, { username }) {
    return (
      <div>
        { !username && <Connect onConnect={this.connectBridge} /> }
      </div>
    )
  }
}