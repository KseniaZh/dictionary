import React from 'react';
import ShowPageButton from './ShowPageButton';

const funsRenderShowPageButton = (stateBatton, step, propsButton) =>{     
    let name = 1;
    let indexFirst = 0;
       
    const arr_button = [];
    
    const arr_button_push = () =>{
        
        arr_button.push(                 
                <ShowPageButton 
                    {...propsButton}
                    nameBatton={name} 
                    key={name}
                    indexFirst = {indexFirst}
                />) 
        };
        
    for( var i = stateBatton.length; i >= step;  i = i - step){

            arr_button_push();
            name = name + 1;
            indexFirst = indexFirst + step;
        };
                            
        if ( i > 0){
             arr_button_push();
            }                    
    
        return arr_button;
    };

 export default funsRenderShowPageButton                         