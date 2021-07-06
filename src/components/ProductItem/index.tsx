import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Product } from '../../interfaces/products';
import ProductContext from '../../context/Products/ProductContext';
import './index.css';
import { useContext } from 'react';

type ProductItemProps = {
  product: Product;
  index: number;
};

const ProductItem = ({ product, index }: ProductItemProps) => {
  const { id, name, color, price } = product;

  const productsContext = useContext(ProductContext);
  const { deleteProduct } = productsContext;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td className="view-color-col">{color}</td>
      <td>S/ {price}</td>
      <td className="actions-group">
        <Link to={`/products/edit/${id}`} className="icon-button">
          <FaEdit />
        </Link>
        <button className="icon-button" onClick={() => deleteProduct(id)}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
