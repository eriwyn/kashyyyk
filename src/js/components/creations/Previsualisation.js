import React, {useState}  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';
import { connect } from "react-redux";


const Previsualisation = props => {

    const [numberModifications, setNumberModifications] = useState(0);
    const [elementSelected, setElementSelected] = useState("");

    function clickHandler(event) {
        setElementSelected(event.target.id);
        let position = event.target.id.replace("element_component_", "")
        position = position.replace("_wrapper", "");

        props.selectElement(position);

    }

    function dragOverHandler(event) {
        event.preventDefault();
    }

    function dropHandler(event) {
        event.preventDefault();
        const elementJson = event
          .dataTransfer
          .getData('text');

        let elementArray = JSON.parse(elementJson);

        if (event.target.id) {
            let elementPosition = event.target.id.replace('element_', '');
            elementPosition = elementPosition.replace('component_', '');
            elementPosition = elementPosition.replace('_wrapper', '');

            props.addElement(elementJson, elementPosition);
        } else {
            props.addElement(elementJson)
        }

        if (elementArray["id"].includes("element_component")) {
            props.removeElement(elementJson);
        }

        setNumberModifications(numberModifications + 1);
    }

    return <div className="previsualisation" onDragOver={dragOverHandler} onDrop={dropHandler}>
        <form>
            {props.formList.map((element, index) => {
                return <div key={index} id={"element_" + index}>
                    <Element type={element.type} id={"element_component_" + index} libelle={element.libelle} texte={element.texte} valeurs={element.valeurs} onClick={clickHandler} selected={elementSelected} />
                </div>            
            })}
        </form>
    </div>
}

// définition des données à récupérer dans le store
const mapStateToProps = reduxState => {
    return {
        formList: reduxState.formReducer.elements
    };
};

// définition des actions dispatchables
const mapDispatchToProps = dispatch => {
    return {
        addElement: (element, position) => {
            dispatch({ type: "ADD_ELEMENT", data: { element, position } });
        },
        removeElement: element => {
            dispatch({ type: "REMOVE_ELEMENT", data: { element } });
        },
        updateElement: (position, attribute, value) => {
            dispatch({ type: "UPDATE_ELEMENT", data: { position, attribute, value } });
        },
        selectElement: position => {
            dispatch({ type: "SELECT_ELEMENT", data: { position } });
        },
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Previsualisation);