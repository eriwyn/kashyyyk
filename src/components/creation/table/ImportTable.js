import React  from 'react';
import { connect } from "react-redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

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

    return <div className="import">
        <label for="file-upload">
            <FontAwesomeIcon  icon={faUpload}></FontAwesomeIcon> Charger un fichier
        </label>
        <input id="file-upload" type="file" onChange={loadFileAsText} />
    </div>
}

// définition des actions dispatchables
const mapDispatchToProps = dispatch => {
    return {
        import_file: file => {
            dispatch({ type: "IMPORT_TABLE", data: { file } });
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ImportForm);
