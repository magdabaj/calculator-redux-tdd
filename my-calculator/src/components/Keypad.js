import React from 'react';
import Button from './Button';
import {keypadKeys} from "../utils";


class Keypad extends React.Component {
    handleClick = (key) => {
        switch (key) {
            case "c":
                this.props.clear();
                break;
            case "Del":
                this.props.deleteEntry();
                break;
            case "=":
                this.props.evaluate();
                break;
            case  "√":
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

    render() {
        return (
            <div>
                {keypadKeys.map((block, index) => {
                    // console.log("block", block);
                    // console.log("index", index);
                    return (
                        <div key={index}>
                            {block.map(key => (
                                <Button
                                    key={key}
                                    onButtonClick={this.handleClick}
                                    buttonKey={key}
                                />
                            ))}
                        </div>
                    )
                })}
            </div>
        )
    }
};

export default Keypad;