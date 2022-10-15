import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Cart from '../Components/Cart'
import Order from '../Components/Order'
// import Login from '../Components/ProductDetails'
import Product from '../Components/Product'
import ProductDetails from '../Components/ProductDetails'
// import Restaurent from '../Components/Restaurent'
const MainRoutes = () => {
  return (
    <div>
  <Routes>
    <Route path="/" element={<Product/>}>      
    </Route>

    <Route path="/ProductDetails" element={<ProductDetails />}>      
    </Route>

    <Route path="/Cart" element={<Cart/>}>      
    </Route>

    <Route path="/Order" element={<Order />}>      
    </Route>
   
  </Routes>
    </div>
  )
}

export default MainRoutes