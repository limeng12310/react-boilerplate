import {
    ADD_CUST_NUM,
    MINUS_CUST_NUM,
} from './constants';

const initialState = {
    custNum: 1000,
};

function custMangerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CUST_NUM:
            return {...state, custNum: state.custNum + 10};
        case MINUS_CUST_NUM:
            return {...state, custNum: state.custNum - 1};
        default:
            return state;
    }
}

export default custMangerReducer;
