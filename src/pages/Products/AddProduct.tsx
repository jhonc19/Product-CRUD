import React, { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import Form from '../../components/Form';
import ProductContext from '../../context/Products/ProductContext';
import { Product } from '../../interfaces/products';

type TParams = { id: string | undefined };

const AddProduct = ({ history }: RouteComponentProps<TParams>) => {
  const productsContext = useContext(ProductContext);
  const { addProduct, addOk } = productsContext;

  useEffect(() => {
    if (addOk) {
      history.push('/productos');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOk]);

  const newProduct = (product: Product) => {
    const newProduct = { ...product };
    addProduct(newProduct);
  };

  return (
    <>
      <Form title="Agregar Producto" addNewProduct={newProduct} />
    </>
  );
};

export default AddProduct;
