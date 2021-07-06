const reducer = (state, action) => {
  switch (action.type) {
    case 'LLENAR_PRODUCTOS':
      return {
        ...state,
        productList: action.payload,
        addOk: false,
        editOk: false,
        deleteOk: false,
        product: {},
      };
    case 'AGREGAR_PRODUCTO':
      return {
        ...state,
        addOk: action.payload,
      };
    case 'EDITAR_PRODUCTO':
      return {
        ...state,
        editOk: action.payload,
      };
    case 'ELIMINAR_PRODUCTO':
      return {
        ...state,
        deleteOk: action.payload,
      };
    case 'OBTENER_PRODUCTO':
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
