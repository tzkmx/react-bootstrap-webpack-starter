import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { OwnProps, FromAuthContextProps } from './index';

// #region types
type Props = RouteComponentProps & OwnProps & FromAuthContextProps;
// #endregion

function PrivateRoute(props: Props) {
  const { component: InnerComponent, ...rest } = props;
  const { location, checkUserIsConnected } = props;

  const { isAuthenticated = false } = !!window && checkUserIsConnected();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <InnerComponent {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

PrivateRoute.displayName = 'PrivateRoute';

export default PrivateRoute;
