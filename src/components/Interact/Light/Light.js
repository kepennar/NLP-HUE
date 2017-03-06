import { h } from "preact";

const Light = ({ id, infos, activate }) => {
  return (
    <div>
      {infos.name} <button onclick={() => activate(id)}>On</button>
    </div>
  );
};

export default Light;
