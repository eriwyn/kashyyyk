const initialState = {
    "elements": [

    ]
};
  
const FormReducer=function(currentState = initialState, action){
    switch(action.type){
        case "ADD_ELEMENT":
            action.data.element = JSON.parse(action.data.element);
            if (action.data.position) {
                action.data.element.id = "element_" + action.data.position;
                currentState.elements.splice(action.data.position, 0, action.data.element);
            } else {
                action.data.element.id = "element_" + currentState.elements.length;
                currentState.elements.push(action.data.element)
            }
            break;
        case "REMOVE_ELEMENT":
            action.data.element = JSON.parse(action.data.element);
            const index = action.data.element.id.replace('element_component_', '');
            if (index > -1) {
                currentState.elements.splice(index, 1);
            }

            break;
        case "UPDATE_ELEMENT":
            if (action.data.position && action.data.attribute) {
                currentState.elements[action.data.position][action.data.attribute] = action.data.value;
            }
            break;
        case "SELECT_ELEMENT":
            if (action.data.position) {
                currentState.elements.forEach(element => {
                    element["selected"] = false;
                });

                currentState.elements[action.data.position]["selected"] = true;
            }
            break;
    }

    return currentState;

}

export default FormReducer;