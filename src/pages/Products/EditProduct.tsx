import { RouteComponentProps } from 'react-router';
import React, { useContext, useEffect } from 'react';
// import { History } from 'history';
import Form from '../../components/Form';
import ProductContext from '../../context/Products/ProductContext';
import { Product } from '../../interfaces/products';

type TParams = { id: string | undefined };

const EditProduct = ({ match, history }: RouteComponentProps<TParams>) => {
  const productsContext = useContext(ProductContext);
  const { getProduct, product, editProduct, editOk } = productsContext;

  useEffect(() => {
    const fetchData = async () => await getProduct(match.params.id);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editOk) {
      history.push('/products');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editOk]);

  const haveProduct = Object.keys(product).length;

  const edit = (product: Product) => {
    editProduct(product);
  };

  return (
    <>
      {haveProduct > 0 && (
        <Form
          title="Editar Producto"
          product={product}
          edit={true}
          editProduct={edit}
        />
      )}
    </>
  );
};

export default EditProduct;
