import React, { Component, Fragment } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from './assets/logo.png';
import Curriculum from './components/curriculum';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <a href="/"><img src={Logo} alt="Go back to the homepage"/></a>
          <p className="meta">
            mila [@] martosrubio.com | <a href="https://www.instagram.com/martosrubio/">Instagram</a>
          </p>
          <Router>
            <Fragment>
              <ul className="nav">
                <li><Link to="/dibujos-expresionistas">Dibujos expresionistas</Link></li>
                <li><Link to="/dibujos-realistas">Dibujos realistas</Link></li>
                <li><Link to="/oleos-expresionistas">Óleos expresionistas</Link></li>
                <li><Link to="/oleos-realistas">Óleos realistas</Link></li>
                <li><Link to="/retratos">Retratos</Link></li>
                <li><Link to="/curriculum">Curriculum</Link></li>
              </ul>

              { /*<Route exact path="/" component={Home} /> */}
              <Route path="/curriculum" component={Curriculum} />
            </Fragment>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
