import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeft, Trash2 } from 'lucide-react';
import { deleteAllWish, deleteWishList } from '../../ReduxToolkit/slices/wishlistSlice';
import { Link } from 'react-router-dom';
import { addToCart } from '../../ReduxToolkit/slices/cartSlice';

export default function WishList() {
    const dispatch = useDispatch();
    let wishlist = useSelector((state)=> state.wishlist);
  return (
    <>

    {/* shop sec start */}
    <section className='cart'>
      <div className="shoptext text-center">
          <h1 className='mb-1'>
          WishList
            </h1>
            <Link to="/">
            Home /
            </Link>  
            <span> WishList</span>
        </div>  
    </section>
    {/* shop sec end */}

    {/* WishlistTabel sec start*/}
    <section className='cartTable mb-5'>
        <div className="container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <table className='table col-sm-12'>
                    <thead>
    <tr className='border py-2'>
      <th className='border'>Item</th>
      <th className='border'>Price</th>
      <th className='border'>To Cart</th>
      <th className='border'>Subtotal</th>
    </tr>
                    </thead>
                    <tbody>
                        {wishlist.length > 0 ? 
                        wishlist.map((product)=> <tr key={product.id}>
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
                    <button className='trash' onClick={()=>dispatch(deleteWishList(product))}>
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
                        <td className='border salary salaryTable'>
                                <Link to="/cart" className='checkOut toCart d-block text-center' onClick={()=>dispatch(addToCart(product))}>
                                Add To Cart

                                </Link>
                        </td>
                        <td className='border'>
                            <h5 className='head'>
                               ${product.price*product.count}.00
                            </h5>
                        </td>
                    </tr>)
                       : <tr className='bordered2'><td><h5 className='mt-3'>You have no items in your wishlist.</h5> </td></tr>}
                    </tbody>
                    </table>
                <div className="colum">
                {
                    wishlist.length > 0 ?
                    wishlist.map((product)=> <div key={product.id} className="shiping2 pb-4">
       
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
                        <button className='trash' onClick={()=>dispatch(deleteWishList(product))}>
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
                            ${product.price*product.count}.00
                        </p>
                    </div>
                    <div className='salary'>
                    <Link to="/cart" className='checkOut toCart d-block text-center' onClick={()=>dispatch(addToCart(product))}>
                                Add To Cart

                                </Link>
                    </div>
                   </div>)
                : <h5 className='pt-1 pb-4 text-center'>You have no items in your wishlist.</h5> }
                </div>
                <div className="back d-xl-flex d-lg-flex d-md-flex justify-content-between mt-4">
                <Link to="/shop" className='backtoShop'>
                      <ChevronLeft /> Continue Shopping    
                    </Link>  
                      <button className='backtoShop backtoShop2' onClick={()=>dispatch(deleteAllWish())}>
                      Clear your WishList   
                    </button>  
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    {/* WishlistTabel sec end*/}
    
    </>
  )
}
