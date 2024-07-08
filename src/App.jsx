import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';

export default function App() {
  let router = createBrowserRouter([
    {path:"" , element:<LayOut/> , children:[
      {path:"/" , element:<Home/>},
    ]}
  ])
  return <RouterProvider router={router}></RouterProvider>
}

