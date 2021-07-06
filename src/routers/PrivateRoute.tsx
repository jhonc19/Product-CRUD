import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

type PrivateRouteProps = {
  isAuthenticated: boolean;
  component: any;
  path: string;
};

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...otherProps
}: PrivateRouteProps) => {
  return (
    <Route
      {...otherProps}
      component={(prop: { props: any }) =>
        isAuthenticated ? (
          <Component {...prop.props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.prototypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
