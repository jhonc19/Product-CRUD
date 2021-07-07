import React, { useReducer } from 'react';
import axios from 'axios';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';

const ProductState = (props) => {
  const initialState = {
    productList: [],
    product: {},
    addOk: false,
    editOk: false,
    deleteOk: false,
  };

  const getProducts = async () => {
    try {
      const resultado = await axios.get(
        'https://product-node-crud.herokuapp.com/product'
      );

      dispatch({
        type: 'LLENAR_PRODUCTOS',
        payload: resultado.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (producto) => {
    try {
      await axios.post('https://product-node-crud.herokuapp.com/product', {
        ...producto,
      });

      dispatch({
        type: 'AGREGAR_PRODUCTO',
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id) => {
    try {
      const resultado = await axios.get(
        `https://product-node-crud.herokuapp.com/product/${id}`
      );

      dispatch({
        type: 'OBTENER_PRODUCTO',
        payload: resultado.data.data[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = async (producto) => {
    try {
      await axios.put('https://product-node-crud.herokuapp.com/product', {
        ...producto,
      });

      dispatch({
        type: 'EDITAR_PRODUCTO',
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(
        `https://product-node-crud.herokuapp.com/product/${id}`
      );
      dispatch({
        type: 'ELIMINAR_PRODUCTO',
        payload: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  return (
    <ProductContext.Provider
      value={{
        productList: state.productList,
        product: state.product,
        addOk: state.addOk,
        editOk: state.editOk,
        deleteOk: state.deleteOk,
        getProducts,
        addProduct: addProduct,
        getProduct: getProduct,
        editProduct: editProduct,
        deleteProduct: deleteProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
