import { BrowserRouter as Router, Route } from 'react-router-dom';

import { library } from '../node_modules/@fortawesome/fontawesome-svg-core';
import { fab } from '../node_modules/@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '../node_modules/@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './js/ActiveLink';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import './assets/cover.css';
import './assets/education.css';

import Home from './js/Home';
import Education from './js/Education';
import Notfound from './js/notfound';
import Experience from './js/Experience';
import Training from './js/Training';
import Awards from './js/Awards';
import Projects from './js/Projects';

import * as serviceWorker from './serviceWorker';
library.add(fab, faCheckSquare, faCoffee);

const routing = (
  <Router>
      <Route exact path="/" component={Home} />
      <Route  path="/Home" component={Home} />
      <Route  path="/Education" component={Education} />
      <Route  path="/Experience" component={Experience} />
      <Route  path="/Training" component={Training} />
      <Route  path="/Awards" component={Awards} />
      <Route  path="/Projects" component={Projects} />


  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
