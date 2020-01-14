import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const charsArray = ["&", "("];
  let finalArray = [...numbersArray, ...charsArray];

  let permutation = [];
  // emptyArray = [...numbersArray, ...charsArray];

  finalArray.map(el => {
    finalArray.map(el2 => {
      finalArray.map(el3 => {
        finalArray.map(el4 => {
          permutation.push([el, el2, el3, el4])
        })
      })
    })   
  });

const generatePass = (arr) => {
  const array = [];
  for (let i = 0; i < 4; i ++){

    let random = Math.floor(Math.random() * arr.length)
    //console.log(random)
    array.push(arr[random]);
  }
  return array.join("")
}

let password = generatePass(finalArray);

let control = permutation.forEach(el => {
  if (password !== el) {
    console.log("Not same")
  }
})



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {password}
        {control}
      </header>
    </div>
  );
}

export default App;
