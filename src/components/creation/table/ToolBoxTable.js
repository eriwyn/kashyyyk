import React from 'react';
import { connect } from "react-redux";

import '../../../css/creation/toolBox.scss';

const ToolBoxTable = props => {
    const RemoveRowButton = () => {
        if (props.tableSelected) {
            return <button onClick={() => {
                props.removeLine(props.tableSelected.type, props.tableSelected.row);
            }}>Supprimer la ligne</button>
        } else {
            return false;
        }
    }

    const RemoveColumnButton = () => {
        if (props.tableSelected) {
            return <button onClick={() => {
                props.removeColumn(props.tableSelected.type, props.tableSelected.column);
            }}>Supprimer la colonne</button>
        } else {
            return false;
        }
    }

    return <div className="boiteAOutils">
        <button onClick={() => props.addLine("body")}>Ajouter une ligne</button>
        <button onClick={props.addColumn}>Ajouter une colonne</button>
        <button onClick={() => props.addLine("head")}>Ajouter une entête</button>
        <button onClick={() => props.addLine("foot")}>Ajouter un pied</button>
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
