import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import BackOffice from './pages/BackOffice';
import NotFound from './pages/NotFound';

const App = () => (
  <main>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/login" component={Login} />
      <Route path="/backoffice" component={BackOffice} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default App;
