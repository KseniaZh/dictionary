import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        focusData: state.focusData,
    }
}

const withContextMenuWindow = (Component, ComponentContextMenuWindow, stateCharacteristic, classname) => {

    class ComponentWithDescription extends React.Component {

       state = {
                   isOpen: false,
                   clientX: '',
                   clientY: ''
        }; // состояние наведения хранится в индивидуальном для каждого компонента хуке, в создаваемом в момент рейдинга

        openContextMenu = (event) => {
            event.preventDefault();
                            this.setState({
                                            isOpen: true,
                                            clientX: event.clientX,
                                            clientY: event.clientY
                                });
            }
        closeContextMenu = (event) => {
            event.preventDefault();
                            this.setState({
                                isOpen: false,
                                clientX: '',
                                clientY: ''
                            });
            }
        componentDidMount() {
            document.addEventListener("contextmenu", this.openContextMenu);
            document.addEventListener("click", this.closeContextMenu);
            document.addEventListener("scroll", this.closeContextMenu);
        }

        componentWillUnmount() {
            document.removeEventListener("contextmenu", this.openContextMenu);
            document.removeEventListener("click", this.closeContextMenu);
            document.removeEventListener("scroll", this.closeContextMenu);
        }
       render() {  
            return(
                <>
                    <Component {...this.props} />
                    {
                        this.state.isOpen ?
                            <ComponentContextMenuWindow
                                   stateConsoleButton={stateCharacteristic}
                                   classname={classname}
                                   clientX={this.state.clientX}
                                   clientY={this.state.clientY}
                               />
                           : null
                   }
               </> 
                )
        }
    }

    return connect(mapStateToProps)(ComponentWithDescription)
}

export default withContextMenuWindow