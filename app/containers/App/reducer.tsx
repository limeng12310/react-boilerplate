/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
    ADD_NUM,
    MINUS_NUM,
} from './constants';
import {fromJS} from 'immutable';

// The initial state of the App
const initialState = fromJS({
    num: 0,
});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NUM:
            return state.set('num', state.get('num') + 1);
        case MINUS_NUM:
            return state.set('num', state.get('num') - 1);
        default:
            return state;
    }
}

export default appReducer;
