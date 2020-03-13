const initialState = {
    "rows": 6,
    "columns": 6,
    "selected": false,
    "head":[
        ["", "", "", "", "", ""]
    ],
    "body":[
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
        ["","","","","",""],
    ],
    "foot":[
        
    ]
};

const TableReducer=function(currentState = initialState, action){
    switch(action.type){
        case "ADD_LINE":
            if (currentState.columns <= 0) {
                currentState.columns = 1;
            }
            currentState.rows ++;
            currentState[action.data.type].push([]);
            for (let i = 0; i < currentState.columns; i++) {
                currentState[action.data.type][currentState[action.data.type].length - 1].push("");
            }
 
            break;
        case "ADD_COLUMN":
            currentState.columns ++;
            currentState.body.forEach(line => {
                line.push("");
            });
            currentState.head.forEach(line => {
                line.push("");
            });
            currentState.foot.forEach(line => {
                line.push("");
            });
            break;
        case "REMOVE_LINE":
            if (currentState.rows > 1) {
                currentState.rows --;
                currentState[action.data.type].splice(action.data.position, 1);
            }
            break;
        case "REMOVE_COLUMN":
            if (currentState.columns > 1) {
                currentState.columns --;
                currentState.body.forEach(line => {
                    line.splice(action.data.position, 1)
                });
                currentState.head.forEach(line => {
                    line.splice(action.data.position, 1)
                });
                currentState.foot.forEach(line => {
                    line.splice(action.data.position, 1)
                });
            }
            break;
        case "UPDATE_FIELD":
            currentState[action.data.type][action.data.row][action.data.column] = action.data.value;
            break;
        case "SELECT_FIELD":
            if (action.data.type === false) {
                currentState.selected = false;
            } else {
                currentState.selected = {
                    "type": action.data.type,
                    "row": action.data.row,
                    "column": action.data.column
                }  
            }
            break;
        case "IMPORT_TABLE":
            if (action.data.file) {
                currentState.selected = false;

                let importedElements = JSON.parse(action.data.file);

                currentState.head = importedElements.head;
                currentState.body = importedElements.body;
                currentState.head = importedElements.head;
                currentState.row = importedElements.body.length + importedElements.head.length + importedElements.foot.length;
                currentState.columns = importedElements.body[0].length;
            }
            break;
        default:
            break;
    }

    return currentState;

}

export default TableReducer;