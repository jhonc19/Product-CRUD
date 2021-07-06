import React from 'react';
import './index.css';
import ProductItem from './../ProductItem';
import { Product } from '../../interfaces/products';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th className="view-color-col">Color</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* <ProductItem productos={productos[0]} index={1} /> */}
        {products.map((product, index) => (
          <ProductItem key={product.id} product={product} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
