import React from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import Chess from './components/Chess';
import Login from './components/Login';
import Timer from './components/Timer';

function App() {
  return (
    <>
      <Header/>
      <Timer/>
      <div id="content-div">
        <Login/>
        <Chess/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
