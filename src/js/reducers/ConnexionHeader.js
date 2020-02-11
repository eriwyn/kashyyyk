

const connexionHeader=function(action){
    switch(action.type){
        case "CONNEXION":
            return {"idUser":action.data.idUser}
            break;
        case "DECONNEXION":
            newState=false;
    }
}

export default connexionHeader;