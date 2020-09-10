const springSummerReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SPRING_SUMMER_CLOSET':
        return action.payload;
    //   case 'UNSET_USER':
    //     return {};
    //   default:
    //     return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default springSummerReducer;
  