import React from 'react';
import collection from "../../img/fashion_products_16_02.jpg";

import { Link } from 'react-router-dom';

export default function OffcanvasFilter() {
  return (
    <>
    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Filter</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body product">
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
    </>
  )
}
