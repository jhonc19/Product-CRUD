import React, { useContext, useEffect } from 'react';
import ProductList from '../../components/ProductList';
import ProductContext from '../../context/Products/ProductContext';
import './index.css';

const Products = () => {
  const productsContext = useContext(ProductContext);
  const { getProducts, productList, deleteOk } = productsContext;

  useEffect(() => {
    getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    deleteOk && getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteOk]);

  return (
    <div className="container">
      <h1 className="page-title text-3xl">Productos</h1>
      {productList && <ProductList products={productList} />}
    </div>
  );
};

export default Products;
