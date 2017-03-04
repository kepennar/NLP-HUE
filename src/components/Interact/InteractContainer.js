import { h, Component } from 'preact';
import { getUsername, getLights, blink } from '../../services/HueService'
import { init as initSpeech } from '../../services/SpeechService'

import Interact from './Interact'

export default class InteractContainer extends Component {
  componentWillMount() {
    const username = getUsername()
    if (username) {
      getLights()
      .then(() => {
        this.setState({ username })
        initSpeech()
      })
    }
  }
  render(props, state) {
    return (
      <div>
        { state.username && <Interact onInteract={() => blink()} /> }
      </div>
    )
  }
}