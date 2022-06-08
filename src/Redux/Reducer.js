import GlobalType from "./GlobalType";

const initalState = {
  page: false,
};


const rootReducer = (state = initalState, action) => {
  if (action.type === GlobalType.LOGIN_TRUE) {
    return { ...state, page: true };
  } else {
    return state;
  }
};



export default rootReducer;
