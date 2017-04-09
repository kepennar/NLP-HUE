import { h } from "preact";
import { Card, Icon } from "preact-mdl";

import Scene from "./Scene";
import "./Scenes.scss";

export default ({ scenes, getBulbs }) => (
  <Card shadow="3" class="wide-card">
    <Card.Title class>
      <Card.TitleText>Scenes</Card.TitleText>
    </Card.Title>
    <Card.Text class="txt-center">
      <Icon icon="landscape" class="card-icon mdl-color-text--blue-800" />
    </Card.Text>
    <Card.Actions class="scrollable-content">
      {Object.entries(scenes).map(([id, infos]) => (
        <Scene key={id} id={id} infos={infos} />
      ))}
    </Card.Actions>
  </Card>
);
