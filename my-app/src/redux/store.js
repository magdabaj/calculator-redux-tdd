import {createStore, combineReducers} from 'redux';
import calculateReducer from './reducers/calculateReducer';

const rootReducer = combineReducers({
    calculator: calculateReducer
});

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const getExpression = (state) => {
    console.log("state getExpression", state.calculator.expression);
    return state.calculator.expression
};

export const getTotal = (state) => {
    console.log("state getTotal", state.calculator.total);
    return state.calculator.total
};