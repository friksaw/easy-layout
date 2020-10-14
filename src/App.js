import React from 'react';

import './styles/App.css';

import Intro from "./containers/Intro";
import Expertise from "./containers/Expertises";
import About from "./containers/About";
import Trust from "./containers/Trust";
import Contacts from "./containers/Contacts";
import Footer from "./containers/Footer";
import Header from "./components/Header";


function App() {
  return (
      <div>
          <Header/>
          <div className="Page-container">
              <Intro/>
              <About/>
              <Expertise/>
              <Trust/>
              <Contacts/>
              <Footer/>
          </div>
      </div>
  );
}


export default App;
