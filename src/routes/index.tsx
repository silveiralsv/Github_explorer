import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dasboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dasboard} />
    <Route path="/repository/:repository+" exact component={Repository} />
  </Switch>
);

export default Routes;
