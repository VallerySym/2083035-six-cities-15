import { store } from '../store/index';
import { Offers, Offer } from './offers';
import { City } from './city';
import { SortType } from '../const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OffersProcess = {
  cityActive: string;
  city: City;
  sortType: SortType;
  allOffers: Offers;
  offers: Offers;
  offersIsLoading: boolean;
  offersIsNotFound: boolean;
};

export type OfferProcess = {
  offer: Offer | null;
  offerIsLoading: boolean;
  offerIsNotFound: boolean;
};
