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
export default function App() {

  let router = createBrowserRouter([
    {path:"" , element:<LayOut/> , children:[
      {path:"/" , element:<Home/>},
      {path:"/shop" , element:<Shop/> ,children:[
        {index: true , element:<Products/>},
        {path:"/shop/men" , element:<Men/>},
        {path:"/shop/watches" , element:<Watches/>},
        {path:"/shop/sneakers" , element:<Sneakers/>}

      ]},
      {path:"/cart" , element:<Cart/>}
    ]}
  ])
  return <RouterProvider router={router}></RouterProvider>
}

