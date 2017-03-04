import { h } from 'preact';

const Interact = (props) => {
  return(
    <div>
      <h2>Interact</h2>
      <button type="button" onclick={props.onInteract} > Click </button>
    </div>
  )
}

export default Interact