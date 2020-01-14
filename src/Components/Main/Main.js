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
            id={index}
            value={el}
            char={el}
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
    })

    // for (let i = 0; i < CHARS.length; i ++){
    //     if (newCharsArr[i] === CHARS[i]){
    //         newCharsArr.slice(1);
    //     } else if (newCharsArr[i] !== CHARS[i]) {
    //             newCharsArr.push(CHARS[i]);
    //           }
    // }

    CHARS.forEach((obj, index) => {
      if (newCharsArr.includes(obj)) {
        console.log("got it !")
        newCharsArr.slice(0, 1);

      } else if (index === id) {
        newCharsArr.push(obj);
      }
    });
    console.log(newCharsArr);
  };

  render() {
    return (
      <main className="container-fluid mx-auto text-center mainWrapper float-left">
        <div className="row">{this.state.buttons}</div>
      </main>
    );
  }
}

export default Main;
