import React from 'react';
import { Switch, Route } from 'react-router';

import Curriculum from './components/curriculum';
import Home from './components/home';
import Estudio from './components/estudio';
import Works from './components/works';
import Exhibits from './components/exhibits';

const routes = (
    <Switch>
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
    </Switch>
)

export const Routes = () => (routes);

export default (
    routes
);