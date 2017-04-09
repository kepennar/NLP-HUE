import { h, Component } from "preact";

export default class BriSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  updateVal = e => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onInput(value);
  };

  render(props, { value }) {
    const { min, max } = this.props;
    const range = max - min;
    const styleLower = `flex: ${value / range} 1 0%;`;
    const styleUpper = `flex: ${1 - value / range} 1 0%;`;
    return (
      <div class="mdl-slider__container">
        <input
          class="mdl-slider mdl-js-slider is-upgraded"
          type="range"
          tabindex="0"
          {...props}
          value={value}
          onInput={this.updateVal}
        />

        <div class="mdl-slider__background-flex">
          <div class="mdl-slider__background-lower" style={styleLower} />
          <div class="mdl-slider__background-upper" style={styleUpper} />
        </div>
      </div>
    );
  }
}
