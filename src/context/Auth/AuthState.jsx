import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const ProductState = (props) => {
  const initialState = {
    isLogged: false,
  };

  const login = () => {
    dispatch({
      type: 'LOGEARSE',
      payload: true,
    });
  };

  const logout = () => {
    dispatch({
      type: 'LOGEARSE',
      payload: false,
    });
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        isLogged: state.isLogged,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default ProductState;
