import { h } from "preact";
import { Card, Icon, Button } from "preact-mdl";

import "./Speech.scss";

const Speech = ({ isListening, onClick }) => (
  <Card shadow="3" class="wide-card">
    <Card.Title class>
      <Card.TitleText>Voice</Card.TitleText>
    </Card.Title>
    <Card.Text class="txt-center">
      <Icon
        icon="settings_voice"
        class={
          `card-icon ${isListening ? "mdl-color-text--blue-800" : "mdl-color-text--grey"}`
        }
      />
    </Card.Text>
    <Card.Actions class="speech-button">
      <Button
        fab
        onClick={onClick}
        class={isListening ? "mdl-color--blue-800" : "mdl-color-text--grey"}
      >
        <Icon icon="check" />
      </Button>
    </Card.Actions>
  </Card>
);
export default Speech;
