const initialState = {
    "elements": [
        {"type": "champ_texte", "id": "test1", "libelle" : "Champ de texte", "texte": "Entrez du texte"},
        {"type": "champ_texte", "id": "test2", "libelle" : "Champ de texte", "texte": "Entrez du texte"},

    ]
};
  
const ConnexionReducer=function(currentState = initialState, action){
    switch(action.type){
        case "ADD_ELEMENT":
            currentState.elements.push(JSON.parse(action.data.element))
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