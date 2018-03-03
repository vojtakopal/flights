import { createSelector } from 'reselect';
import createPrefixer from '../../utils/createPrefixer';
import parentSelector from '../selector';
import reducer from './reducer';

export const MODULE_NAME = 'search';
export const prefix = createPrefixer(MODULE_NAME);
export const moduleSelector = createSelector(parentSelector, state => state[MODULE_NAME]);
