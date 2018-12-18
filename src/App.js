import React, { Component } from 'react';
import './App.css';
import Index from './components/layouts/Index';
import Lyrics from './components/tracks/Lyrics';
import NavBar from './components/layouts/NavBar';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';

import  { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/lyrics/track/:id" component={Lyrics}/>
              </Switch>
            </div>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
