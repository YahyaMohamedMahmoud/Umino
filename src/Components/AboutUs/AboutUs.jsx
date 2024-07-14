import React from 'react';
import banner from '../../img/about-banner_1.png';
import banner2 from '../../img/banner-about.png';
import banner3 from '../../img/banner-about-2.png';
import banner4 from '../../img/banner-about-3.png';
import about from '../../img/about-1.png';
import about2 from '../../img/about-2.png';
import { Link } from 'react-router-dom';


export default function AboutUs() {
  return (
    <>
       <section className='shop about'>
      <div className="shoptext aboutText text-center">
        <p>
        WELCOME TO UMINO
        </p>
          <h1 className='mb-1'>
          Our Perfect Store
            </h1>
            <p className='overparag'>
            Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect.
            </p>
        </div>  
    </section>
    
    <section className='story p-90'>
        <div className="container">
        <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="storyText">
                    <p className='our'>
                    OUR MISSION
                    </p>
                    <h2 className='py-3'>
                    Story About Us
                    </h2>
                    <p>
                    We have crafted thousands of manufacturing processes, strategy that allows us to understand our customers like never before. We are present up to this point due to the trust and appreciation of our customers.
                    </p>
                    <p className='pt-3'>
                    To help stem the flow of plastic into the ocean, we have committed to eliminating single-use plastic from the product range and food outlets by 2023.
                    </p>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="storyImg">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
        </div>
    </section>

    <section className='our p-90'>
        <div className="container">
        <div className="storyText text-center pb-5">
        <p className='our'>
        WHY CHOOSE US
                    </p>
        <h3 className='py-2 head'>
          Top Trending
          </h3>
          <p className='overparag pt-2'>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos vel pretium

lectus qua. Nunc id cursus metus ididunt ut labore metus episcing.
          </p>
        </div>
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="ourImg">
                    <img src={banner4} alt="banner4" />
                </div>
                <div className="ourText">
                    <h4 className='py-3'>
                    Unique for Women’s
                    </h4>
                    <p>
                    Our collections dress a unique and feminine woman. The pieces showcase a timeless style while keeping in mind fashion aesthetics and trends.
                    </p>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="ourImg">
                    <img src={banner3} alt="banner3" />
                </div>
                <div className="ourText">
                    <h4 className='py-3'>
                    Elegant for Men’s
                    </h4>
                    <p>
                    From traditional tailoring to the most informal pieces. Our Umino Man collections feature the latest trends with the maximum comfort.
                    </p>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="ourImg">
                    <img src={banner2} alt="banner2" />
                </div>
                <div className="ourText">
                    <h4 className='py-3'>
                    Freedom for Everyone
                    </h4>
                    <p>
                    The designs have been created adopting the current trends, while leaving room for personal expression among young people.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </section>
    
    <section className='desc'>
        <div className="container">
        <div className="descText">
        <h4>
        “ Umino will become an example of the responsible business model by doing business with kindness, profit and bringing practical and long-term values to customers, employees, partners, the community for the environment and for shareholders ”
     </h4>    
     <p>
     Michael Anthony, CEO & Founder Umino
     </p>
        </div>  
        </div>
    </section>

    <section className='best p-90'>
        <div className="container">
          <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="storyImg">
                    <img src={about} alt="about" />
                </div>
            </div> 
             <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="storyText text-center">
                    <p className='our'>
                    OUR FACTORIES
                    </p>
                    <h2 className='py-3'>
                    The Best Product
                    </h2>
                    <p className='mb-4'>
                    We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages.
                    </p>
                    <Link to="/shop" className='checkOut toCart d-block text-center'>
                    Learn More

     </Link>
                </div>
            </div>
          </div>
          <div className="row mt-80 align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="storyText text-center">
                    <p className='our'>
                    OUR QUALITY
                    </p>
                    <h2 className='py-3'>
                    Timeless Products
                    </h2>
                    <p className='mb-4'>
                    At Umino, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.
                    </p>
                    <Link to="/shop" className='checkOut toCart d-block text-center'>
                    Learn More

     </Link>
                </div>
            </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="storyImg">
                    <img src={about2} alt="about2" />
                </div>
            </div> 
            
          </div>
        </div>
    </section>

    <section className='box mb-5'>
        <div className="container">
            <div className="boxChild">
            <div className="boxText text-center">
            <p>
            RULE THE WAVES
            </p>
            <h6 className='py-4'>
            AUTUMN LOOKBOOK
            </h6>
            <p>
            Our latest fall and winter collection.
            </p>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

