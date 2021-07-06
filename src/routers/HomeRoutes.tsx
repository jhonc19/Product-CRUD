import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Products from '../pages/Products';
import AddProduct from '../pages/Products/AddProduct';
import EditProduct from '../pages/Products/EditProduct';

const HomeRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={AddProduct} />
        <Route exact path="/products/edit/:id" component={EditProduct} />
        <Redirect to="/products" />
      </Switch>
    </Layout>
  );
};

export default HomeRoutes;
