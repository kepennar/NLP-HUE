import { h, Component } from 'preact';
import { getUsername, getLights, blink } from '../../services/HueService'
import { init as initSpeech } from '../../services/SpeechService'

import Interact from './Interact'

export default class InteractContainer extends Component {
  async componentWillMount() {
    const username = getUsername()
    if (username) {
      await getLights()
      this.setState({ username })
      initSpeech()
    }
  }
  render({ },  { username }) {
    return (
      <div>
        { username && <Interact onInteract={() => blink()} /> }
      </div>
    )
  }
}