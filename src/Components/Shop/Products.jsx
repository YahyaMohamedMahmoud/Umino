import React, { useEffect } from 'react';
import { Eye, Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, viewProduct } from '../../ReduxToolkit/slices/productSlice';
import { addToCart } from '../../ReduxToolkit/slices/cartSlice';
export default function Products() {

  const state = useSelector((state)=> state.product)
  const { women } = state;

  const dispatch = useDispatch() 

  const handleImageChange = (id, currentImageIndex) => {
    const nextImageIndex = (currentImageIndex + 1) % 2;
    dispatch(viewProduct({ id, nextImageIndex }));
  };
  const handleImageChange2 = (id, currentImageIndex) => {
    const nextImageIndex = (currentImageIndex + 2) % 3;
    dispatch(viewProduct({ id, nextImageIndex }));
  };

    useEffect(()=>{
      dispatch(fetchProduct())  
    },[dispatch])

  return (
    <>
    <div className="row">
        {
            women.map((product)=> (
                <div key={product.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6">

      <div className="productCard productCard2">
              <div className="overlay overlay2">
                <div className="overImage">
                  <img src={product.imageHover} alt={product.title} loading='lazy'/>
                </div>
                <div className="actions actions2">
                  <button className='add' onClick={()=>dispatch(addToCart(product))}>
                  <ShoppingBag />
                  </button>
                  <button className='add'>
                  <Heart />
                  </button>
                  <button className='add'>
                  <Eye />
                  </button>
                </div>
              </div>
              <div className="productImg">
                 <img src={product.image} alt={product.title} loading='lazy'/>
              </div>
              <div className="productText">
                <Link to="/" className='toProduct'>
                {product.title}
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
                <button
                className='color'
                style={{ backgroundColor: `${product.color}` }}
                onClick={() => handleImageChange(product.id, product.currentImageIndex)}
              ></button>
                <button className='color' style={{backgroundColor:`${product.color2}`}} onClick={() => handleImageChange2(product.id, product.currentImageIndex)}></button>
              </div>
            </div>
        </div>
            ))
        }
       
    </div>
    </>
  )
}
