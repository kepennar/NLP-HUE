import { h } from "preact";
import { Grid } from "preact-mdl";

import Bulbs from "./Bulbs";
import Speech from "./Speech";

const Interact = () => (
  <Grid>
    <Grid.Cell class="mdl-cell--8-col"><Bulbs /></Grid.Cell>
    <Grid.Cell class="mdl-cell--4-col"><Speech /></Grid.Cell>
  </Grid>
);

export default Interact;
