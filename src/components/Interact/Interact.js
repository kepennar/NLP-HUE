import { h } from "preact";
import Light from "./Light";

const Interact = ({ lights, onInteract, onSwitchOn, onChange }) => {
  return (
    <div>
      <h2>Interact</h2>
      <div>
        {Object.entries(lights).map(([id, infos]) => (
          <Light id={id} infos={infos} onChange={onChange} />
        ))}
      </div>
      <button type="button" onclick={onInteract}> Click </button>
      <button type="button" onclick={onSwitchOn}> On </button>
    </div>
  );
};

export default Interact;
