import React from 'react';

function Img(props) {

    return <div className="">
                <img
                    className={props.classNameImg}
                    src={props.src}
                    alt={props.alt}
                    tabIndex={props.tabindex}
                    contextMenu={props.contextmenu}
                />
            </div>
 
}

export default Img