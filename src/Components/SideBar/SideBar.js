import React from "react";
import "./SideBar.css";
import "bootstrap/dist/css/bootstrap.css";

import { CHARS } from "../../Lib/chars";
import { NUMBERS } from "../../Lib/numbers";

//console.log(RANDOMISE)

class SideBar extends React.Component {
  state = {
    password: ""
  };

  generatePass = () => {
    const SELECTED_CHARS = [];

    CHARS.forEach(el => {
      if (el.active) SELECTED_CHARS.push(el);
    });

    const CHAR = SELECTED_CHARS.map(el => {
      return el.value;
    });

    const NUM_CHARS = [...NUMBERS, ...CHAR];

    const RANDOMISE = [];
    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * NUM_CHARS.length);
      RANDOMISE.push(NUM_CHARS[random]);
    }

    this.setState({
      password: RANDOMISE
    });
  };

  render() {
    return (
      <main className="container-fluid mx-auto text-center sideBarWrapper float-right">
        <div className="row">
          <div className="col-12 my-3">
            <h2>CHECK YOUR PASSWORD !</h2>
            <h2 className="wrapperPassword p-3">{this.state.password}</h2>
            <button
              onClick={this.generatePass}
              type="button"
              className="btn btn2 my-3"
            >
              Generate !
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default SideBar;
