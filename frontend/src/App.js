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
        <h1 className="text-primary">
          Movie Search App
        </h1>
      </header>

      <Switch>
        <Route path="/movie/:name" component={Movie} />
        <Route path="/" component={Home}/>
      </Switch>

    </Router>
  );
}

export default App;
