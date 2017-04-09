import { h } from "preact";
import { CheckBox, Slider } from "preact-mdl";

import BriSlider from "./BriSlider";

export default (
  {
    id,
    infos: { name, state: { reachable, on, bri } },
    onClick,
    onChangeBri
  }
) => {
  return (
    <form action="javascript:;">
      {name}
      {reachable
        ? <div>
            <CheckBox
              onclick={() => onClick()}
              disabled={!reachable}
              checked={reachable && on}
            >
              {on ? "On" : "Off"}
            </CheckBox>
            {on && <BriSlider
              name={`bri-${id}`}
              value={bri}
              min={0}
              max={254}
              disabled={!on}
              onInput={value => onChangeBri(value)}
            />}
          </div>
        : <CheckBox disabled={true} checked={false}>
            "Off"
          </CheckBox>}
    </form>
  );
};
