import { h } from "preact";

const Light = ({ infos, onClick }) => {
  return (
    <div>
      {infos.name} <button onclick={() => onClick()}>On</button>
    </div>
  );
};

export default Light;
