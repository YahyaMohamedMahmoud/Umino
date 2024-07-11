import React from 'react';
import { Eye, Heart, RefreshCcw, Ship, ShoppingBag, Star } from 'lucide-react';
import payment from "../../img/payment_dark.png";
import logo from "../../img/logo_umino.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../ReduxToolkit/slices/cartSlice';
import { Link } from 'react-router-dom';
import HomeCards from "../HomeCards/HomeCards";
import { addToWish } from "../../ReduxToolkit/slices/wishlistSlice";
import { productDetails } from "../../ReduxToolkit/slices/productModal";
import ProductModal from "../ProductModal/ProductModal";
import { viewProduct } from "../../ReduxToolkit/slices/productSlice";

export default function ProductDetails() {
    const productView = useSelector((state)=> state.productView);
    const dispatch = useDispatch()
    const products = HomeCards();

 const handleImageChange = (id, currentImageIndex) => {
  const nextImageIndex = (currentImageIndex + 1) % 2;
  dispatch(viewProduct({ id, nextImageIndex }));
};
const handleImageChange2 = (id, currentImageIndex) => {
  const nextImageIndex = (currentImageIndex + 2) % 3;
  dispatch(viewProduct({ id, nextImageIndex }));
};

  return (
    <>
    {/* shop sec start */}
    <section className='cart'>
      <div className="shoptext text-center">
          <h1 className='mb-1'>
          Product Details
            </h1>
            <a href="/">
            Home /
            </a>  
            <span> ProductDetails</span>
        </div>  
    </section>
    {/* shop sec end */}

    {/* details sec start */}
      <section className='details'>
       <div className="container">
       <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="modalImg">
                <Swiper
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 2500 }}
      speed={1000}
      loop={true}
      modules={[Navigation, Pagination , Autoplay]}
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
                <div className="modalText2">
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
    </section>  
    {/* details sec end */}

    {/* tabs sec start */}

    <section className='tabs mt-80'>
      <div className="container">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active nav2" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Details</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link nav2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">About Brand</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link nav2" id="pills-net-tab" data-bs-toggle="pill" data-bs-target="#pills-net" type="button" role="tab" aria-controls="pills-net" aria-selected="false">Shipping and Returns</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
    <p>
    Details
 
 The garments labelled as committed are products that have been produced using sustainable fibres or processes, reducing their environmental impact. Umino’s goal is to support the implementation of practices more committed to the environment. I am like a freight train. Working on the details, twisting them and playing with them over the years, but always staying on the same track. I design from instinct. It’s the only way I know how to live. 
    </p>
    <p className='my-4'>
    We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments. To assess compliance, we have developed a programme of audits and continuous improvement plans. Made of super-soft cotton, the Organic Cotton Cutaway Tank features a high neck and back, and a slight curve at the shoulders, which makes it extra flattering. If there’s one thing the ’90s got right, it’s the basics.
    </p>
  </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
    <div className="row">
      <div className="col-xl-3">
      <div className="tabImg text-center">
      <img src={logo} alt="" className='mb-3'/>
        <Link to="/shop">
        More Product
        </Link>
      </div>
      </div>
      <div className="col-xl-9">
        <h5 className='mb-2'>
          Umino
        </h5>
        <p>
        We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages.
        </p>
      </div>
    </div>
  </div>
  <div className="tab-pane fade" id="pills-net" role="tabpanel" aria-labelledby="pills-net-tab" tabIndex="0">
    <p className='my-4'>
    Shipping cost is based on weight. Just add products to your cart and use the Shipping Calculator to see the shipping price. We want you to be 100% satisfied with your purchase. Items can be returned or exchanged within 30 days of delivery.
    </p>
  </div>
</div>
        </div>  
      </section>
    {/* tabs sec end */}

     {/* products sec start */}
     <section className='products mt-80 related'>
      <div className="container">
        <div className="producthead text-center">
          <h5 className='py-3 head'>
          Related Products
          </h5>
        </div>
        <div className="row">
        {
            products.map((product)=> <div key={product.id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard productCard2">
              <div className="overlay overlay3">
                <div className="overImage">
                  <img src={`/${product.imageHover}`} alt="product-2" />
                </div>
                <div className="actions">
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
                <img src={`/${product.image}`} alt="product" />
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
                <button className='color' style={{backgroundColor:`${product.color}`}}  onClick={() => handleImageChange(product.id, product.currentImageIndex)}></button>
                <button className='color' style={{backgroundColor:`${product.color2}`}}  onClick={() => handleImageChange2(product.id, product.currentImageIndex)}></button>
              </div>
            </div>
          </div>)
          }
          <ProductModal/>
         
        </div>
      </div>
    </section>
    {/* products sec end */}
    </>
  )
}
