import React from 'react';

const Button = ({onButtonClick, buttonKey}) => {
    let handleClick = (e) => {onButtonClick(e.target.name)};
    return (

            <button
                onClick = {handleClick}
                name={buttonKey}
            >
                {buttonKey}
            </button>
    )
}

export default Button;