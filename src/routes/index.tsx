import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Detalhe from '../pages/Detalhe';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/detalhes/:professor+" component={Detalhe} />
  </Switch>
);

export default Routes;
