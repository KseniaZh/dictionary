import React, {useContext} from 'react';
import FotoContext from '../../../Context/FotoContext'

function ShowPageButton (props){

const {indexBringBack} = useContext(FotoContext)

    return(
            <button 
                className = {props.ClassName}
                onClick={() => indexBringBack(props.indexFirst)}
            > 
              {props.nameBatton}
            </button>
    )
}

export default ShowPageButton