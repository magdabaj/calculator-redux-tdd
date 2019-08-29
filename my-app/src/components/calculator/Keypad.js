import React from 'react';
import {keypadKeys} from "../../utils/constants";
import Button from './Button';
import Screen from './Screen';

class Keypad extends React.Component {
    handleClick = key => {
        switch (key) {
            case "c":
                this.props.clear();
                break;
            case "Del":
                this.props.delete();
                break;
            case "=":
                this.props.evaluate();
                break;
            case "√":
                this.props.squareRoot();
                break;
            case "x^2":
                this.props.square();
                break;
            default:
                this.props.calculate(key);
                break;
        }
    };
    render () {
        return (
            <div className={'keypad'}>
                {
                    keypadKeys.map((block, index) => {
                        return (
                            <div key={index} className={"block"}>
                                {
                                    block.map(key => (
                                        <Button
                                            key={key}
                                            onButtonClick={this.handleClick}
                                            buttonKey={key}
                                        />
                                    ))
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Keypad;