
import {createSelector} from 'reselect';

const selectCustManger = () => (state) => state.get('custManger');
const selectCustNum = () => createSelector(
    selectCustManger(),
    (custMangerState) => custMangerState.get('custNum')
);

export {
    selectCustManger,
    selectCustNum,
};
