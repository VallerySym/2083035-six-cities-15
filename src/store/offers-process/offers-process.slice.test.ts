import { offers } from './offers-process.slice';
import { OffersProcess } from '../../types/state';
import { makeFakeOffers } from '../../utils/mocks';
import { fetchOffersAction } from '../api-actions';
import { DEFAULT_CITY, DEFAULT_LOCATION, DEFAULT_SORT } from '../../const';

const initialState: OffersProcess = {
  cityActive: DEFAULT_CITY,
  city: DEFAULT_LOCATION,
  sortType: DEFAULT_SORT,
  allOffers: [],
  offers: [],
  offersIsLoading: false,
  offersIsNotFound: false,
};

let state: OffersProcess;

describe('Slice offers-process', () => {

  beforeEach(() => {
    state = { ...initialState };
  });

  it('should return initial state with empty action ', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersProcess = { ...initialState };

    const result = offers.reducer(initialState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersProcess = { ...initialState };

    const result = offers.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('fetchOffersAction fulfilled', () => {
    const fakeOffers = makeFakeOffers();
    const expectedState: OffersProcess = { ...initialState, offers: fakeOffers };

    const result = offers.reducer(state, { type: fetchOffersAction.fulfilled.type, payload: fakeOffers });

    expect(result).toEqual(expectedState);
  });

  it('fetchOffersAction rejected', () => {
    const expectedState: OffersProcess = { ...initialState, offersIsLoading: false, offersIsNotFound: true };
    const actualState: OffersProcess = { ...initialState, offersIsLoading: true, offersIsNotFound: false };

    const result = offers.reducer(actualState, { type: fetchOffersAction.rejected.type });

    expect(result).toEqual(expectedState);
  });
});
