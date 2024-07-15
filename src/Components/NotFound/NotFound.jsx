import React from 'react';
import image404 from '../../img/img_404.jpg';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
   <>
    {/* not sec start */}
    <section className='not p-90'>
        <div className="container">
            <div className="notImg">
                <img src={image404} alt="image404" />
            </div>
            <div className="nothead text-center">
                <h1>
                Oops...That link is broken.
                </h1>
                <p className='py-3'>
                Sorry for the inconvenience. Go to our homepage or check out our latest collections.
                </p>
                <Link to="/" className='checkOut toCart d-block text-center'>
                                Back To Home

                                </Link>
            </div>
        </div>
    </section>
   {/* not sec end */}
   </>
  )
}
