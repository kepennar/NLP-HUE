import { h } from "preact";
import { CheckBox } from "preact-mdl";

const Light = ({ infos: { name, state: { reachable, on } }, onClick }) => {
  return (
    <form action="javascript:;">
      {name}
      <CheckBox onclick={() => onClick()} disabled={!reachable} checked={reachable && on}>
        {reachable && on ? "On" : "Off"}
      </CheckBox>
    </form>
  );
};

export default Light;
