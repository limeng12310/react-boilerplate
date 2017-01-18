import {
    ADD_NUM,
    MINUS_NUM,
} from './constants';

const initialState = {
    num: 100,
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NUM:
            return {...state, num: state.num + 10};
        case MINUS_NUM:
            return {...state, num: state.num - 1};
        default:
            return state;
    }
}

export default appReducer;
