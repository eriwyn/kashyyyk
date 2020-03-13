import arrayMove from '../tools/arrayMove.js';

const initialState = {
    "updateToolBox": false,
    "updatePreview": false,
    "selected": -1,
    "elements": [

    ]
};
  
const FormReducer=function(currentState = initialState, action){
    switch(action.type){
        case "ADD_ELEMENT":
            currentState.updatePreview = !currentState.updatePreview;
            action.data.element = JSON.parse(action.data.element);
            if (action.data.position) {
                action.data.element.id = "element_" + action.data.position;
                currentState.elements.splice(action.data.position, 0, action.data.element);
                currentState.selected = action.data.position;
            } else {
                action.data.element.id = "element_" + currentState.elements.length;
                currentState.elements.push(action.data.element);
                currentState.selected = currentState.elements.length - 1;
            }
            
            break;
        case "REMOVE_ELEMENT":
            currentState.updatePreview = !currentState.updatePreview;
            currentState.elements.splice(action.data.position, 1);
            currentState.selected = -1;

            break;
        case "MOVE_ELEMENT":
            currentState.updatePreview = !currentState.updatePreview;
            let newPosition = currentState.elements.length - 1;

            if (action.data.newPosition !== undefined) {
                newPosition = action.data.newPosition
            }

            currentState.elements = arrayMove(
                currentState.elements, 
                action.data.oldPosition, 
                newPosition
            );

            currentState.selected = newPosition;
            break;
        case "UPDATE_ELEMENT":
            currentState.updatePreview = !currentState.updatePreview;
            if (action.data.position > -1 && action.data.attribute) {
                currentState.elements[action.data.position][action.data.attribute] = action.data.value;
            }
            break;
        case "ADD_VALUE":
            currentState.updatePreview = !currentState.updatePreview;
            currentState.updateToolBox = !currentState.updateToolBox;

            currentState.elements[action.data.position].valeurs.push("");
            break;
        case "REMOVE_VALUE":
            currentState.updatePreview = !currentState.updatePreview;
            currentState.updateToolBox = !currentState.updateToolBox;

            currentState.elements[action.data.positionElement].valeurs.splice(action.data.positionValue, 1);
        break;
        case "SELECT_ELEMENT":
            currentState.updatePreview = !currentState.updatePreview;
            currentState.selected = false;
            if (action.data.position) {
                currentState.elements.forEach(element => {
                    element["selected"] = false;
                });

                currentState.elements[action.data.position]["selected"] = true;
                currentState.selected = action.data.position;
            }
            break;
        case "IMPORT_FORM":
            if (action.data.file) {
                currentState.updatePreview = !currentState.updatePreview;
                currentState.updateToolBox = !currentState.updateToolBox;
                
                currentState.selected = -1;

                let importedElements = JSON.parse(action.data.file);

                currentState.elements = importedElements.elements;
            }
            break;
        default:
            break;
    }

    return currentState;

}

export default FormReducer;