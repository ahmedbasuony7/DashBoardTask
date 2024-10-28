import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

//  import  pages
import Daashboaed from './Component/Daashboaed'
import Home from './Pages/HomePage/Home'
import Products from './Pages/ProductsPage/Products'
import ProductsDetails from './Pages/ProductDetailsPage/ProductsDetails';
import Customers from '../src/Pages/CustomersPage/Customers';
import Orders from './Pages/OrderPage/Orders';
import ProductDetailsLayout from './Pages/ProductDetailsPage/ProductDetailsLayout';
import OrderLayout from './Pages/OrderPage/OrderLayout';
import ProductLayout from './Pages/ProductsPage/ProductLayout';
import CustomersLayout from './Pages/CustomersPage/CustomersLayout';

function App() {

  return (
      <>
        <Routes>
              <Route  path="/"   element={<Home />}   /> 
              <Route  path="/ProductLayout"   element={<ProductLayout />}   />
              <Route  path="/ProductDetailsLayout"   element={<ProductDetailsLayout />}   />
              <Route  path="/CustomersLayout"   element={<CustomersLayout />}   />
              <Route  path="/OrderLayout"   element={<OrderLayout />}   /> 
        </Routes>

      </>
  )
}

export default App
