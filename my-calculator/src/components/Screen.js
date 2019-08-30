import React from 'react';
import { Textfit } from 'react-textfit';

const Screen = (props) => {
    return (
        <div>
            <div>
                Expression
                {props.expression}
            </div>
            <div>
                Total
                {props.total}
            </div>

            {/*<Textfit*/}
            {/*    max={40}*/}
            {/*    throttle={60}*/}
            {/*    mode="single"*/}
            {/*    className="screen-top"*/}
            {/*>*/}
            {/*    {props.expression}*/}
            {/*</Textfit>*/}
            {/*<Textfit*/}
            {/*    max={40}*/}
            {/*    throttle={60}*/}
            {/*    mode="single"*/}
            {/*    className="screen-top"*/}
            {/*>*/}
            {/*    {props.total}*/}
            {/*</Textfit>*/}
        </div>
    )
};

export default Screen;
