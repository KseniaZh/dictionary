import React from 'react';

const DescriptionButton = props => {

    return (
        
        <div
            className={ props.classname }
            style={{ top: props.clientY, left: props.clientX}}
        >
                {props.aboutDescription}
        </div>

        
    )
}

export default DescriptionButton
