import React from 'react';
import collection from "../../img/fashion_products_16_02.jpg";
import collection2 from "../../img/men_products_2_6_1_1.jpg";
import collection3 from "../../img/watches_products_1_2.jpg";
import collection4 from "../../img/fashion_products_8_1.jpg";
import collection5 from "../../img/fashion_products_7_1.jpg";
import collection6 from "../../img/fashion_products_6_6_1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link, Outlet } from 'react-router-dom';
import DisplayMenu from "../MobileMenu/DisplayMenu";
import MobileMenu from '../MobileMenu/MobileMenu';
import OffcanvasFilter from '../OffcanvasFilter/OffcanvasFilter';

export default function Shop() {
    const Display = DisplayMenu()


  return (
    <>
    {/* menu */}
     {Display && <MobileMenu />}
    {/* menu */}
    {/* shop sec start */}
    <section className='shop'>
      <div className="shoptext">
          <h1 className='mb-1'>
            Shop
            </h1>
            <a href="/">
            Home /
            </a>  
            <span> Shop</span>
        </div>  
    </section>
    {/* shop sec end */}
    
    {/* categ sec start */}
    <section className='categ mt-80'>
    <div className="container">
    <Swiper
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 5000 }}
      speed={1000}
      loop={true}
      modules={[Navigation, Pagination, Autoplay]}
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
          slidesPerView: 5,
          spaceBetween: 5,
        },
      }}
    >
      <SwiperSlide>
      <div className="cardImag">
                <img src={collection} alt="collection1" />
                <div className="cardInfo">
                    <Link to="/shop" className='infoHead'>
                    Women's Shirts 
                    </Link>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardImag">
                <img src={collection2} alt="collection2" />
                <div className="cardInfo">
                    <Link to="/shop" className='infoHead'>
                    Men Clothes  
                    </Link>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardImag">
                <img src={collection3} alt="collection3" />
                <div className="cardInfo">
                    <Link to="/shop" className='infoHead'>
                    Watches
                    </Link>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardImag">
                <img src={collection4} alt="collection4" />
                <div className="cardInfo">
                    <Link to="/shop" className='infoHead'>
                    Dresses 
                    </Link>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardImag">
                <img src={collection5} alt="collection5" />
                <div className="cardInfo">
                    <Link to="/shop" className='infoHead'>
                    Top T-shirt   
                    </Link>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardImag">
                <img src={collection6} alt="collection6" />
                <div className="cardInfo">
                    <Link to="/shop" className='infoHead'>
                    Winter Coat 
                    </Link>
                </div>
            </div>
      </SwiperSlide>
      

      </Swiper>
    </div>
    </section>
    {/* categ sec end */}

    {/* product sec start*/}
    <section className='product mt-80 pb-5'>
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3">
                   <div className="filterData">
                   <div className="filter">
                        <h3 className='mb-5'>
                        Category
                        </h3>
                        <ul>
                            <li>
                               <Link to="/shop">
                        Women's Shirts   
                        </Link> 
                            </li>
                            <li>
                             <Link to="/shop/men">
                        Men Clothes  
                        </Link>   
                            </li>
                            <li>
                             <Link to="/shop/watches">
                        Watches  
                        </Link>   
                            </li>
                            <li>
                             <Link to="/shop/sneakers">
                        Sneakers 
                        </Link>   
                            </li>
                        </ul>

                    </div>
                    <div className="filter2 mt-3 py-4">
                        <h4 className='pb-3'>
                        My Wish List
                        </h4>
                        <p>
                        You have no items in your wish list.
                        </p>
                        <div className="miniProduct d-flex mt-3">
                        <div className="d-flex">
  <div className="miniImage flex-shrink-0">
    <img src={collection} alt="wishList"/>
  </div>
  <div className="flex-grow-1 ms-2">
    see repjust it as needed.
  </div>
</div>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-xl-9 col-lg-9">
                    <div className="products">
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* filter in mobile and tablet */}
    <button className='filterCateg' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
          Filter
         </button>
      <OffcanvasFilter/>
    {/* filter in mobile and tablet */}

    </>

  )
}
