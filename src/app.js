import React, { Component, Fragment } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Curriculum from './components/curriculum';
import Home from './components/home';
import Estudio from './components/estudio';
import Works from './components/works';
import Exhibits from './components/exhibits';
import debounce from 'lodash-es/debounce';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollBtn: false
    }
  }
  componentDidMount() {
    window.onscroll = debounce(() => this.setState({ scrollBtn: window.scrollY > 50 }), 500);
  }

  render() {
    const year = new Date().getFullYear();

    return (
      <div className="app" ref={(re) => { this.myRef = re; }}>
        <Router>
          <Fragment>
            <header>
              <Link to="/"><img src="/logo.png" title="Go back to the homepage" alt="logo" /></Link>
              <p className="meta">
                mila [@] martosrubio.com | <a href="https://www.instagram.com/martosrubio/">Instagram</a>
              </p>
              <ul className="nav">
                <li><Link to="/dibujos-expresionistas">Dibujos expresionistas</Link></li>
                <li><Link to="/dibujos-realistas">Dibujos realistas</Link></li>
                <li><Link to="/dibujos-abstractos">Dibujos abstractos</Link></li>
                <li><Link to="/oleos-expresionistas">Óleos expresionistas</Link></li>
                <li><Link to="/oleos-realistas">Óleos realistas</Link></li>
                <li><Link to="/oleos-abstractos">Óleos abstractos</Link></li>
                <li><Link to="/curriculum">Curriculum</Link></li>
                <li><Link to="/estudio">Estudio</Link></li>
                <li><Link to="/exposiciones">Exposiciones</Link></li>
              </ul>
            </header>

            <main>
              <Route exact path="/" component={Home} />
              <Route path="/curriculum" component={Curriculum} />
              <Route path="/dibujos-expresionistas" component={Works} />
              <Route path="/dibujos-realistas" component={Works} />
              <Route path="/dibujos-abstractos" component={Works} />
              <Route path="/oleos-expresionistas" component={Works} />
              <Route path="/oleos-realistas" component={Works} />
              <Route path="/oleos-abstractos" component={Works} />
              <Route path="/estudio" component={Estudio} />
              <Route path="/exposiciones" component={Exhibits} />
            </main>
          </Fragment>
        </Router>
        {this.state.scrollBtn &&
          <button
            className="scroll-btn"
            onClick={() => this.myRef.scrollIntoView({ block: 'start', behavior: 'smooth' })}
          />}
        <footer>Milagros Martos Rubio © {year}. Todos los derechos reservados / All rights reserved</footer>
      </div>
    );
  }
}

export default App;
