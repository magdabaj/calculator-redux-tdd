import {createStore, combineReducers} from "redux";
import reducer from './reducers/calculateReducer';

const rootReducer = combineReducers({
    calculator: reducer
});

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

