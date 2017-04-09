import { h } from "preact";
import { Button, Icon } from "preact-mdl";

export default (
  {
    id,
    infos: { name },
    onClick
  }
) => {
  return (
    <div>
      <Button icon onclick={() => onClick()}>
        <Icon icon="play_arrow" class="mdl-color-text--blue-800" />
      </Button>
      {name}
    </div>
  );
};
