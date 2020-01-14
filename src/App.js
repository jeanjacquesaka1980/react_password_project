import React from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import SideBar from './Components/SideBar/SideBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <SideBar />
      <Footer />
      {/* <Permutation /> */}
    </div>
  );
}

export default App;
