
import {
    ADD_NUM,
    MINUS_NUM,
} from './constants';
import {fromJS} from 'immutable';

const initialState = fromJS({
    num: 0,
});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NUM:
            return state.set('num', state.get('num') + 10);
        case MINUS_NUM:
            return state.set('num', state.get('num') - 1);
        default:
            return state;
    }
}

export default appReducer;
