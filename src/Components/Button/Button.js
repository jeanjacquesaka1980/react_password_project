import React from "react";
import "./Button.css";
import "bootstrap/dist/css/bootstrap.css";

// const newValueChar = [];

class Button extends React.Component {
  state = {
    isClicked: false,
    valueChar: ""
  };

  handleClick = (id) => {

    this.props.handleOnClick(id);

    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    let { value, char, id } = this.props;

    const isClicked = this.state.isClicked ? "btn btn2" : "btn btn1";

    return (
      <>
        <button
          id={id}
          onClick={() => this.handleClick(id)}
          value={value}
          type="button"
          className={isClicked}
        >
          {char}
        </button>
      </>
    );
  }
}

export default Button;
