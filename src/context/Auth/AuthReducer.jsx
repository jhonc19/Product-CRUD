const reducer = (state, action) => {
  switch (action.type) {

    case 'LOGEARSE':
      return {
        ...state,
        isLogged: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
