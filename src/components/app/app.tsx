import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, CITIES } from '../../constants/constants';
import { PrivateRoute, PublicRoute } from '../routes/routes';

import { MainScreen, type MainScreenProps } from '../../pages/main-screen/main-screen';
import { FavoritesScreen } from '../../pages/favorites-screen/favorites-screen';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { OfferScreen } from '../../pages/offer-screen/offer-screen';
import { NotFoundScreen } from '../../pages/not-found-screen/not-found-screen';

type AppProps = MainScreenProps;

function App({resultCount}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>

        {/* главная страница '/' перенаправляет на страницу первого города в списке  */}
        <Route path={AppRoute.Main}>
          <Route
            index
            element={<Navigate to={CITIES[0].slug}/>}
          />

          {/* генерация страниц городов: '/paris', '/cologne' и др */}
          {CITIES.map((city) => (
            <Route
              key={city.slug}
              path={`/:${city.slug}`}
              element={<MainScreen resultCount={resultCount}/>}
            />
          ))}
        </Route>

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PublicRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen/>}
        >
        </Route>
        <Route
          path='*'
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
