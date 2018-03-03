import { createSelector } from 'reselect';
import { values } from 'ramda';
import parentSelector from '../selector';
import { MODULE_NAME } from './';
import hash from '../../utils/hash';

export const getSearch = createSelector(parentSelector, state => state[MODULE_NAME]);
export const getRecentTerm = createSelector(getSearch, search => search.recentTerm);

export const isLoading = createSelector(
    getSearch,
    getRecentTerm,
    (search, term) => term && search.loading[hash(term)],
);

export const getError = createSelector(
    getSearch,
    getRecentTerm,
    (search, term) => term ? search.errors[hash(term)] : [],
);

export const getRecentlySearchedFlights = createSelector(
    getSearch, 
    getRecentTerm,
    (search, term) => term ? values(search.all[hash(term)]) : [],
);
