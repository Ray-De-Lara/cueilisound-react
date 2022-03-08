import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './Components/Navigation'
import Main from './Components/Main'
import Paquetes from './Components/Paquetes'
import Aboutus from './Components/Aboutus'
import Contact from './Components/Contact'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />

      <div className="container p-4">
        <Route path="/" exact component={Main} />
        <Route path="/paquetes" component={Paquetes} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/contacto" component={Contact} />
      </div>

    </Router>

  );
}

export default App;