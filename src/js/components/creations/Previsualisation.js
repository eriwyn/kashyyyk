import React, {useState}  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';
import { connect } from "react-redux";
import jsonToHtml from '../../tools/jsonToHtml.js';


const Previsualisation = props => {
    function dragOverHandler(event) {
        event.preventDefault();
    }

    function dropHandler(event) {
        event.preventDefault();
        const id = event
          .dataTransfer
          .getData('text');

        switch (id) {
            case 'elementButton':
                const button = {"genre": "input", "libelle": "button", "type": "button", "id": "test"}
                props.addElement(button)
                break;
        
            default:
                break;
        }
    }


    return <div className="previsualisation" onDragOver={dragOverHandler} onDrop={dropHandler} dangerouslySetInnerHTML={{__html: jsonToHtml(props.formList)}}>
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
