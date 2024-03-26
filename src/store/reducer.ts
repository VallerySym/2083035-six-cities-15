
import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import {offers} from './offers-process/offers-process.slice';
import {offer} from './offer-process/offer-process.slice';

import {
  setCityActive,
  getOffers,
  setChangeMap,
  getSortType,
  setSortedOffers,
  loadOffers,
  loadOffer,
  setOffersIsLoading,
  setOfferIsLoading,
  setOfferIsNotFound,
  loadNearOffers,
  setNearOffersIsLoading,
  setNearOffersIsNotFound,
  requireAuthorization,
  setUser,
  addReviews,

} from './action';

import { DEFAULT_CITY, defaultLocation, SortType } from '../const';
import { getSortedOffers } from '../components/sort/utils';
import { AuthorizationStatus } from '../const';
import { Offers, Offer } from '../types/offers';
import { CityMap } from '../types/city-map';
import { UserLogIn } from '../types/user';
import { Reviews } from '../types/reviews';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.Offer]: offer.reducer,
  // [NameSpace.User]: user.reducer,
  // [NameSpace.Reviews]: reviews.reducer,
  // [NameSpace.NearOffers]: nearOffers.reducer,
  // [NameSpace.Error]: error.reducer,
});





// const reducer = createReducer(initialState, (builder) => {
//   builder
//     // .addCase(setCityActive, (state, action) => {
//     //   state.cityActive = action.payload;
//     // })

//     // .addCase(getOffers, (state) => {
//     //   if (state.allOffers.length) {
//     //     const offersByCity = state.allOffers.filter(
//     //       (item) => item?.city?.name === state.cityActive
//     //     );
//     //     state.offers = getSortedOffers(state.sortType, offersByCity);
//     //   }
//     // })

//     // .addCase(setChangeMap, (state, action) => {
//     //   state.city = action.payload;
//     // })

//     // .addCase(getSortType, (state, action) => {
//     //   state.sortType = action.payload;
//     // })

//     // .addCase(setSortedOffers, (state) => {
//     //   state.offers = getSortedOffers(state.sortType, state.offers);
//     // })

//     // .addCase(loadOffers, (state, action) => {
//     //   state.offers = action.payload;
//     // })

//     // .addCase(loadOffer, (state, action) => {
//     //   state.offer = action.payload;
//     // })

//     // .addCase(setOffersIsLoading, (state, action) => {
//     //   state.offersIsLoading = action.payload;
//     // })

//     .addCase(setOfferIsLoading, (state, action) => {
//       state.offerIsLoading = action.payload;
//     })

//     .addCase(setOfferIsNotFound, (state, action) => {
//       state.offerIsNotFound = action.payload;
//     })

//     .addCase(loadNearOffers, (state, action) => {
//       state.nearOffers = action.payload;
//     })

//     .addCase(setNearOffersIsLoading, (state, action) => {
//       state.nearOffersIsLoading = action.payload;
//     })

//     .addCase(setNearOffersIsNotFound, (state, action) => {
//       state.nearOffersIsNotFound = action.payload;
//     })

//     .addCase(requireAuthorization, (state, action) => {
//       state.authorizationStatus = action.payload;
//     })

//     .addCase(setUser, (state, action) => {
//       state.user = action.payload;
//     })

//     .addCase(addReviews, (state, action) => {
//       state.reviews = action.payload;
//     });

// });


