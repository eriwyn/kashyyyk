import React, {useState}  from 'react';
import '../../../css/Creation.scss';
import { connect } from "react-redux";


const PrevisualisationTable = props => {

    const TableHead = () => {
        if (Array.isArray(props.tableHead)) {
            return <thead>
                <tr>
                    {props.tableHead.map((field, index) => {
                        return <th key={index}>{field}</th>
                    })}
                </tr>
            </thead>;
        } else {
            return false;
        }
    }

    const TableBody = () => {
        return <tbody>
            {props.tableBody.map((row, index) => {
                return <tr key={index} id={"row_" + index}>
                    {row.map((field, index) => {
                        return <td key={index}>{field}</td>
                    })}
                </tr>            
            })}
        </tbody>
    }

    const TableFoot = () => {
        if (Array.isArray(props.tableFoot)) {
            return <tfoot>
                <tr>
                    {props.tableFoot.map((field, index) => {
                        return <td key={index}>{field}</td>
                    })}
                </tr>
            </tfoot>;
        } else {
            return false;
        }
    }

    return <div className="previsualisation">
        <table>
            <TableHead />
            <TableBody />
            <TableFoot />
        </table>
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
        addLine: () => {
            dispatch({ type: "ADD_ELEMENT", data: {} });
        },
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrevisualisationTable);
