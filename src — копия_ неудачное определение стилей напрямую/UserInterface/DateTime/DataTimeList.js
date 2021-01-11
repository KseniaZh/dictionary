import React from 'react';

const date = new Date();

function day(d){
    
    if ( d === 0 ){return 'воскресенье'} 
    if ( d === 1 ){return 'понедельник'}
    if ( d === 2 ){return 'вторник'}
    if ( d === 3 ){return 'среда'}
    if ( d === 4 ){return 'четверг'}
    if ( d === 5 ){return 'пятница'}
    if ( d === 6 ){return 'суббота'}
    
};
function month(d){
    d = d + 1;
    if ( d < 10){ return '0' + d } else { return d}
}

const DateTimeList = (props)=>{
    
    return (
        <div>
            <div> Сегодня {date.getDate()} . {month(date.getMonth())} . {date.getFullYear()}</div>
            <div> { day(date.getDay()) }</div>
        </div>
    )
}
export default DateTimeList