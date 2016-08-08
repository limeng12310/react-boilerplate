/**
 * The global state selectors
 */

import {createSelector} from 'reselect';

const selectGlobal = () => (state) => state.get('global');

const selectNum = () => createSelector(
    selectGlobal(),
    (globalState) => globalState.get('num')
);


export {
    selectGlobal,
    selectNum,
};
