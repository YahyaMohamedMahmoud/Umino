import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../ReduxToolkit/slices/productSlice';
import { Eye, Heart, ShoppingBag, Star, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { addToCart, deleteCart } from '../../ReduxToolkit/slices/cartSlice';
import { addToWish, deleteWishList } from '../../ReduxToolkit/slices/wishlistSlice';
import { productDetails, productView } from '../../ReduxToolkit/slices/productModal';
import ProductModal from '../ProductModal/ProductModal';
import { Offcanvas } from 'react-bootstrap';
export default function Sneakers() {
    const state = useSelector((state)=> state.product)
    const { sneakers } = state;
    const dispatch = useDispatch() 
    const wishlist = useSelector((state)=> state.wishlist);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(fetchProduct());
      
    }, [dispatch]);

    function ToWishList(product){
      dispatch(addToWish(product))
      handleShow()
    }
    const cart = useSelector((state)=> state.cart);
    const [show3, setShow3] = useState(false);
    
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
     function toCart(product){
          dispatch(addToCart(product));
          handleShow3();
        }
    return (
      <>
  
  <div className="row">
          {
              sneakers.map((product)=> (
                  <div key={product.id} className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
  
        <div className="productCard productCard2">
       
        <div className="overlay overlay2">
                <div className="overImage">
                  <img src={`/${product.imageHover}`} alt={product.title} loading='lazy'/>
                </div>
                <div className="actions actions2">
                  <button className='add' onClick={()=>toCart(product)}>
                  <ShoppingBag />
                  </button>
                  <button className='add'onClick={()=>ToWishList(product)}>
                  <Heart />
                  </button>
                  <button className='add' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>dispatch(productView(product))}>
                  <Eye />
                  </button>
                </div>
              </div>
              <div className="productImg">
                 <img src={`/${product.image}`} alt={product.title} loading='lazy'/>
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
                  <button className='color' style={{backgroundColor:`${product.color}`}}></button>
                  <button className='color' style={{backgroundColor:`${product.color2}`}}></button>
                </div>
              </div>
          </div>
              ))
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
    <img src={`/${product.image}`} alt={product.title}/>
  </div>
  <div className="flex-grow-1 ms-2">
  <Link to={`/productdetails/${product.id}`} className='toDetails' onClick={()=>dispatch(productDetails(product))}>{product.title}</Link> 
    <p className='my-2'>Salary : ${product.price}.00</p>
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
  <Link to={`/productdetails/${product.id}`} className='toDetails' onClick={()=>dispatch(productDetails(product))}>{product.title}</Link> 
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
      
      </>
    )
}
