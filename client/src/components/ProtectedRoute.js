import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import ProtectedRoute from './ProtectedRoute';

const ProtectedRoute = ({ component: Componenet, ...rest }) => (
  <Route {...rest} render={ props => (
    isAuthenticated() ? (
      <Componenet {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }} />
    )
  )} />
)

export default ProtectedRoute