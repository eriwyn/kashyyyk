import React  from 'react';
import '../../../css/Creation.scss';
import { connect } from 'react-redux';
import jsonToHtml from '../../tools/jsonToHtml.js';

const FenetreCode = props => {
    let contentHtml = jsonToHtml(props.formList);

    return <div className="fenetreCode">
        <h1>Code</h1>
        <pre>{contentHtml}</pre>
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