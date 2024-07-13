import React from 'react';
import { RefreshCcw, Ship, Star } from 'lucide-react';
import payment from "../../img/payment_dark.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../ReduxToolkit/slices/cartSlice';


export default function ProductModal() {
    const productView = useSelector((state)=> state.productView);
    const dispatch = useDispatch()
    return (
    <>
    <div className="modal fade modal-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
         <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="modalImg">
                <Swiper
      navigation={{ clickable: true }}
      speed={1000}
      modules={[Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      }}
    >
      <SwiperSlide>
      <img src={`/${productView.image}`} alt={productView.title} className='productImage'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={`/${productView.imageHover}`} alt={productView.title} className='productImage'/>
      </SwiperSlide>

      

      </Swiper>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="modalText2 modalText">
                    <h1>
                    {productView.title}
                    </h1>
                    <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>

                <h2>
                ${productView.price}.00    
                </h2>    

                <p className='desc'>
                The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact.
                </p>

                <div className="choose">
                    <h3 className='modalHead'>
                    Color : 
                    </h3>
                <button
                className='color'
                style={{ backgroundColor: `${productView.color}` }}
                
              ></button>
                <button className='color' style={{backgroundColor:`${productView.color2}`}} ></button>
                </div>
            
                <button className='checkOut toCart' onClick={()=>dispatch(addToCart(productView))}>
                    Add to Cart
                     </button>
                     <h4 className='modalHead mt-4'>
                     Availability : In stock
                    </h4>

                    <div className='delivery'>
                        <p>
                         <span>
                         <Ship />
                            </span>  Estimated Delivery : 
                             <span className='date'>
                            11 - 26 Jul, 2024
                                </span> 
                        </p>
                        <p>
                         <span>
                         <RefreshCcw />
                            </span> Free Shipping & Returns : 
                             <span className='date'>
                              On all orders over $350
                                </span> 
                        </p>
        <img src={payment} alt="" className='payment'/>

                    </div>







                </div>
            </div>
        </div>
        
        
      </div>

    </div>
  </div>
    </div>
    </>
  )
}
