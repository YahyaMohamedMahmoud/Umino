import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Products from './Components/Shop/Products';
import Men from './Components/Shop/Men';
import Watches from './Components/Shop/Watches';
import Sneakers from './Components/Shop/Sneakers';
import Cart from './Components/Cart/Cart';
import WishList from './Components/WishList/WishList';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import UserLogin from './Components/UserLogin/UserLogin';
import Checkout from './Components/Checkout/Checkout';
import Thanks from './Components/Thanks/Thanks';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import NotFound from './Components/NotFound/NotFound';

export default function App() {

  let router = createBrowserRouter([
    {path:"" , element:<LayOut/>, errorElement:<NotFound/> , children:[
      {path:"/" , element:<Home/>},
      {path:"/shop" , element:<Shop/> ,children:[
        {index: true , element:<Products/>},
        {path:"/shop/men" , element:<Men/>},
        {path:"/shop/watches" , element:<Watches/>},
        {path:"/shop/sneakers" , element:<Sneakers/>},

      ]},
      {path:"/cart" , element:<Cart/>},
      {path:"/wishlist" , element:<WishList/>},
      {path:"/productdetails/:id" , element:<ProductDetails/>},
      {path:"/createaccount" , element:<CreateAccount/>},
      {path:"/login" , element:<UserLogin/>},
      {path:"/checkout" , element:<Checkout/>},
      {path:"/thanks" , element:<Thanks/>},
      {path:"/aboutus" , element:<AboutUs/>},
      {path:"/contactus" , element:<ContactUs/>}
   
    ]}
  ])
  return <RouterProvider router={router}></RouterProvider>
}

