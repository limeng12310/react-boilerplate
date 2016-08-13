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
    ADD_CUST_NUM,
    MINUS_CUST_NUM,
} from './constants';
import {fromJS} from 'immutable';

// The initial state of the CustManger
const initialState = fromJS({
    custNum: 10,
});

function custMangerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CUST_NUM:
            return state.set('custNum', state.get('custNum') + 10);
        case MINUS_CUST_NUM:
            return state.set('custNum', state.get('custNum') - 1);
        default:
            return state;
    }
}

export default custMangerReducer;
