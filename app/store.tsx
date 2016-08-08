interface Window {
    devToolsExtension?: any;
}
declare var window: Window;

/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
// import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';


// const sagaMiddleware = createSagaMiddleware();



export default function configureStore(initialState = {}, history) {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [
        // sagaMiddleware,
        routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ];
    const store = createStore(
        createReducer(),
        fromJS(initialState),
        compose(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    );

    // Extensions
    // store.runSaga = sagaMiddleware.run;
    store['asyncReducers'] = {}; // Async reducer registry

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            System.import('./reducers').then((reducerModule) => {
                const createReducers = reducerModule.default;
                const nextReducers = createReducers(store['asyncReducers']);

                store.replaceReducer(nextReducers);
            });
        });
    }

    return store;
}