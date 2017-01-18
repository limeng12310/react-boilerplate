import createReducer from '../reducers';

/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(store) {
    return (name, asyncReducer) => {
        if (store.asyncReducers[name]) {
            return;
        }
        store.asyncReducers[name] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };
}

/**
 * Inject an asynchronously loaded saga
 */
export function injectAsyncSagas(store) {
    return (sagas) => sagas.map(store.runSaga);
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store) {
    return {
        injectReducer: injectAsyncReducer(store),
        injectSagas: injectAsyncSagas(store),
    };
}
