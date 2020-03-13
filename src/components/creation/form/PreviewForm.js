import React from 'react';
import Element from './Element.js';
import { connect } from "react-redux";

import '../../../css/creation/preview.scss';
import '../../../css/creation/previewForm.scss';

const PreviewForm = props => {

    function clickHandler(event) {
        let position = event.target.getAttribute("data-position");
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

        if (event.target.getAttribute("data-position")) {
            let newPosition = event.target.getAttribute("data-position");
            if (["position"] in elementArray) {
                props.moveElement(elementJson, elementArray["position"], newPosition);
            } else {
                props.addElement(elementJson, newPosition);
            }
        } else {
            if (["position"] in elementArray) {
                props.moveElement(elementJson, elementArray["position"]);
            } else {
                props.addElement(elementJson)
            } 
        }
    }

    if (props.formList.length) {
        return <div className="previsualisation" onDragOver={dragOverHandler} onDrop={dropHandler}>
            <form>
                {props.formList.map((element, index) => {
                    return <Element 
                        key={index} 
                        type={element.type} 
                        position={index} 
                        libelle={element.libelle} 
                        texte={element.texte} 
                        valeurs={element.valeurs} 
                        onMouseDown={clickHandler} 
                        selected={props.selected} />
                })}
            </form>
        </div>
    } else {
        return <div className="previsualisation empty" onDragOver={dragOverHandler} onDrop={dropHandler}>
            <p>Veuillez glisser-déposer un élément dans cette zone</p>
        </div>
    }

    
}

// définition des données à récupérer dans le store
const mapStateToProps = reduxState => {
    return {
        formList: reduxState.formReducer.elements,
        formUpdate: reduxState.formReducer.updatePreview,
        selected: reduxState.formReducer.selected
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
        moveElement: (element, oldPosition, newPosition) => {
            dispatch({ type: "MOVE_ELEMENT", data: { element, oldPosition, newPosition } });
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
)(PreviewForm);
