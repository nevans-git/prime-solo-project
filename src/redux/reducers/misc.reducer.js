const miscReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_MISC_CLOSET':
        return action.payload;
    //   case 'UNSET_USER':
    //     return {};
    //   default:
    //     return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default miscReducer;
  