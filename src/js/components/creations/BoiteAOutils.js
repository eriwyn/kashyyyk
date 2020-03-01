import React, { useEffect, useState }  from 'react';
import '../../../css/Creation.scss';
import { connect } from "react-redux";

const BoiteAOutils = props => {
    const [elementSelected, setElementSelected] = useState("");

    const InputTextTools = () => {
        let position = elementSelected.id.replace("element_", "");
        console.log(position);
        return <div className="boiteAOutils">
            <div>
                <label htmlFor="libelleTool">Libellé</label>
                <input type="text" id="libelleTool" name="libelleTool" defaultValue={elementSelected.libelle}  onChange={(event) => {props.updateElement(position, "libelle", event.target.value)}} />
            </div>
            <div>
                <label htmlFor="texteTool">Texte</label>
                <input type="text" id="texteTool" name="texteTool" defaultValue={elementSelected.texte} onChange={(event) => {props.updateElement(position, "texte", event.target.value)}} />
            </div>
            <button onClick={() => {props.removeElement(position)}}>Supprimer l'élément</button>
        </div>
    }

    useState(() => {
        props.formList.forEach(element => {
            if (element["selected"]) {
                setElementSelected(element);
            }
        });
    });

    

    switch (elementSelected.type) {
        case 'champ_texte':
            return <InputTextTools />
    
        default:
            break;
    }

    return <div className="boiteAOutils"></div>
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
        removeElement: position => {
            dispatch({ type: "REMOVE_ELEMENT", data: { position } });
        },
        updateElement: (position, attribute, value) => {
            dispatch({ type: "UPDATE_ELEMENT", data: { position, attribute, value } });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoiteAOutils);
