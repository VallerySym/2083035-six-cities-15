import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import Map from '../../components/map/map.tsx';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import LocationsList from '../../components/locations-list/locations-list';
import Sort from '../../components/sort/sort';
import NavList from '../../components/nav-list/nav-list';
import {getCityActive, getCity, getOffers, getOffersIsLoading, getOffersIsNotFound} from '../../store/offers-process/offers-process.selectors';

type MainPageProps = {
  citiesList: string[];
}

function MainPage({ citiesList }: MainPageProps): JSX.Element {
  const [cardHoverId, setCardHoverId] = useState<string | null>(null);
  const cityActive = useAppSelector(getCityActive);
  const offersActive = useAppSelector(getOffers);
  const cityMapActive = useAppSelector(getCity);
  const placesCount = offersActive.length;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Six cities.</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <NavList />
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList cities={citiesList} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in {cityActive}</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCardList offerList={offersActive} setCardHoverId={setCardHoverId} />
              </div>
            </section>
            <div className="cities__right-section">
              {/* <Map mapType={'cities'} offers={offersActive} cardHoverId={cardHoverId} city={cityMapActive} /> */}
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;
