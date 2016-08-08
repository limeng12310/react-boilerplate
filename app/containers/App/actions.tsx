/*
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
    ADD_NUM,
    MINUS_NUM,
} from './constants';

export function addNum() {
    return {
        type: ADD_NUM,
    };
}

export function minusNum() {
    return {
        type: MINUS_NUM,
    };
}

