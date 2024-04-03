import { makeFakeNearOffers } from '../../utils/mocks'
import { NameSpace } from '../../const';
import { NearOffersProcess } from '../../types/state';
import { getNearOffers, getNearOffersIsLoading, getNearOffersIsNotFound } from './near-offers-process.selectors';

const fakeOffer = makeFakeNearOffers();

const fakeState: NearOffersProcess = {
    nearOffers: fakeOffer,
    nearOffersIsLoading: true,
    nearOffersIsNotFound: false,
};

let state = { [NameSpace.NearOffers]: fakeState };

describe('OfferProcess selectors', () => {
    beforeEach(() => {
        state = { [NameSpace.NearOffers]: { ...fakeState } };
    });

    it('should return "offer" from state', () => {
        const result = getNearOffers(state);

        expect(result).toEqual(fakeOffer);
    });

    it('should return true offerIsLoading status', () => {
        const result = getNearOffersIsLoading(state);

        expect(result).toEqual(true);
    });

    it('should return false offerIsNotFound status', () => {
        const result = getNearOffersIsNotFound(state);

        expect(result).toEqual(false);
    });

});