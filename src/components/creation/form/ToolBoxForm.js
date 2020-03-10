import React from 'react';
import { connect } from "react-redux";

import '../../../css/creation/toolBox.scss';

const ToolBoxForm = props => {
    const InputTextTools = () => {
        return <div className="boiteAOutils">
            <div>
                <label htmlFor="libelleTool">
                    Libellé
                </label>
                <input 
                    type="text" 
                    id="libelleTool" 
                    name="libelleTool" 
                    defaultValue={props.formList[props.selected].libelle} 
                    onChange={(event) => {
                        props.updateElement(props.selected, "libelle", event.target.value)
                    }} 
                />
            </div>
            <div>
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
            <button onClick={() => {props.removeElement(props.selected)}}>
                Supprimer l'élément
            </button>
        </div>
    }

    const TextAreaTools = () => {
        return <div className="boiteAOutils">
            <div>
                <label htmlFor="libelleTool">
                    Libellé
                </label>
                <input 
                    type="text" 
                    id="libelleTool" 
                    name="libelleTool" 
                    defaultValue={props.formList[props.selected].libelle} 
                    onChange={(event) => {
                        props.updateElement(props.selected, "libelle", event.target.value)
                    }} 
                />
            </div>
            <div>
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
            <button onClick={() => {props.removeElement(props.selected)}}>
                Supprimer l'élément
            </button>
        </div>
    }

    const SelectTools = () => {
        return <div className="boiteAOutils">
            <div>
                <label htmlFor="libelleTool">
                    Libellé
                </label>
                <input 
                    type="text" 
                    id="libelleTool" 
                    name="libelleTool" 
                    defaultValue={props.formList[props.selected].libelle} 
                    onChange={(event) => {
                        props.updateElement(props.selected, "libelle", event.target.value)
                    }} 
                />
            </div>
            {props.formList[props.selected].valeurs.map((valeur, index) => {
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
                    <button onClick={() => {
                        let newValues = props.formList[props.selected].valeurs;
                        newValues.splice(index, 1);
                        props.updateElement(props.selected, "valeurs", newValues)
                    }}>-</button>
                </div>
            })}
            <button onClick={() => {
                props.addValue(props.selected)
            }}>
                Ajouter une valeur
            </button>
            <button onClick={() => {props.removeElement(props.selected)}}>
                Supprimer l'élément
            </button>
        </div>
    }

    const RadioTools = () => {
        return <div className="boiteAOutils">
            {props.formList[props.selected].valeurs.map((valeur, index) => {
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
                    <button onClick={() => {
                        let newValues = props.formList[props.selected].valeurs;
                        newValues.splice(index, 1);
                        props.updateElement(props.selected, "valeurs", newValues)
                    }}>-</button>
                </div>
            })}
            <button onClick={() => {
                props.addValue(props.selected)
            }}>
                Ajouter une valeur
            </button>
            <button onClick={() => {props.removeElement(props.selected)}}>
                Supprimer l'élément
            </button>
        </div>
    }

    const CheckBoxTools = () => {
        return <div className="boiteAOutils">
            {props.formList[props.selected].valeurs.map((valeur, index) => {
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
                    <button onClick={() => {
                        props.removeValue(props.selected, index);
                    }}>-</button>
                </div>
            })}
            <button onClick={() => {
                props.addValue(props.selected)
            }}>
                Ajouter une valeur
            </button>
            <button onClick={() => {props.removeElement(props.selected)}}>
                Supprimer l'élément
            </button>
        </div>
    }

    const ButtonTools = () => {
        return <div className="boiteAOutils">
            <div>
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
            <button onClick={() => {props.removeElement(props.selected)}}>
                Supprimer l'élément
            </button>
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
    
    return <div className="boiteAOutils"></div>
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
