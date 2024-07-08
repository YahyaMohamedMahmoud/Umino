import React from 'react';
import Logo from "../../img/footerLogo.jpg";
import payment from "../../img/payment_dark.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer>
      <div className="container">

      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="cards">
            <img src={Logo} alt="footerLogo" />
          </div>
          <ul className='mt-4'>
            <li>
              <p>
              268 St, South New York/NY 98944, United States
           <br /> +222-1800-2628
              </p>
            </li>
            <li>
           <Link to="mailto:yahiamohmed@gmail.com" className='gmail'>
           yahiamohmed@gmail.com
           </Link>
            </li>
          </ul>
          <div className="socail mt-4">
            <Link to="#" className='linkSocial'>
            <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="#" className='linkSocial twitter'>
            <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link to="#" className='linkSocial youtube'>
            <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link to="#" className='linkSocial insta'>
            <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="#" className='linkSocial insta'>
            <i className="fa-brands fa-tiktok"></i>
            </Link>
            <Link to="#" className='linkSocial'>
            <i className="fa-brands fa-pinterest-p"></i>
            </Link>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-6">
          <div className="details">
          <h6>
          COMPANY
          </h6>
          <ul className='list'>
            <li>
              <Link to="/shop">
              Special Offers
              </Link>
            </li>
            <li>
              <Link to="/shop">
              Performance
              </Link>
            </li>
            <li>
              <Link to="/shop">
              T-shirts
              </Link>
            </li>
            <li>
              <Link to="/shop">
              Underwear
              </Link>
            </li>
            <li>
              <Link to="/shop">
              Top Brands
              </Link>
            </li>
            <li>
              <Link to="/shop">
              Online Exclusive
              </Link>
            </li>
          </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-6">
          <div className="details">
          <h6>
          CUSTOMER SERVICE
          </h6>
          <ul className='list'>
            <li>
              <Link to="/">
              My Account
              </Link>
            </li>
            <li>
              <Link to="/">
              About Us
              </Link>
            </li>
            <li>
              <Link to="/shop">
              T-shirts
              </Link>
            </li>
            <li>
              <Link to="/">
              My Cart
              </Link>
            </li>
            <li>
              <Link to="/">
              Wishlist
              </Link>
            </li>
          </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="details">
          <h6>
          CUSTOMER SERVICE
          </h6>
         <p>
         Enter your email address to get $10 off your first order and free shipping. Updates information on Sales and Offers.
         </p>
         <div className="email mt-5">
          <input type="email" name="email" className='toEmail' id="email" placeholder='Email' required/>
          <button className='link'>Subscribe</button>
         </div>
          </div>
        </div>
      </div>
      <div className="copy d-xl-flex d-lg-flex d-md-flex justify-content-between">
        <p>
        © 2023 Umino Store. All Rights Reserved
        </p>
        <img src={payment} alt="" />
      </div>
      </div>
    </footer>
    </>
  )
}
