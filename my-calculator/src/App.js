import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import {calculate, clear, deleteEntry, evaluate, square, squareRoot} from "./redux/actions/calculateActions";
import Screen from './components/Screen.js';
import Keypad from './components/Keypad';

class App extends React.Component {
    render() {
        return (
            <div>
                {console.log("props", this.props)}
                <Screen {...this.props}/>
                <Keypad {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("state",state);
    return {
        expression: state.calculator.expression,
        total: state.calculator.total,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        calculate: (buttonKey) => {
            dispatch(calculate(buttonKey));
        },
        clear: () => {
            dispatch(clear());
        },
        deleteEntry: () => {
            dispatch(deleteEntry());
        },
        evaluate: () => {
            dispatch(evaluate());
        },
        square: () => {
            dispatch(square());
        },
        squareRoot: () => {
            dispatch(squareRoot());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (App);
