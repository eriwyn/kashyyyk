import React, { useEffect, useState }  from 'react';
import '../../../css/Creation.scss';
import { connect } from "react-redux";

const BoiteAOutilsTable = props => {
    const [elementSelected, setElementSelected] = useState("");

    return <div className="boiteAOutils">
        <button onClick={()=>{props.addLine()}}>Ajouter une ligne</button>
        <button onClick={()=>{props.addColumn()}}>Ajouter une colonne</button>
    </div>
}

// définition des données à récupérer dans le store
const mapStateToProps = reduxState => {
    return {
        tableRows: reduxState.tableReducer.rows,
        tableColumns: reduxState.tableReducer.columns,
        tableHead: reduxState.tableReducer.head,
        tableFoot: reduxState.tableReducer.foot,
        tableBody: reduxState.tableReducer.body
    };
};

// définition des actions dispatchables
const mapDispatchToProps = dispatch => {
    return {
        addLine: position => {
            dispatch({ type: "ADD_LINE", data: {} });
        },
        addColumn: () => {
            dispatch({ type: "ADD_COLUMN", data: {} });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoiteAOutilsTable);
