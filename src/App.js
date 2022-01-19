import './App.css';
import React, { Fragment } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import PageNotFound from './components/pages/PageNoteFound';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route component={PageNotFound} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
