import * as R from "ramda";

const initialState = {
  user: -1
};

const UserReducer = function(currentState = initialState, action){
  switch (action.type) {
    case "CONNECT_USER":
      currentState.user = action.data.userId;
      break;
    case "DISCONNECT_USER":
      currentState.user = -1;
      break;
    default:
      break;
  }

  return currentState;
};

export default UserReducer;
