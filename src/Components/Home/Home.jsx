// import React, { useEffect } from 'react';
import Slide1 from "../../img/h1-slide-show-1.jpg";
import Slide2 from "../../img/h1-slide-show-2.jpg";
import Slide3 from "../../img/h1-slide-show-3.jpg";
import shop1 from "../../img/fas6_banner_1.png";
import shop2 from "../../img/fas6_banner_2.png";
import product from "../../img/fashion_products_6_6_1.jpg";
import product2 from "../../img/fashion_products_6_7_1.jpg";
import insta1 from "../../img/insta1.jpg";
import insta2 from "../../img/insta2.jpg";
import insta3 from "../../img/insta3.jpg";
import insta4 from "../../img/insta4.jpg";
import insta5 from "../../img/insta5.jpg";
import insta6 from "../../img/insta6.jpg";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { Circle, Eye, Heart, Instagram, Quote, ShoppingBag, Star } from 'lucide-react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import MobileMenu from '../MobileMenu/MobileMenu';
import DisplayMenu from "../MobileMenu/DisplayMenu";

export default function Home() {

  const Display = DisplayMenu()


  return (
    <>
    {/* menu */}
     {Display && <MobileMenu />}
    {/* menu */}

    {/* landing carousel sec start */}
    <section className='landing'>
    <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={3000}>
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
    <div className="carousel-item" data-bs-interval={3000}>
      <img src={Slide2} alt="slide2"/>
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
    <div className="carousel-item" data-bs-interval={3000}>
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
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
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
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard">
              <div className="overlay">
                <div className="overImage">
                  <img src={product2} alt="product-2" />
                </div>
                <div className="actions">
                  <button className='add'>
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
                <img src={product} alt="product" />
              </div>
              <div className="productText">
                <Link to="/" className='toProduct'>
                Teddy Bear Coats
                </Link>
                <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>
                <p className='price'>
                $68.00
                </p>
                <button className='color' style={{backgroundColor:"black"}}></button>
                <button className='color' style={{backgroundColor:"black"}}></button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard">
              <div className="overlay">
                <div className="overImage">
                  <img src={product2} alt="product-2" />
                </div>
                <div className="actions">
                  <button className='add'>
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
                <img src={product} alt="product" />
              </div>
              <div className="productText">
                <Link to="/" className='toProduct'>
                Teddy Bear Coats
                </Link>
                <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>
                <p className='price'>
                $68.00
                </p>
                <button className='color' style={{backgroundColor:"black"}}></button>
                <button className='color' style={{backgroundColor:"black"}}></button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard">
              <div className="overlay">
                <div className="overImage">
                  <img src={product2} alt="product-2" />
                </div>
                <div className="actions">
                  <button className='add'>
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
                <img src={product} alt="product" />
              </div>
              <div className="productText">
                <Link to="/" className='toProduct'>
                Teddy Bear Coats
                </Link>
                <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>
                <p className='price'>
                $68.00
                </p>
                <button className='color' style={{backgroundColor:"black"}}></button>
                <button className='color' style={{backgroundColor:"black"}}></button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard">
              <div className="overlay">
                <div className="overImage">
                  <img src={product2} alt="product-2" />
                </div>
                <div className="actions">
                  <button className='add'>
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
                <img src={product} alt="product" />
              </div>
              <div className="productText">
                <Link to="/" className='toProduct'>
                Teddy Bear Coats
                </Link>
                <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>
                <p className='price'>
                $68.00
                </p>
                <button className='color' style={{backgroundColor:"black"}}></button>
                <button className='color' style={{backgroundColor:"black"}}></button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard">
              <div className="overlay">
                <div className="overImage">
                  <img src={product2} alt="product-2" />
                </div>
                <div className="actions">
                  <button className='add'>
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
                <img src={product} alt="product" />
              </div>
              <div className="productText">
                <Link to="/" className='toProduct'>
                Teddy Bear Coats
                </Link>
                <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>
                <p className='price'>
                $68.00
                </p>
                <button className='color' style={{backgroundColor:"black"}}></button>
                <button className='color' style={{backgroundColor:"black"}}></button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard">
              <div className="overlay">
                <div className="overImage">
                  <img src={product2} alt="product-2" />
                </div>
                <div className="actions">
                  <button className='add'>
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
                <img src={product} alt="product" />
              </div>
              <div className="productText">
                <Link to="/" className='toProduct'>
                Teddy Bear Coats
                </Link>
                <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>
                <p className='price'>
                $68.00
                </p>
                <button className='color' style={{backgroundColor:"black"}}></button>
                <button className='color' style={{backgroundColor:"black"}}></button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard">
              <div className="overlay">
                <div className="overImage">
                  <img src={product2} alt="product-2" />
                </div>
                <div className="actions">
                  <button className='add'>
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
                <img src={product} alt="product" />
              </div>
              <div className="productText">
                <Link to="/" className='toProduct'>
                Teddy Bear Coats
                </Link>
                <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>
                <p className='price'>
                $68.00
                </p>
                <button className='color' style={{backgroundColor:"black"}}></button>
                <button className='color' style={{backgroundColor:"black"}}></button>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="productCard">
              <div className="overlay">
                <div className="overImage">
                  <img src={product2} alt="product-2" />
                </div>
                <div className="actions">
                  <button className='add'>
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
                <img src={product} alt="product" />
              </div>
              <div className="productText">
                <Link to="/" className='toProduct'>
                Teddy Bear Coats
                </Link>
                <span className='icon'>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                <Star className='star'/>
                </span>
                <p className='price'>
                $68.00
                </p>
                <button className='color' style={{backgroundColor:"black"}}></button>
                <button className='color' style={{backgroundColor:"black"}}></button>
              </div>
            </div>
          </div>
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
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
