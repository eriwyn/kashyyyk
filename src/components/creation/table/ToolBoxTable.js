import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import '../../../css/creation/toolBox.scss';

const ToolBoxTable = props => {
    const RemoveRowButton = () => {
        if (props.tableSelected) {
            return <button className="delete" onClick={() => {
                props.removeLine(props.tableSelected.type, props.tableSelected.row);
            }}><FontAwesomeIcon  icon={faMinus}></FontAwesomeIcon> Supprimer la ligne</button>
        } else {
            return false;
        }
    }

    const RemoveColumnButton = () => {
        if (props.tableSelected) {
            return <button className="delete" onClick={() => {
                props.removeColumn(props.tableSelected.type, props.tableSelected.column);
            }}><FontAwesomeIcon  icon={faMinus}></FontAwesomeIcon> Supprimer la colonne</button>
        } else {
            return false;
        }
    }

    return <div className="boiteAOutils">
        <button onClick={() => props.addLine("body")}><FontAwesomeIcon  icon={faPlus}></FontAwesomeIcon> Ajouter une ligne</button>
        <button onClick={props.addColumn}><FontAwesomeIcon  icon={faPlus}></FontAwesomeIcon> Ajouter une colonne</button>
        <button onClick={() => props.addLine("head")}><FontAwesomeIcon  icon={faPlus}></FontAwesomeIcon> Ajouter une entête</button>
        <button onClick={() => props.addLine("foot")}><FontAwesomeIcon  icon={faPlus}></FontAwesomeIcon> Ajouter un pied</button>
        <RemoveRowButton />
        <RemoveColumnButton />
    </div>
}

// définition des données à récupérer dans le store
const mapStateToProps = reduxState => {
    return {
        tableRows: reduxState.tableReducer.rows,
        tableColumns: reduxState.tableReducer.columns,
        tableHead: reduxState.tableReducer.head,
        tableFoot: reduxState.tableReducer.foot,
        tableBody: reduxState.tableReducer.body,
        tableSelected: reduxState.tableReducer.selected
    };
};

// définition des actions dispatchables
const mapDispatchToProps = dispatch => {
    return {
        addLine: type => {
            dispatch({ type: "ADD_LINE", data: { type } });
        },
        addColumn: () => {
            dispatch({ type: "ADD_COLUMN", data: {} });
        },
        removeLine: (type, position) => {
            dispatch({ type: "REMOVE_LINE", data: { type, position } });
        },
        removeColumn: (type, position) => {
            dispatch({ type: "REMOVE_COLUMN", data: { type, position } });
        },
        selectField: (type, row, column) => {
            dispatch({ type: "SELECT_FIELD", data: { type, row, column } });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToolBoxTable);
