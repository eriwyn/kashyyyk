import React  from 'react';
import '../../../css/Creation.scss';
import { connect } from 'react-redux';



const FenetreCode = props => {
    return <div className="fenetreCode">
        <h1>Code</h1>
        {props.formList.map(element => {
            var htmlViaJson="";
            
            switch(element.genre){
                case "input":
                    htmlViaJson += '<div><label for="input{element.libelle}">{element.libelle}</label><input id="input{element.libelle}\" type={element.type}></input></div>'
                    break;
                case "select":
                    var optSelect=[];
                    for(var j=0;j<element.options.length;j++){
                        var valu=element.options[j];
                        optSelect.push(<option value={valu}>{valu} </option>)
                    }
                    htmlViaJson += '<div><label for="select'+i+'">{element.libelle}</label><select id="select'+i+'">{optSelect}</select></div>'
                    break;
                case "radio":
                    var valRadio=[];
                    for(var j=0;j<element.values.length;j++){
                        var valu=element.values[j];
                        valRadio.push(<div><input type="radio" id="radio'+i+'" name="radio'+i+'"></input><label htmlFor="radio'+i+'">{valu}</label></div>)
                    }
                    htmlViaJson += '<div>{valRadio}</div>'
                    break;
            }
            console.log(element);

            return htmlViaJson;
        })}
    </div>
}

// définition des données à récupérer dans le store
const mapStateToProps = reduxState => {
    return {
        // on accédera à ces donnnées dans le composant via : props.userList
        formList: reduxState.formReducer.elements
    };
};

export default connect(
    mapStateToProps,
    null
)(FenetreCode);