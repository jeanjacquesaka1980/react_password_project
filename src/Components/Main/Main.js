import React from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.css";

import { CHARS } from "../../Lib/chars";
import Button from "../Button/Button";

let newCharsArr = [];

class Main extends React.Component {
  state = {
    buttons: "",
    isActive: true
  };

  componentDidMount() {
    let buttons = CHARS.map((el, index) => {
      //console.log(index);
      return (
        <div className="col-3 my-1 mx-4">
          <Button
            handleOnClick={this.handleClick}
            id={el.id}
            value={el.value}
            char={el.value}
          />
        </div>
      );
    });

    this.setState({
      buttons: buttons
    });
  }

  handleClick = id => {
    this.setState({
      isActive: !this.state.isActive
    });

    CHARS.forEach((obj, index) => {
      if (obj.id === id) obj.active = !obj.active;
    });
  };

  render() {
    // console.log(newCharsArr);
    return (
      <main className="container-fluid mx-auto text-center mainWrapper float-left">
        <div className="row">
          <div className="col-12">
            <h2 className="my-3">CHOOSE SOME CHARACTERS</h2>
          </div>
        </div>
        <div className="row">{this.state.buttons}</div>
      </main>
    );
  }
}

export default Main;
