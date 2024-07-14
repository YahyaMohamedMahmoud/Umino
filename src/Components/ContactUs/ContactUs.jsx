import React from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <>
        {/* shop sec start */}
        <section className='cart'>
      <div className="shoptext text-center">
          <h1 className='mb-1'>
          Contact Us
            </h1>
            <Link to="/">
            Home /
            </Link>  
            <span> Contact Us</span>
        </div>  
    </section>
    {/* shop sec end */}
    <section className='map'>
        <div className="container">
        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.206106259951!2d-0.12585020164521804!3d51.5028070932796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1720975959208!5m2!1sen!2seg" width="100%" height="500" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
        <div className="row">
            <div className="col-xl-4 col-lg-6">
                <div className="help my-5">
                    <h2>
                    Here to Help
                    </h2>
                    <p className='mt-2 mb-4'>
                        Have a question? You may find an answer in our FAQs. But you can also contact us:
                    </p>
                    <ul>
                        <li className='mb-3'>
                        268 St, South New York/NY 98944, United States.
                        </li>
                        <li className='mb-3'>
                        Info@example.com
                        </li>
                        <li className='mb-3'>
                        (+222)-1800-2628
                        </li>
                        <li>
                        Opening Hours: Everyday 9:00am - 6:00pm
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-8 col-lg-6">
               <div className="help mt-5 mb-5">
               <h3>
                Get in Touch
                </h3>
                <p className='mt-2'>
                We would love to hear from you about our entire service. Your comments and suggestions will be highly appreciated. Please complete the form below.
                </p>
                <form className='mt-4'>
            <div className="d-xl-flex">
            <input className='input mb-2' type="text" name="#" id="#" placeholder='First Name'/>
            <input className='input ms-xl-1' type="text" name="$" id="$" placeholder='Last Name'/>
            </div>
            <input className='input mt-2' type="email" name="%" id="%" placeholder='Email'/>
            <textarea name="^" id="^" rows="9" cols={2} className='input mt-3' placeholder='Message'></textarea>
       </form>
               </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
