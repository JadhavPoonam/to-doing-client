import React, { Component } from 'react'
import AuthService from '../service/auth.service'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(this.props);
  return <Route
    {...rest}
    render={props =>
      AuthService.validate() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
};

export default ProtectedRoute
