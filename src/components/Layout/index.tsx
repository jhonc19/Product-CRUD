import React from 'react';
import './index.css';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import ProductState from '../../context/Products/ProductState';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <ProductState>
      <div className="layout-container">
        <Header />
        <div className="page-container">{children}</div>
        <Footer />
      </div>
    </ProductState>
  );
};

export default Layout;
