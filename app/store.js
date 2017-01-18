/**
 * Create the store with asynchronously loaded reducers
 */

import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
// import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';


// const sagaMiddleware = createSagaMiddleware();


export default function configureStore(initialState = {}, history) {
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
        initialState,
        compose(
            applyMiddleware(...middlewares),
            ...enhancers
        )
    );

    // Extensions
    // store.runSaga = sagaMiddleware.run;
    store['asyncReducers'] = {}; // Async reducer registry


    return store;
}
