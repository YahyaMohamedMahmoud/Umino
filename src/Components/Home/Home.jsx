import Slide1 from "../../img/h1-slide-show-1.jpg";
import Slide2 from "../../img/h1-slide-show-2.jpg";
import Slide3 from "../../img/h1-slide-show-3.jpg";
import shop1 from "../../img/fas6_banner_1.png";
import shop2 from "../../img/fas6_banner_2.png";
import insta1 from "../../img/insta1.jpg";
import insta2 from "../../img/insta2.jpg";
import insta3 from "../../img/insta3.jpg";
import insta4 from "../../img/insta4.jpg";
import insta5 from "../../img/insta5.jpg";
import insta6 from "../../img/insta6.jpg";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { Circle, Eye, Heart, Instagram, Quote, ShoppingBag, Star, Trash2 } from 'lucide-react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeCards from "../HomeCards/HomeCards";
import { addToCart, deleteCart } from "../../ReduxToolkit/slices/cartSlice";
import { addToWish, deleteWishList } from "../../ReduxToolkit/slices/wishlistSlice";
import { productDetails, productView } from "../../ReduxToolkit/slices/productModal";
import ProductModal from "../ProductModal/ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { viewProduct } from "../../ReduxToolkit/slices/productSlice";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

export default function Home() {
  const cart = useSelector((state)=> state.cart);
 const products = HomeCards();
 const dispatch = useDispatch();
 const wishlist = useSelector((state)=> state.wishlist);
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 const handleImageChange = (id, currentImageIndex) => {
  const nextImageIndex = (currentImageIndex + 1) % 2;
  dispatch(viewProduct({ id, nextImageIndex }));
};
const handleImageChange2 = (id, currentImageIndex) => {
  const nextImageIndex = (currentImageIndex + 2) % 3;
  dispatch(viewProduct({ id, nextImageIndex }));
};
const [show3, setShow3] = useState(false);

const handleClose3 = () => setShow3(false);
const handleShow3 = () => setShow3(true);

function ToWishList(product){
  dispatch(addToWish(product))
  handleShow()
}
function toCart(product){
  dispatch(addToCart(product));
  handleShow3();
}

  return (
    <>


    {/* landing carousel sec start */}
    <section className='landing'>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 3000 }}
      effect="fade"
      speed={2000}
      loop={true}
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
    >
      <SwiperSlide className="carousel-inner2">
      <div className="carousel-item2">
      <img src={Slide1} alt="slide1"/>
      <div className="carouselText text-center">
        <h1>
        Stylish <br />
        Top Trending
        </h1>
        <p className='parag'>
        So soft you don't want to take it off.
        </p>
        <Link className='link'>
        Explore Now
        </Link>
      </div>
    </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-inner2">
      <div className="carousel-item2">
      <img src={Slide2} alt="slide1"/>
      <div className="carouselText text-center">
        <h1>
        Hulton<br />
        Perfect Simple
        </h1>
        <p className='parag'>
        So soft you don't want to take it off.
        </p>
        <Link className='link'>
        Explore Now
        </Link>
      </div>
    </div>
      </SwiperSlide>
      <SwiperSlide className="carousel-inner2">
      <div className="carousel-item2">
      <img src={Slide3} alt="slide3"/>
      <div className="carouselText text-center">
        <h1>
        Online<br />
        Limited Edition
        </h1>
        <p className='parag'>
        So soft you don't want to take it off.
        </p>
        <Link className='link'>
        Explore Now
        </Link>
      </div>
    </div>
      </SwiperSlide>
    </Swiper>
    </section>
    {/* landing carousel sec end */}

    {/* trend sec start */}
    <section className='trend mt-1'>
    <div className="row g-xl-1 g-lg-0 g-md-0 g-sm-0">
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="cards">
          <img src={shop1} alt="banner_1" />
        <div className="cardText">
        <p>
          HURRY UP! DON’T MISS...
          </p>
          <h2>
          Top Trends Style
          </h2>
          <Link to="" className='toShop'>
          Shop the Look
          </Link>
        </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="cards">
          <img src={shop2} alt="banner_1" />
        <div className="cardText">
        <p>
        PREMIUM - ONLINE EXCLUSIVE
          </p>
          <h2>
          Here Your Style
          </h2>
          <Link to="" className='toShop'>
          Shop the Look
          </Link>
        </div>
        </div>
      </div>
    </div>
    </section>
    {/* trend sec end */}

    {/* products sec start */}
    <section className='products mt-80'>
      <div className="container">
        <div className="producthead text-center">
          <h3 className='py-3 head'>
          Top Trending
          </h3>
          <p className='paragHead'>
          Here’s some of our most new arrivals products that people are in love with.
          </p>
        </div>
        <div className="row">
          {
            products.map((product)=> <div key={product.id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard productCard2">
              <div className="overlay overlay3">
                <div className="overImage">
                  <img src={product.imageHover} alt="product-2" />
                </div>
                <div className="actions">
                  <button className='add' onClick={()=>toCart(product)}>
                  <ShoppingBag />
                  </button>
                  <button className='add' onClick={()=>ToWishList(product)}>
                  <Heart />
                  </button>
                  <button className='add' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>dispatch(productView(product))}>
                  <Eye />
                  </button>
                </div>
              </div>
              <div className="productImg">
                <img src={product.image} alt="product" />
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
            <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>WishList</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="product">

        <div className="filter2 mt-3">
                        {
                          wishlist.length > 0 ? 
                        wishlist.map((product)=> <div key={product.id} className="miniProduct mt-3">
                        <div className="d-flex">
  <div className="miniImage flex-shrink-0">
    <img src={`/${product.image}`} alt="wishList"/>
  </div>
  <div className="flex-grow-1 ms-2">
    <Link to={`/productdetails/${product.id}`} onClick={()=>dispatch(productDetails(product))}>{product.title}</Link> 
    <p className='my-3'>Salary : ${product.price}.00</p>
  <button className='trash' onClick={()=>dispatch(deleteWishList(product))}>
                    <Trash2 />
  </button>
  </div>
</div>
                        </div>   
                        
                      )  
                       : <p>
                       You have no items in your wish list.
                       </p> }
<div className="salary">
<Link className='checkOut toCart d-block text-center' to="/wishlist" >
                                To WishList

                                </Link>
</div>
                    </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={show3} onHide={handleClose3} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Offcanvas.Body>
          <div className="product">

        <div className="filter2 mt-3">
                        {
                          cart.length > 0 ? 
                        cart.map((product)=> <div key={product.id} className="miniProduct mt-3">
                        <div className="d-flex">
  <div className="miniImage flex-shrink-0">
    <img src={`/${product.image}`} alt={product.title}/>
  </div>
  <div className="flex-grow-1 ms-2">
  <Link to={`/productdetails/${product.id}`} onClick={()=>dispatch(productDetails(product))}>{product.title}</Link> 
    <p className='my-1'>Salary : ${product.price}.00</p>
    <p className='my-1'>Count : {product.count}</p>
  <button className='trash' onClick={()=>dispatch(deleteCart(product))}>
                 <Trash2 />
  </button>
  </div>
</div>
                        </div>   
                        
                      )  
                       : <p className='text-center'>
                       You have no items in Cart list.
                       </p> }
<div className="salary">
<Link className='checkOut toCart d-block text-center' to="/cart" onClick={handleClose3}>
                                To Your Cart

                                </Link>
</div>
                    </div>
          </div>
        </Offcanvas.Body>
        </Offcanvas.Body>
      </Offcanvas>
          <ProductModal/>
         
        </div>
      </div>
    </section>
    {/* products sec end */}


    {/* video sec start */}
     <section className='video mt-80'>
     <video src="https://umino.bersky.co/media/revslider/videobanner_h6.mp4" autoPlay muted loop>
     </video>   
     <div className='videoText'>
      <p className='parag1'>
      #2022 UMN Collection
      </p>
      <h4 className='heading'>
      Umino Top trends
      </h4>
      <p className='parag2'>
      Change and take your lifestyle to the next level.
      </p>
      <Link className='link'>
        Explore Now
        </Link>
     </div>
    </section> 
    {/* video sec end */}

    {/* review sec start */}
    <section className='review mt-80'>
      <div className="container">
      <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false}}
      speed={1000}
    >
      <SwiperSlide>
      <div className="test text-center">
      <span>
      <Quote />
        </span>  
        <h5>
        " Thanks guys, keep up the good work! Great job, I will 
        definitely be ordering again! Thanks guys, keep up the good work! Garden was worth a fortune to my company. "
        </h5>
        <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
         </span>
         <p className='name'>
         Algistino Lionel - Verified Buyer
         </p>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="test text-center">
      <span>
      <Quote />
        </span>  
        <h5>
        " Thanks guys, keep up the good work! Great job, I will 
        definitely be ordering again! Thanks guys, keep up the good work! Garden was worth a fortune to my company. "
        </h5>
        <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
         </span>
         <p className='name'>
         Algistino Lionel - Verified Buyer
         </p>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="test text-center">
      <span>
      <Quote />
        </span>  
        <h5>
        " Thanks guys, keep up the good work! Great job, I will 
        definitely be ordering again! Thanks guys, keep up the good work! Garden was worth a fortune to my company. "
        </h5>
        <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
         </span>
         <p className='name'>
         Algistino Lionel - Verified Buyer
         </p>
    </div>
      </SwiperSlide>
    </Swiper>
      </div>
    </section>
    {/* review sec end */}


    {/* follow sec start */}
    <section className='follow mt-80'>
      <div className="container">
        <div className="follow2 text-center">
          <h6 className='head'>
          Follow Us
          </h6>
          <p className='paragHead pt-3'>
          Inspire and let yourself be inspired, from one unique fashion to another.
          </p>
        </div>
        <div className="images mt-5">
        <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false}}
      loop={true}
      speed={1000}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 5,
        },
      }}
    >
      <SwiperSlide>
        <a href="https://www.instagram.com/p/Cp4xA9GvLw4/" >
      <div className="swiperImg">
      <img src={insta1} alt="instagramPhoto1" />
      <div className="instaLink">
        <Instagram className='instaDir'/>
      </div>
      </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.instagram.com/p/Cp4xA9GvLw4/" >
      <div className="swiperImg">
      <img src={insta2} alt="instagramPhoto2" />
      <div className="instaLink">
        <Instagram className='instaDir'/>
      </div>
      </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.instagram.com/p/Cp4xA9GvLw4/" >
      <div className="swiperImg">
      <img src={insta3} alt="instagramPhoto3" />
      <div className="instaLink">
        <Instagram className='instaDir'/>
      </div>
      </div>
        </a>
      
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.instagram.com/p/Cp4xA9GvLw4/" >
      <div className="swiperImg">
      <img src={insta4} alt="instagramPhoto4" />
      <div className="instaLink">
        <Instagram className='instaDir'/>
      </div>
      </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.instagram.com/p/Cp4xA9GvLw4/" >
      <div className="swiperImg">
      <img src={insta5} alt="instagramPhoto5" />
      <div className="instaLink">
        <Instagram className='instaDir'/>
      </div>
      </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
      <a href="https://www.instagram.com/p/Cp4xA9GvLw4/" >
      <div className="swiperImg">
      <img src={insta6} alt="instagramPhoto6" />
      <div className="instaLink">
        <Instagram className='instaDir'/>
      </div>
      </div>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="https://www.instagram.com/p/Cp4xA9GvLw4/" >
      <div className="swiperImg">
      <img src={insta4} alt="instagramPhoto1" />
      <div className="instaLink">
        <Instagram className='instaDir'/>
      </div>
      </div>
        </a>
      </SwiperSlide>
    </Swiper>
        </div>
      </div>
    </section>
    {/* follow sec end */}

    {/* marquee sec start */}
     <section className='offer mt-80'>
     <Marquee speed={70} className='marquee'>
       <p>
       UMINO EDITORIAL - FREE DELIVERY AND RETURNS FROM $120
       </p>
       <span>
       <Circle />
       </span>
       <p>
       UMINO EDITORIAL - SIGN UP FOR 10% OFF YOUR FIRST ORDER
       </p>
       <span>
       <Circle />
       </span>
       <p>
       UMINO EDITORIAL - MID-SEASON SALE UP TO 50% OFF
       </p>
       <span>
       <Circle />
       </span>
       <p>
       UMINO EDITORIAL - SIGN UP FOR 10% OFF YOUR FIRST ORDER
       </p>
       <span>
       <Circle />
       </span>
       <p>
       UMINO EDITORIAL - MID-SEASON SALE UP TO 50% OFF
       </p>
       <span>
       <Circle />
       </span>
      
     </Marquee>
    </section> 
    {/* marquee sec end */}
    </>
  )
}
