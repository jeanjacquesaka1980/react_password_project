import React from "react";
import "./Main.css";
import "bootstrap/dist/css/bootstrap.css";

import { CHARS } from "../../Lib/chars";
import Button from "../Button/Button";

class Main extends React.Component {

    state = {
        buttons: "",
    }

    componentDidMount(){

        let buttons = CHARS.map((el, index )=> {
            console.log(index)
            return (
              <div className="col-3 my-1 mx-4">
                <Button id={index} value={el} char={el} />
              </div>
            );
          }); 

          this.setState({
              buttons: buttons
          })
    }

  render() {

    return (
      <main className="container-fluid mx-auto text-center mainWrapper float-left">
        <div className="row">
          {this.state.buttons}
        </div>
      </main>
    );
  }
}

export default Main;
