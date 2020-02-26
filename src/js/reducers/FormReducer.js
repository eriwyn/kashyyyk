const initialState = {
    "elements": [
        // {"genre":"input","libelle":"nom","type":"text"},
        // {"genre":"select","libelle":"selection","options":["option1","option2","option3"]},
        // {"genre":"radio","libelle":"pays","values":["val1","val2","val3"]}
    ]
};
  
const ConnexionReducer=function(currentState = initialState, action){
    switch(action.type){
        case "ADD_ELEMENT":
            currentState.elements.push(action.data.element)
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