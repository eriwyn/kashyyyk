const initialState = {
    "elements": [

    ]
};
  
const ConnexionReducer=function(currentState = initialState, action){
    switch(action.type){
        case "ADD_ELEMENT":
            if (action.data.position) {
                currentState.elements.splice(action.data.position, 0, JSON.parse(action.data.element));
            } else {
                currentState.elements.push(JSON.parse(action.data.element))
            }
            return currentState;
            break;
        case "REMOVE_ELEMENT":
            const index = currentState.indexOf(action.data.element);
            if (index > -1) {
                currentState.splice(index, 1);
            }

            return currentState;
            break;
        default: 
            return currentState;
    }
}

export default ConnexionReducer;