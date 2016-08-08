import createReducer from '../reducers';

/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(store: any) {
  return (name, asyncReducer) => {
    if(store.asyncReducers[name]) {
      return;
    }
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };
}

/**
 * Inject an asynchronously loaded saga
 */
export function injectAsyncSagas(store: any) {
  return (sagas) => sagas.map(store.runSaga);
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store: any) {
  return {
    injectReducer: injectAsyncReducer(store),
    injectSagas: injectAsyncSagas(store),
  };
}
