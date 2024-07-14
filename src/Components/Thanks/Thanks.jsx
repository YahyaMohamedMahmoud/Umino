import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';

export default function Thanks() {
    const userData = JSON.parse(localStorage.getItem('userCheckout'));

    const firstname = userData ? userData.firstname2 : '';
    const lastname = userData ? userData.lastname2 : '';
    const checkemail = userData ? userData.checkemail : '';
    const address = userData ? userData.address : '';
    const phone = userData ? userData.phone : '';
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      const [showConfetti, setShowConfetti] = useState(true);
    
      useEffect(() => {
        const handleResize = () => {
          setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      useEffect(() => {
        const timer = setTimeout(() => {
          setShowConfetti(false);
        }, 20000);
    
        return () => clearTimeout(timer);
      }, []);
  return (
    <>
   {showConfetti &&  <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={200}/>}
    <section className='check thank'>
    <div className="container">
        <div className="thankHead">
            <h1>
                Thank You {firstname}
            </h1>
            <p>
                We got your order & will send you <br />
                a confirmation email soon
            </p>
        </div>

    <div className="row">
    <div className="col-xl-3 col-lg-4">
        <div className="thankHead2 mt-3">
            <h2 className='py-2'>Details</h2>
            <p>Your Name : {`${firstname}${lastname}`}</p>
            <p>Order Number : 1</p>
            <p>Your Phone : {phone}</p>
            <p>Email : {checkemail}</p>
        </div>
        <div className="thankHead2 mt-3">
            <h2 className='py-2'>Payment</h2>
            <p>Cash On Delivery</p>
        </div>
    </div>
    <div className="col-xl-3 col-lg-4">
        <div className="thankHead2 mt-3">
            <h2 className='py-2'>Delivery</h2>
            <p>The order will be delivered <br /> within 5 days.</p>
        </div>
        <div className="thankHead2 mt-3">
            <h2 className='py-2'>Shipping Address</h2>
            <p>{address}</p>
        </div>
    </div>
    </div>
    <Link className='checkOut toCart d-block text-center my-5' to="/">
        Back To Home
        </Link>
    </div>
    </section>
    </>
  )
}
