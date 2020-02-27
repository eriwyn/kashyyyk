import React, {useState, useEffect}  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';
import { connect } from "react-redux";

const Previsualisation = props => {

    const [numberModifications, setNumberModifications] = useState(0);
    const [elementSelected, setElementSelected] = useState("");

    function isSelected(elementId) {
        if (elementId === elementSelected) {
            return "selected";
        }

        return "";
    }

    function clickHandler(event) {
        setElementSelected(event.target.id);
    }

    function dragOverHandler(event) {
        event.preventDefault();
    }

    function dropHandler(event) {
        event.preventDefault();
        const elementJson = event
          .dataTransfer
          .getData('text');

        props.addElement(elementJson)
        setNumberModifications(numberModifications + 1);
    }

    return <div className="previsualisation" onDragOver={dragOverHandler} onDrop={dropHandler} onClick={clickHandler}>
        <form>
            {props.formList.map((element) => {
                return <div>
                    <Element key={element.id} type={element.type} id={element.id} libelle={element.libelle} texte={element.texte} valeurs={element.valeurs} onClick={clickHandler} selected={isSelected(element.id + "Wrapper")} />
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
        addElement: element => {
            dispatch({ type: "ADD_ELEMENT", data: { element } });
        },
        removeElement: element => {
            dispatch({ type: "REMOVE_ELEMENT", data: { element } });
        }
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Previsualisation);
