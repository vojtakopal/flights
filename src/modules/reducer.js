import { combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { MODULE_NAME as appKey, reducer as appReducer } from './app';
import { MODULE_NAME as searchKey, reducer as searchReducer } from './search';

const combinedReducers = combineReducers({
    [appKey]: appReducer,
    [searchKey]: searchReducer,

    form: formReducer,
});

export default combinedReducers;
