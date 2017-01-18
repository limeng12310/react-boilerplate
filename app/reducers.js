import {combineReducers} from 'redux';
import {LOCATION_CHANGE} from 'react-router-redux';
import globalReducer from './containers/App/reducer';

// Initial routing state
const routeInitialState = {
    locationBeforeTransitions: null,
};

/**
 * Merge route into the global application state
 */
function routerReducer(state = routeInitialState, action) {
    if (action.type === LOCATION_CHANGE) {
        return {...state, locationBeforeTransitions: action.payload};
    }

    return state;
}


export default function createReducer(asyncReducers = {}) {

    const reducers = Object.assign({routing: routerReducer, global: globalReducer}, asyncReducers);
    return combineReducers(reducers);
}