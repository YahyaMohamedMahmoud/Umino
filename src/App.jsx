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

export default function App() {

  let router = createBrowserRouter([
    {path:"" , element:<LayOut/> , children:[
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
      {path:"/login" , element:<UserLogin/>}
   
    ]}
  ])
  return <RouterProvider router={router}></RouterProvider>
}

