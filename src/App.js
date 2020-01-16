import React from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import SideBar from './Components/SideBar/SideBar';

function App() {

  return (
    <div>
      <Header />
      <Main />
      <SideBar />
    </div>
  );
}

export default App;
