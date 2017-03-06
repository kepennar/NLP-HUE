import { h } from "preact";
import Light from "./Light";

const Interact = ({ lights, onInteract, switchOnById, onSwitchOn }) => {
  return (
    <div>
      <h2>Interact</h2>
      <ul>
        {Object.entries(lights).map(([id, infos]) => (
          <li><Light id={id} infos={infos} activate={switchOnById}/></li>
        ))}
      </ul>
      <button type="button" onclick={onInteract}> Click </button>
      <button type="button" onclick={onSwitchOn}> On </button>
    </div>
  );
};

export default Interact;
