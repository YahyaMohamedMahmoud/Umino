import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../ReduxToolkit/slices/productSlice';
import { Eye, Heart, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../ReduxToolkit/slices/cartSlice';
export default function Sneakers() {
    const state = useSelector((state)=> state.product)
    const { sneakers } = state;
    const dispatch = useDispatch() 

    useEffect(() => {
        dispatch(fetchProduct());
      
    }, [dispatch]);
    return (
      <>
  
  <div className="row">
          {
              sneakers.map((product)=> (
                  <div key={product.id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
  
        <div className="productCard productCard2">
                <div className="overlay overlay2">
                  <div className="overImage">
                    <img src={`/${product.imageHover}`} loading='lazy' alt={product.title} />
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
                  <img src={`/${product.image}`} alt={product.title} loading='lazy' />
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
                  <button className='color' style={{backgroundColor:`${product.color}`}}></button>
                  <button className='color' style={{backgroundColor:`${product.color2}`}}></button>
                </div>
              </div>
          </div>
              ))
          }
         
      </div>
      
      </>
    )
}
