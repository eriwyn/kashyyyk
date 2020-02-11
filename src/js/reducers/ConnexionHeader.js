import * as R from "ramda";

const connexionHeader=function(action){
    switch(action.type){
        case "CONNEXION":
            return {"idUser":data.idUser}
            break;
        case "DECONNEXION":
            newState=false;
    }
}

export default connexionHeader;