import {operators, specialOperators} from "../../utils/constants";
import React from 'react';

const Button = ({onButtonClick, buttonKey}) => {
    let handleClick = (e) => {
        onButtonClick(e.target.textContent)
    };

    let className = [
        'btn',
         operators.includes(buttonKey) ? 'btn--orange' : '',
        specialOperators.includes(buttonKey) ? 'btn--grey' : '',
        buttonKey === '0' ? 'btn--zero' : ''
    ];

    return (
        <button
            name={buttonKey}
            onClick={handleClick}
            className={className.join(' ').trim()}>
            {buttonKey}
        </button>
    )

};

export default Button;