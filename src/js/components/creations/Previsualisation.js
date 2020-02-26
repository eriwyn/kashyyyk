import React, {useState}  from 'react';
import '../../../css/Creation.scss';
import Element from './Element.js';
import { connect } from "react-redux";


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
            case 'button':
                const button = {"genre": "input", "libelle": "button", "type": "button"}
                props.addElement(button)
                break;
        
            default:
                break;
        }
    }


    return <div className="previsualisation" onDragOver={dragOverHandler} onDrop={dropHandler}>
        {props.formList.map(element => {
            console.log(element);
        })}
    </div>
}

// définition des données à récupérer dans le store
const mapStateToProps = reduxState => {
    return {
        // on accédera à ces donnnées dans le composant via : props.userList
        formList: reduxState.formReducer.elements
    };
};

// définition des actions dispatchables
const mapDispatchToProps = dispatch => {
    return {
        // on utilisera cette fonction dans le composant via : props.addUser
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
