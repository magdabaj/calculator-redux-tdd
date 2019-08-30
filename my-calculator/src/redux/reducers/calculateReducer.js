import * as types from '../actions/actionTypes';
import calculate from '../../utils';

const initialState = {
    expression: '',
    total: 0
};

function setExpression({ expression, total }, action) {
    if (/[\d]*[-+%*/.]$/.exec(expression) && /[-+%*/.]/.exec(action.payload)) {
        console.log("b", expression);
        expression = expression.slice(0, expression.length - 1);
        console.log("a", expression);
    }

    switch (action.type) {
        case types.SET_EXPRESSION:
            if (["+", "/", "*", "%"].includes(action.payload) && !expression) {
                return `${total}${action.payload}`;
            }
            return `${!expression && total ? total : ""}${expression +
            action.payload}`;
        default:
            return expression;
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EXPRESSION:
            let expression = setExpression(state, action);
            return {
                ...state,
                expression,
                total: calculate(state.total) || state.total
            };
        case types.CLEAR:
            return {
                ...state,
                expression: "",
                total: 0
            };
        case types.CLEAR_LAST_ENTRY:
            let exp = state.expression;
            exp = exp.split("").slice(0, exp.length - 1).join("");
            return {
                ...state,
                expression: exp,
                total: state.total
            };
        case types.EVALUATE_EXPRESSION:
            return {
                ...state,
                expression: "",
                total: calculate(state.expression) || state.expression || state.total
            };
        case types.SQUARE:
            return {
                ...state,
                expression: "",
                total: state.expression * state.expression
            };
        case types.SQUARE_ROOT:
            return {
                ...state,
                expression: "",
                total: Math.sqrt(state.expression)
            };
        default:
            return state;
    }

}