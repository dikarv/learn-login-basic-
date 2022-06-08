import GlobalType from "./GlobalType";

const initalState = {
  page: false,
  name : '',
  token : ''
};


const rootReducer = (state = initalState, action) => {
  if (action.type === GlobalType.LOGIN_TRUE) {
    return { ...state, page: true, name : action.kacang, token : action.kacang_token };
  } else {
    return state;
  }
};



export default rootReducer;
