const initialState = {
    "lines": 4,
    "columns": 3,
    "head": true,
    "foot": false,
    "lines":[
        ["blabla","blabla2","blabla3"],
        ["truc","bidule","machin"],
        ["truc","bidule","machin"],
        ["truc","bidule","machin"],
        ["truc","bidule","machin"],
        ["tableau","formulaire","pateBolo"]
    ]
};

const FormReducer=function(currentState = initialState, action){
    switch(action.type){
        case "ADD_LINE":
            currentState.lines ++;
            currentState.lines.push([]);
            break;
        case "ADD_COLUMN":
            currentState.colums ++;
            break;
        case "REMOVE_LINE":
            currentState.lines --;
            currentState.lines.splice(action.data.position, 1);
            break;
        case "REMOVE_COLUMN":
            currentState.columns --;
            currentState.lines.forEach(line => {
                line.splice(action.data.position, 1)
            });
            break;
        case "ADD_HEAD":
            currentState.head = true;
            break;
        case "ADD_FOOT":
            currentState.foot = true;
            break;
        case "REMOVE_HEAD":
            currentState.head = false;
            break;
        case "REMOVE_FOOT":
            currentState.foot = false;
            break;
        case "UPDATE_FIELD":
            currentState.lines[action.data.lines][action.data.columns] = action.data.value;
            break;





        // case "ADD_ELEMENT":
        //     action.data.element = JSON.parse(action.data.element);
        //     if (action.data.position) {
        //         action.data.element.id = "element_" + action.data.position;
        //         currentState.elements.splice(action.data.position, 0, action.data.element);
        //     } else {
        //         action.data.element.id = "element_" + currentState.elements.length;
        //         currentState.elements.push(action.data.element)
        //     }
        //     break;
        // case "REMOVE_ELEMENT":
        //     // action.data.element = JSON.parse(action.data.element);
        //     // const index = action.data.element.id.replace('element_component_', '');
        //     // if (index > -1) {
        //         currentState.elements.splice(action.data.position, 1);
        //     // }

        //     break;
        // case "UPDATE_ELEMENT":
        //     if (action.data.position && action.data.attribute) {
        //         currentState.elements[action.data.position][action.data.attribute] = action.data.value;
        //     }
        //     break;
        // case "SELECT_ELEMENT":
        //     if (action.data.position) {
        //         currentState.elements.forEach(element => {
        //             element["selected"] = false;
        //         });

        //         currentState.elements[action.data.position]["selected"] = true;
        //     }
        //     break;
    }

    return currentState;

}

export default FormReducer;