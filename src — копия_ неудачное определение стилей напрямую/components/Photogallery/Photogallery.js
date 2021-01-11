import React from 'react';
import Img from '../../UserInterface/Img/Img';

function Photogallery(props) {

    return (

        <div className="">
            {
                props.imageArr.map((obj, index) => {
                    return <Img
                                key={index}
                                src={obj.src}
                                alt={obj.alt}
                                tabIndex={obj.tabindex}
                                contextMenu={obj.contextmenu}
                                classNameImg = ""
                            />
                })
            }     
            </div>

    )
}

export default Photogallery