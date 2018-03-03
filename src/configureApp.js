import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from './modules/reducer'
import configureApi from './api/configureApi';
import configureStore from './configureStore';
import App from './App';

const appConfiguration = {
    api: {
        baseUrl: 'https://api.skypicker.com', 
    },
};

const initialState = {
    app: {
        configuration: appConfiguration,
    },
};
const api = configureApi(appConfiguration.api);
const store = configureStore(
    initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(logger),
    ),
);

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
