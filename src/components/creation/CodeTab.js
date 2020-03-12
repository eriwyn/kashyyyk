import React  from 'react';
import { connect } from 'react-redux';
import formToHtml from '../../tools/formToHtml.js';
import tableToHtml from '../../tools/tableToHtml.js';

import '../../css/creation/codeTab.scss';

const FenetreCode = props => {
    let contentHtml;
    switch (props.type) {
        case "formulaire":
            contentHtml = formToHtml(props.formList);
            break;
        case "tableau":
            contentHtml = tableToHtml(props.tableList);
            break;
        default:
            break;
    }

    return <div className="fenetreCode">
        <h2>Votre Code : </h2>
        <pre>{contentHtml}</pre>
    </div>
}

// définition des données à récupérer dans le store
const mapStateToProps = reduxState => {
    return {
        formList: reduxState.formReducer.elements,
        tableList: reduxState.tableReducer
    };
};

export default connect(
    mapStateToProps,
    null
)(FenetreCode);