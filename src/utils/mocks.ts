import {
  commerce, datatype, image,
  internet, lorem, date
} from 'faker';

import { Offer, Offers } from '../types/offers';
import { Location } from '../types/location';
import { City } from '../types/city';
import { Host } from '../types/host';
import { Review, Reviews } from '../types/reviews';
import { User } from '../types/user';

const makeFakeLocation = (): Location => ({
  zoom: datatype.number({ min: 5, max: 15 }),
  latitude: datatype.number({ min: 5, max: 6, precision: 0.0001 }),
  longitude: datatype.number({ min: 4, max: 10, precision: 0.001 }),
});

const makeFakeCity = (): City => ({
  name: 'fakeCity',
  location: makeFakeLocation(),
});

const makeFakeHost = (): Host => ({
  hostName: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
});

const makeFakeOffer = (): Offer => ({
  id: datatype.string(),
  title: lorem.word(10),
  type: commerce.product(),
  price: datatype.number(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  bedrooms: datatype.number({ min: 1, max: 10 }),
  maxAdults: datatype.number({ min: 1, max: 5 }),
  isPremium: datatype.boolean(),
  isFavorite: datatype.boolean(),
  description: commerce.productDescription(),
  previewImage: image.imageUrl(260, 200, 'cat', true),
  images: Array.from({ length: 2 }, () => image.imageUrl(260, 200, 'cat', true)),
  location: makeFakeLocation(),
  city: makeFakeCity(),
  host: makeFakeHost(),
  goods: [commerce.product()],
});

const makeFakeOffers = (): Offers => Array.from({ length: 12 }, makeFakeOffer);

const makeFakeNearOffers = (): Offers => Array.from({ length: 3 }, makeFakeOffer);

const makeFakeUser = (): User => ({
  userName: internet.userName(),
  isPro: datatype.boolean(),
  avatarUrl: internet.avatar(),
});

const makeFakeReview = (): Review => ({
  id: datatype.string(),
  user: makeFakeUser(),
  rating: datatype.number({ min: 1, max: 5, precision: 0.1 }),
  comment: lorem.sentence(),
  date: String(date.recent()),
});

const makeFakeReviews = (): Reviews => Array.from({ length: 5}, makeFakeReview);

export { makeFakeLocation, makeFakeCity, makeFakeOffer, makeFakeOffers, makeFakeNearOffers, makeFakeReview, makeFakeReviews };
