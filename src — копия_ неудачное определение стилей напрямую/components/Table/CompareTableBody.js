import React from 'react';
import RowCompareTable from './RowCompareTable';


function CompareTableBody(props) {


    return (
        
        <>
            <tbody>
                {
                    props.dataTable.map((data, index) => <RowCompareTable
                                                                    dataRow={data}
                                                                    focusData={props.focusData}
                                                                    key={index}
                                                                    onclick={props.onclick}
                                                                    onclickDelete={props.onclickDelete}
                                                                    colorRowTableBackground={props.colorRowTableBackground}
                                                                    colorFocusRowBackground={props.colorFocusRowBackground}
                                                        />
                    )
                }
            </tbody>
        </>  
    )
}

export default CompareTableBody