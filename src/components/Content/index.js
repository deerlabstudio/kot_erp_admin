import React from 'react';
import { Route } from 'react-router-dom';

// Styles
import '../../styles/Content.css';

// Pages
import Dashboard from '../../pages/Dashboard';
import Companies from '../../pages/Companies';
import UsersTypes from '../../pages/UsersTypes';
import Users from '../../pages/Users';

const Content = () => (
  <div className="content-app">
    <Route path="/backoffice/dashboard" component={Dashboard} />
    <Route exact path="/backoffice/companies" component={Companies} />
    <Route path="/backoffice/companies/:id/users" component={Users} />
    <Route path="/backoffice/userstypes" component={UsersTypes} />
    <Route path="/backoffice/users" component={Users} />
  </div>
);

export default Content;
