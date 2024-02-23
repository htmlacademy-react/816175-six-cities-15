import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants/constants';

type AccessStatusProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const createAccessStatus = (status: AuthorizationStatus, route: AppRoute) =>
  function AccessStatus({authorizationStatus, children} : AccessStatusProps) {
    return (
      authorizationStatus === status
        ? children
        : <Navigate to={route}/>
    );
  };

const PrivateRoute = createAccessStatus(AuthorizationStatus.Auth, AppRoute.Login);
const PublicRoute = createAccessStatus(AuthorizationStatus.NoAuth, AppRoute.Main);

export { PrivateRoute, PublicRoute };
