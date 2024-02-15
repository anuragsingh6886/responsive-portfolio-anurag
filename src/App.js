import React from "react";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/AboutMe";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import './client/scss/page.scss';

const email = 'anuragsingh6886@gmail.com'; // Professional email Id

function App() {
  return (
    <>
      <Navbar email={email}></Navbar>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Footer email={email}></Footer>
    </>
  );
}

export default App;
