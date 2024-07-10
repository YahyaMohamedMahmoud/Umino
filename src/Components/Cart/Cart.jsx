import React from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import DisplayMenu from '../MobileMenu/DisplayMenu';
import { ChevronLeft, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllCart, deleteCart } from '../../ReduxToolkit/slices/cartSlice';


export default function Cart() {
    const Display = DisplayMenu();
    const dispatch = useDispatch();
    let cart = useSelector((state)=> state.cart);
   
  return (
    <>
     {/* menu */}
     {Display && <MobileMenu />}
    {/* menu */}
    {/* shop sec start */}
    <section className='cart'>
      <div className="shoptext text-center">
          <h1 className='mb-1'>
          Shopping Cart
            </h1>
            <a href="/">
            Home /
            </a>  
            <span> Shop</span>
        </div>  
    </section>
    {/* shop sec end */}
    <section className='cartTable mb-5'>
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-12">
                    <table className='table col-sm-12'>
                    <thead>
    <tr className='border py-2'>
      <th className='border'>Item</th>
      <th className='border'>Price</th>
      <th className='border'>Qty</th>
      <th className='border'>Subtotal</th>
    </tr>
                    </thead>
                    <tbody>
                        {cart.length > 0 ? 
                        cart.map((product)=> <tr key={product.id}>
                        <td className='border'>
                        <div className="d-flex">
                <div className="flex-shrink-0">
                    <img src={product.image} alt="ss"/>
                </div>
                <div className="flex-grow-1 ms-3">
                    <h2>
                    {product.title}
                    </h2>
                    <p>
                        Type : {product.type}
                    </p>
                    <button className='trash' onClick={()=>console.log(dispatch(deleteCart(product)))}>
                    <Trash2 />
                    </button>
                </div>
                </div>
                        </td>
                        <td className='border'>
                            <h3 className='head'>
                            ${product.price}.00
                            </h3>
                        </td>
                        <td className='border'>
                            <h4 className='head'>
                                {product.count}
                            </h4>
                        </td>
                        <td className='border'>
                            <h5 className='head'>
                               ${product.price * product.count}.00
                            </h5>
                        </td>
                    </tr>)
                       : <tr className='bordered2'><td><h5 className='mt-3'>You have no items in your shopping cart.</h5> </td></tr>}
                    </tbody>
                    </table>
                <div className="colum">
                {
                    cart.length > 0 ?
                    cart.map((product)=> <div key={product.id} className="shiping2 pb-4">
       
                    <div className='summary mt-3'>
                    <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        <img src={product.image} alt="ss"/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h6 className='heading'>
                        {product.title}
                        </h6>
                        <p className='type'>
                            Type : {product.title}
                        </p>
                        <button className='trash' onClick={()=>dispatch(deleteCart(product))}>
                        <Trash2 />
                        </button>
                    </div>
                    </div>
                    
                   
                    </div>
                    <div className="salary d-flex justify-content-between">
                      <p>
                      Qty : 
                        </p>  
                        <p className='bestSalary'>
                            {product.count}
                        </p>
                    </div>
                    <div className="salary d-flex justify-content-between">
                      <p>
                      Price : 
                        </p>  
                        <p className='bestSalary'>
                        ${product.price}.00
                        </p>
                    </div>
                    <div className="salary d-flex justify-content-between">
                      <p>
                      Subtotal : 
                        </p>  
                        <p className='bestSalary'>
                            ${product.price * product.count}.00
                        </p>
                    </div>
                   </div>)
                : <h5 className='pt-1 pb-4'>You have no items in your shopping cart.</h5> }
                </div>
                    <div className="back d-xl-flex d-lg-flex d-md-flex justify-content-between mt-4">
                      <Link to="/shop" className='backtoShop'>
                      <ChevronLeft /> Continue Shopping    
                    </Link>  
                      <button className='backtoShop backtoShop2' onClick={()=>dispatch(deleteAllCart())}>
                      Clear Shopping Cart   
                    </button>  
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12">
                   {
                    cart.map((product)=> <div key={product.id} className="shiping">
                    <div className="ship">
 
                     <div
                     className="progress"
                     role="progressbar"
                     aria-label="Animated striped example"
                     aria-valuenow="75"
                     aria-valuemin="0"
                     aria-valuemax="100"
                     >
                     <div
                     className="progress-bar progress-bar-striped progress-bar-animated"
                     style={{width: "100%"}}
                     ></div>
                     </div>
                     <div className={`van ${product.price*product.count > 62 ? "activeVan" : "van"}`}>
                     <span><i className="fa-solid fa-truck"></i></span>
                     </div>
                     <p className='buy'>
                     Buy $62.00 more to enjoy <span>FREE SHIPPING!</span>
                     </p>
 
 
 
   </div>
                     <div className='summary mt-3'>
                     <p>
                     Summary
                     </p>
                     <table className='table bordered mt-3 mb-5'>
                        <tbody className='bordered'>
                         <tr className='bordered'>
                             <td className='bordered'>
                             Subtotal
                             </td>
                             <td className='bordered'>
                             ${product.price * product.count}.00
                             </td>
                         </tr>
                         <tr className='bordered'>
                             <td className='bordered'>
                             Shipping (Flat Rate - Fixed)
                             </td>
                             <td className='bordered'>
                             ${5}.00
                             </td>
                         </tr>
                         <tr className='bordered'>
                             <td className='bordered'>
                             Order Total
                             </td>
                             <td className='bordered'>
                             ${product.price + 5}.00
                             </td>
                         </tr>
 
                        </tbody>
                     </table>
                     <Link className='checkOut'>
                     Proceed to Checkout
                     </Link>
                     </div>
                    </div>)
                   }
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
