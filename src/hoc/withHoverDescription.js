import React from 'react';
import { connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        aboutDescription: state.stateDescription,
        employDescription: state.stateFlagsAll.employDescriptionAll
    }
}//текст подсказки и согласие пользователя на подсказки

const withHoverDescription = (Component, ComponentDescription) => {
// передаем компонент и компонент с подсказкой, пропсы через основной компонент из контейнера и из хранилища

    class ComponentWithDescription extends React.Component {

       state = {
                   isOpen: false,
                   clientX: 0,
                   clientY: 0
       }; // состояние наведения хранится в индивидуальном для каждого компонента хуке, в создаваемом в момент рейдинга

       mouseOver = (event) => {
           let positionCoefficient = 1;
               if (this.props.positionDescription === "top") {
                   positionCoefficient =  0.75;
               } else if (this.props.positionDescription === "botton") {
                   positionCoefficient = 1.25;
               };

           this.setState({
                   isOpen: true,
                   clientX: event.clientX,
                   clientY: event.clientY * positionCoefficient
               });
       }
       mouseOut = () => this.setState({
                                isOpen: false,
                                clientX: 0,
                                clientY: 0
                           });
        //this.props.haveDescription только для Header, в остальных в пропс их нет
       render() {  
            return(
                <div
                    onMouseOver={this.mouseOver}
                    onMouseOut={this.mouseOut}
                    onClick={this.mouseOut}
                >
                    {
                        this.state.isOpen === true && this.props.employDescription === true && this.props.haveDescription !== false ?

                            < ComponentDescription
                                aboutDescription={this.props.aboutDescription[this.props.name]}
                                classname={this.props.classnameDescription}
                                clientX={this.state.clientX}
                                clientY={this.state.clientY}
                            />
                            : null
                    }
                    <Component {...this.props} />
                </div>
                )
        }
    }

    return connect(mapStateToProps)(ComponentWithDescription)
}

export default withHoverDescription