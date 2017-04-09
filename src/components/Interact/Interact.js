import { h } from "preact";
import { Grid } from "preact-mdl";

import Bulbs from "./Bulbs";
import Scenes from "./Scenes";
import Speech from "./Speech";

import './Interact.scss'
const Interact = () => (
  <Grid class="center-items">
    <Grid.Cell class="mdl-cell--8-col"><Speech /></Grid.Cell> 
    <Grid.Cell class="mdl-cell--6-col"><Bulbs /></Grid.Cell>
    <Grid.Cell class="mdl-cell--6-col"><Scenes /></Grid.Cell>
  </Grid>
);

export default Interact;
