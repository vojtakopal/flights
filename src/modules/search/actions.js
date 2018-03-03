import createAction from '../../utils/createAction';

export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const FETCH_FLIGHTS_SUCCEEDED = FETCH_FLIGHTS + '_SUCCEEDED';
export const FETCH_FLIGHTS_FAILED = FETCH_FLIGHTS + '_FAILED';
export const FETCH_FLIGHTS_STARTED = FETCH_FLIGHTS + '_STARTED';

export const fetchFlights = term => (dispatch, getState, api) => {
    dispatch(createAction(FETCH_FLIGHTS_STARTED, { term }));
    return api.fetchFlights(term)
        .then(flights => {
            dispatch(createAction(FETCH_FLIGHTS_SUCCEEDED, { term, flights }));
        })
        .catch(error => {
            dispatch(createAction(FETCH_FLIGHTS_FAILED, { term, error }));
        });
};

