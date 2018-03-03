import { createStore } from 'redux';
import rootReducer from './modules/reducer';

export default function configureStore(initialState, middlewares) {
    const store = createStore(
        rootReducer, 
        initialState, 
        middlewares
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./modules/reducer', () => {
            console.log('replacing reducers');
            const nextRootReducer = require('./modules/reducer').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}