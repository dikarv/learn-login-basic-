import GlobalType from "./GlobalType";

const initalState = {
  page: false,
  name : '',
  token : '',
  loading : false
};


const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case GlobalType.LOGIN_TRUE:
      return{ ...state, page: true, name : action.kacang, token : action.kacang_token }
    case GlobalType.LOADING_TRUE:
      return{...state, loading : true}
    case GlobalType.LOADING_FALSE:
      return{...state, loading : false}
    default:
      return state;
      
  }
};



export default rootReducer;
