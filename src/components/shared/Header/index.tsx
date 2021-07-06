import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/Auth/AuthContext';
import './index.css';

const Header = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  return (
    <div className="header-container">
      <div className="menu-content">
        <Link className="text-primary text-3xl menu-link" to="/products">
          Productos-App
        </Link>
        <Link className="menu-link" to="/products/new">
          Agregar Producto
        </Link>
      </div>
      <button className="button text-lg" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
