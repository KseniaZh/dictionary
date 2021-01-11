
import React from 'react';


const NavigationToggle = props => {

    const cls = [
        props.classname,
        'fa'
    ]

    props.isOpen ? cls.push('fa-times open') : cls.push('fa-bars')

    return (

        <span
            className={cls.join(' ')}
            onClick={props.openNavigation}
            aria-hidden="true"
        />

    )
}

export default NavigationToggle