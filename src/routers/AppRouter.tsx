import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthContext from '../context/Auth/AuthContext';
import Auth from '../pages/Auth';
import HomeRoutes from './HomeRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const authContext = useContext(AuthContext);
  const { isLogged } = authContext;

  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={Auth}
          isAuthenticated={isLogged}
        />
        <PrivateRoute
          path="/"
          component={HomeRoutes}
          isAuthenticated={isLogged}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
