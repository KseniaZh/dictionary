import React from 'react';
import { connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        aboutDescription: state.stateDescription,
        employDescription: state.stateFlagsAll.employDescriptionAll
    }
}//����� ��������� � �������� ������������ �� ���������

const withHoverDescription = (Component, ComponentDescription) => {
// �������� ��������� � ��������� � ����������, ������ ����� �������� ��������� �� ���������� � �� ���������

    class ComponentWithDescription extends React.Component {

       state = {
                   isOpen: false,
                   clientX: 0,
                   clientY: 0
       }; // ��������� ��������� �������� � �������������� ��� ������� ���������� ����, � ����������� � ������ ��������

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
        //this.props.haveDescription ������ ��� Header, � ��������� � ����� �� ���
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