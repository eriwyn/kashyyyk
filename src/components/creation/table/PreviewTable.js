import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import VanillaCaret from "vanilla-caret-js";

import '../../../css/creation/preview.scss';
import '../../../css/creation/previewTable.scss';

const PreviewTable = props => {

    const [caretPosition, setCaretPosition] = useState(0);

    const Table = (props) => {
        if (Array.isArray(props.tableContent)) {
            const CustomTag = `t${props.type}`;
            return <CustomTag>
                {props.tableContent.map((row, row_number) => {
                    return <tr key={"row-" + props.type + "-" + row_number}>
                        {row.map((content, column_number) => {
                            return <Field
                                key={"field-" + props.type + "-" + row_number + "-" + column_number}
                                type={props.type}
                                row_number={row_number}
                                column_number={column_number}
                                content={content}
                                selected={props.selected}
                            />
                        })}
                    </tr>
                })}
            </CustomTag>;
        } else {
            return false;
        }
    }

    const Field = (props) => {
        let isSelected = "";
        
        if (props.selected.type === props.type && 
            parseInt(props.selected.row) === parseInt(props.row_number)) 
        {
            isSelected += " rowSelected";
        }
        if (parseInt(props.selected.column) === parseInt(props.column_number)) {
            isSelected += " columnSelected";
        }

        if (props.selected.type === props.type && 
            parseInt(props.selected.row) === parseInt(props.row_number) && 
            parseInt(props.selected.column) === parseInt(props.column_number)) 
        {
            isSelected = " selected";
        }

        let CustomTag = `td`;

        if (props.type === "head") {
            CustomTag = `th`;
        }

        return <CustomTag className={isSelected}>
                <pre 
                    className={"tableField" + isSelected}
                    data-type={props.type}
                    data-row={props.row_number} 
                    data-column={props.column_number} 
                    onInput={handleChange}
                    onFocus={handleFocus}
                    spellCheck="false"
                    contentEditable  
                    suppressContentEditableWarning={true}>
                        {props.content}
                </pre>
        </CustomTag>
    }
    
    const handleChange = (event) => {
        let content = event.target.innerHTML;
        content = content.replace("<pre>", "");
        content = content.replace("</pre>", "");
        content = content.replace(/<br>/g, "\n");

        props.updateField(
            content, 
            event.target.getAttribute('data-type'), 
            event.target.getAttribute('data-row'), 
            event.target.getAttribute('data-column')
        );
    }

    const handleFocus = (event) => {
        event.persist()
        if (!event.target.className.includes("selected")) {
            var caret = new VanillaCaret(event.target);
            setCaretPosition(caret.getPos());
            props.selectField(
                event.target.getAttribute('data-type'), 
                event.target.getAttribute('data-row'), 
                event.target.getAttribute('data-column')
            );
        }
    }

    useEffect(() => {
        if (document.querySelector("pre.selected")) {
            var caret = new VanillaCaret(document.querySelector("pre.selected"));
            document.querySelector("pre.selected").focus();
            if (caretPosition && document.querySelector("pre.selected").textContent !== "") {
                caret.setPos(caretPosition);
            }
        }
    });

    return <div className="previsualisation">
        <table>
            <Table type="head" tableContent={props.tableHead} selected={props.tableSelected} />
            <Table type="body" tableContent={props.tableBody} selected={props.tableSelected} />
            <Table type="foot" tableContent={props.tableFoot} selected={props.tableSelected} />
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
        tableBody: reduxState.tableReducer.body,
        tableSelected: reduxState.tableReducer.selected
    };
};

// définition des actions dispatchables
const mapDispatchToProps = dispatch => {
    return {
        updateField: (value, type, row, column) => {
            dispatch({ type: "UPDATE_FIELD", data: { value, type, row, column } });
        },
        selectField: (type, row, column) => {
            dispatch({ type: "SELECT_FIELD", data: { type, row, column } });
        }
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PreviewTable);
