import React from 'react';
import RowTable from './RowTable';


function TableBody(props) {


    return (
        
        <>
            <tbody id="tablebody">
                {
                    props.dataTable.map((data, index) => <RowTable
                        dataRow={data}
                        key={index}
                        number={index + 1}
                        onclick={props.onclick}
                        onclickDelete={props.onclickDelete}
                        CountRow={props.CountRow}
                        visibleNameColumns={props.visibleNameColumns}
                        typeDataColumns={props.typeDataColumns}
                        flagOpenCompareWindow={props.flagOpenCompareWindow}
                        focusData={props.focusData}
                        classnameRowTable={props.classnameRowTable}
                        classnameCheckbox={props.classnameCheckbox}
                        classnameDescription={props.classnameDescription}
                        colorRowTableBackground={props.colorRowTableBackground}
                        colorFocusRowBackground={props.colorFocusRowBackground}
                    />
                    )
                }
            </tbody>
        </>  
    )
}

export default TableBody