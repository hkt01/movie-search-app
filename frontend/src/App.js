import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Movie from './views/Movie';

function App() {
  return (
    <Router>
      <header className="App-header text-center">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a href="/" className="navbar-brand">Movie Search App</a>
        </nav>
      </header>

      <Switch>
        <Route path="/movie/:title" component={Movie} />
        <Route path="/" component={Home}/>
      </Switch>

    </Router>
  );
}

export default App;
