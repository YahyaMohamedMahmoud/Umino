import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, viewMenImages } from '../../ReduxToolkit/slices/productSlice';
import { Eye, Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../ReduxToolkit/slices/cartSlice';
import { addToWish } from '../../ReduxToolkit/slices/wishlistSlice';
import { productDetails, productView } from '../../ReduxToolkit/slices/productModal';
import ProductModal from '../ProductModal/ProductModal';

export default function Men() {

    const state = useSelector((state)=> state.product)
  const { men } = state;
  const dispatch = useDispatch() 
  useEffect(() => {
      dispatch(fetchProduct());
  }, [dispatch]);

  const onhandelImages = (id , currentImageIndex)=>{
   const nextImageIndex = (currentImageIndex + 1) % 2 ;
   dispatch(viewMenImages({id , nextImageIndex}))
  }
  const onhandelImages2 = (id , currentImageIndex)=>{
   const nextImageIndex = (currentImageIndex + 2) % 3 ;
   dispatch(viewMenImages({id , nextImageIndex}))
  }
  return (
    <>

<div className="row">
        {
            men.map((product)=> (
                <div key={product.id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">

      <div className={"productCard productCard2"}>
              <div className="overlay overlay2">
                <div className="overImage">
                  <img src={`/${product.imageHover}`} alt={product.title} loading='lazy'/>
                </div>
                <div className="actions actions2">
                  <button className='add' onClick={()=>dispatch(addToCart(product))}>
                  <ShoppingBag />
                  </button>
                  <button className='add' onClick={()=>dispatch(addToWish(product))}>
                  <Heart />
                  </button>
                  <button className='add' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>dispatch(productView(product))}>
                  <Eye />
                  </button>
                </div>
              </div>
              <div className="productImg">
                 <img src={`/${product.image}`} alt={product.title} loading='lazy'/>
              </div>
                
              <div className="productText">
              <Link  to={`/productdetails/${product.id}`} onClick={()=>dispatch(productDetails(product))}>
                <h2 className='toProduct'>

                {product.title}
                </h2>
                </Link>
                <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>
                <p className='price'>
                ${product.price}.00
                </p>
                <button className='color' style={{backgroundColor:`${product.color}`}} onClick={()=>onhandelImages(product.id , product.currentImageIndex)}></button>
                <button className='color' style={{backgroundColor:`${product.color2}`}} onClick={()=>onhandelImages2(product.id , product.currentImageIndex)}></button>
              </div>
            </div>
        </div>
            ))
        }
       <ProductModal/>
    </div>
    
    </>
  )
}
