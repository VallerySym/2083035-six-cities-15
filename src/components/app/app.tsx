import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Spinner from '../spinner/spinner';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getOffersIsLoading } from '../../store/offers-process/offers-process.selectors';

type AppProps = {
  citiesList: string[];
}

function App({ citiesList }: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersIsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage citiesList={citiesList} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
