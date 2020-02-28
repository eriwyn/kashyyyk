

const connexionReducer=function(intialType=[],action){
    switch(action.type){
        case "CONNEXION":
            return {"idUser":action.data.idUser}
            break;
        case "DECONNEXION":
            return false;
            break;
        default:
            return false;
    }
}

export default connexionReducer;