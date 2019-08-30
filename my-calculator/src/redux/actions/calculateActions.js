import * as types from './actionTypes';

export const calculate = (key) => {
    return {
        type: types.SET_EXPRESSION,
        payload: key
    }

};

export const clear = () => {
    return {
        type: types.CLEAR
    }
};

export const deleteEntry = () => {
    return {
        type: types.CLEAR_LAST_ENTRY
    }
};

export const evaluate = () => {
    return {
        type: types.EVALUATE_EXPRESSION
    }
};

export const square = () => {
    return {
        type: types.SQUARE
    }
};

export const squareRoot = () => {
    return {
        type: types.SQUARE_ROOT
    }
};