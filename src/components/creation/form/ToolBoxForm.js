import React from 'react';
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

import '../../../css/creation/toolBox.scss';
import '../../../css/creation/toolBoxForm.scss';

const ToolBoxForm = props => {

    const LibelleTool = () => {
        return <div className="libelleTool">
            <label htmlFor="libelleTool">
                Libellé
            </label>
            <input 
                type="text" 
                id="libelleTool" 
                name="libelleTool" 
                defaultValue={props.formList[props.selected].libelle} 
                onChange={(event) => {
                    console.log(props.selected);
                    console.log(event.target.value);
                    props.updateElement(props.selected, "libelle", event.target.value)
                }} 
            />
        </div>
    }

    const TextTool = () => {
        return <div className="textTool">
            <label htmlFor="texteTool">
                Texte
            </label>
            <input 
                type="text" 
                id="texteTool" 
                name="texteTool" 
                defaultValue={props.formList[props.selected].texte} 
                onChange={(event) => {
                    props.updateElement(props.selected, "texte", event.target.value)
                }} 
            />
        </div>
    }

    const DeleteTool = () => {
        return <button className="delete" onClick={() => {props.removeElement(props.selected)}}>
            <FontAwesomeIcon  icon={faTimes}></FontAwesomeIcon> Supprimer l'élément
        </button>
    }

    const ValuesTool = () => {
        return <div className="valuesTool">
            <button onClick={() => {
                props.addValue(props.selected)
            }}>
                <FontAwesomeIcon  icon={faPlus}></FontAwesomeIcon> Ajouter une valeur
            </button>
            {props.formList[props.selected].valeurs.map((valeur, index) => {
                let deleteButton = false;
                if (props.formList[props.selected].valeurs.length > 1) {
                    deleteButton = <button  className="delete" onClick={() => {
                        props.removeValue(props.selected, index);
                    }}><FontAwesomeIcon  icon={faTimes}></FontAwesomeIcon></button>
                }
                
                return <div key={index}>
                    <input 
                        type="text" 
                        id="libelleTool" 
                        name="libelleTool" 
                        defaultValue={valeur} 
                        onChange={(event) => {
                            let newValues = props.formList[props.selected].valeurs;
                            newValues[index] = event.target.value;
                            props.updateElement(props.selected, "valeurs", newValues)
                        }} 
                    />
                    {deleteButton}
                </div>
            })}
        </div>
    }

    const InputTextTools = () => {
        return <div className="boiteAOutils">
            <LibelleTool />
            <TextTool />
            <DeleteTool />
        </div>
    }

    const TextAreaTools = () => {
        return <div className="boiteAOutils">
            <LibelleTool />
            <TextTool />
            <DeleteTool />
        </div>
    }

    const SelectTools = () => {
        return <div className="boiteAOutils">
            <LibelleTool />
            <ValuesTool />
            <DeleteTool />
        </div>
    }

    const RadioTools = () => {
        return <div className="boiteAOutils">
            <ValuesTool />
            <DeleteTool />
        </div>
    }

    const CheckBoxTools = () => {
        return <div className="boiteAOutils">
            <ValuesTool />
            <DeleteTool />
        </div>
    }

    const ButtonTools = () => {
        return <div className="boiteAOutils">
            <TextTool />
            <DeleteTool />
        </div>
    }

    if (props.selected > -1) {
        switch (props.formList[props.selected].type) {
            case 'champ_texte':
                return <InputTextTools />
            
            case 'zone_texte':
                return <TextAreaTools />
    
            case 'bouton':
                return <ButtonTools />

            case 'select':
                    return <SelectTools />

            case 'radio':
                return <RadioTools />

            case 'checkbox':
                return <CheckBoxTools />
        
            default:
                break;
        }
    }
    
    return <div className="boiteAOutils">
        <p>Aucun élément sélectionné...</p>
    </div>
}

// définition des données à récupérer dans le store
const mapStateToProps = reduxState => {
    return {
        formList: reduxState.formReducer.elements,
        formUpdate: reduxState.formReducer.updateToolBox,
        selected: reduxState.formReducer.selected
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
        },
        addValue: (position) => {
            dispatch({ type: "ADD_VALUE", data: { position } });
        },
        removeValue: (positionElement, positionValue) => {
            dispatch({ type: "REMOVE_VALUE", data: { positionElement, positionValue } });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolBoxForm);
