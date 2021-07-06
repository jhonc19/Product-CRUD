import React, { useContext } from 'react';
import AuthContext from '../../context/Auth/AuthContext';

const Auth = () => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;

  return (
    <div className="center-content">
      <button className="button text-xl" onClick={login}>
        Ingresar
      </button>
    </div>
  );
};

export default Auth;
