import { indexBy, prop } from 'ramda';
import hash from '../../utils/hash';
import { FETCH_FLIGHTS_SUCCEEDED, FETCH_FLIGHTS_FAILED, FETCH_FLIGHTS_STARTED } from "./actions";

export const INITIAL_STATE = {
    recentTerm: null,
    all: {},
    loading: {},
    errors: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_FLIGHTS_STARTED:
        {
            const key = hash(action.term);
            return { ...state, loading: { ...state.loading, [key]: true }, recentTerm: action.term };
        }
        case FETCH_FLIGHTS_SUCCEEDED: 
        {
            const key = hash(action.term);
            return { ...state, all: { ...state.all, [key]: indexBy(prop('id'))(action.flights) }, loading: { ...state.loading, [key]: false }, recentTerm: action.term };
        }
        case FETCH_FLIGHTS_FAILED: {
            const key = hash(action.term);
            return { ...state, loading: { ...state.loading, [key]: false }, errors: { ...state.erros, [key]: action.error }, recentTerm: null };
        }
        default:
            return state;
    }
};
