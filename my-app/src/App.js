import React from 'react';
import {calculate, deleteLastEntry, clear, evaluateExpression, square, squareRoot} from './redux/actions/calculateActions';
import {connect} from 'react-redux';
import './App.css';
import Screen from './components/calculator/Screen';
import Keypad from './components/calculator/Keypad';
import * as store from './redux/store';

export class App extends React.Component {
  componentDidMount() {
    console.log('mounted calculator!');
  }

  render() {
    return (
        <div className={'calculator--container'}>
          <Screen {...this.props}/>
          {console.log("props", this.props)}
          <Keypad {...this.props}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    expression: store.getExpression(state),
    total: store.getTotal(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (buttonKey) => {
      dispatch(calculate(buttonKey))
    },
    delete: () => {
      dispatch(deleteLastEntry())
    },
    clear: () => {
      dispatch(clear())
    },
    evaluate: () => {
      dispatch(evaluateExpression())
    },
    square: () => {
      dispatch(square())
    },
    squareRoot: () => {
      dispatch(squareRoot())
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
