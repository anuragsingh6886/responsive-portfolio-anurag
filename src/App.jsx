import React from 'react';
import { Navbar } from './components/Navbar';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import './styles/global.scss';

const EMAIL = 'anuragsingh6886@gmail.com';

function App() {
  return (
    <>
      <Navbar email={EMAIL} />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Services />
      <Footer email={EMAIL} />
    </>
  );
}

export default App;
