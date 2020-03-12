import React  from 'react';
import { connect } from "react-redux";

const ImportForm = props=> {


    function loadFileAsText(event){
        var fileToLoad = event.target.files[0];
    
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent){
            var textFromFileLoaded = fileLoadedEvent.target.result;
            console.log(textFromFileLoaded);

            props.import_file(textFromFileLoaded);
        };
    
        fileReader.readAsText(fileToLoad, "UTF-8");
    }

    return <input type="file" onChange={loadFileAsText} />
}

// définition des actions dispatchables
const mapDispatchToProps = dispatch => {
    return {
        import_file: file => {
            dispatch({ type: "IMPORT_FILE", data: { file } });
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ImportForm);
