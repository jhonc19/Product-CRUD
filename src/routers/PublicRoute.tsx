import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

type PublicRouteProps = {
  isAuthenticated: boolean;
  component: any;
  exact: boolean;
  path: string;
};

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...otherProps
}: PublicRouteProps) => {
  return (
    <Route
      {...otherProps}
      component={(prop: { props: any }) =>
        !isAuthenticated ? <Component {...prop.props} /> : <Redirect to="/" />
      }
    />
  );
};

PublicRoute.prototypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
