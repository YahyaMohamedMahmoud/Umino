import { Heart, House, Menu, ShoppingCart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { deleteWishList } from '../../ReduxToolkit/slices/wishlistSlice';
import { productDetails } from '../../ReduxToolkit/slices/productModal';
import { deleteCart } from '../../ReduxToolkit/slices/cartSlice';

export default function MobileMenu() {
  
  const cart = useSelector((state)=> state.cart);
  const wishlist = useSelector((state)=> state.wishlist);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  return (
    <>
   <section className='menu'>
    <div className="container">
        <div className="mobMenu d-flex flex-row justify-content-between text-center">
    <span>
    <House /> <br />
    <Link to="/">
    Home
    </Link>
    </span>
    <span>
    <button onClick={handleShow} className='linked'>
      <Menu /> <br />
      Menu
      </button>
     <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link to="/" className="nav-link" aria-current="page" onClick={handleClose}>Home</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="/shop" onClick={handleClose}>Shop</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="" onClick={handleClose}>Link</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="" onClick={handleClose}>Link</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="" onClick={handleClose}>Link</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link" to="" onClick={handleClose}>Link</Link>
              </li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </span>
    <span>
    <button onClick={handleShow2} className="position-relative linked">
          <Heart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger number">
        {wishlist.length}
        <span className="visually-hidden">unread messages</span>
      </span>
      </button> <br />
      WishList
    </span>
    <span>
    <Offcanvas show={show2} onHide={handleClose2} placement="end">
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
  <p className='my-3'>Salary : ${product.price}.00</p>
  <button className='trash' onClick={()=>dispatch(deleteWishList(product))}>
                    <Trash2 />
  </button>
  </div>
</div>
                        </div>   
                        
                      )  
                       : <p className='text-center'>
                       You have no items in your wish list.
                       </p> }
<div className="salary">
<Link className='checkOut toCart d-block text-center' to="/wishlist" onClick={handleClose2}>
                                To WishList

                                </Link>
</div>
                    </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    <button onClick={handleShow3} className="position-relative linked">
          <ShoppingCart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger number">
        {cart.length}
        <span className="visually-hidden">unread messages</span>
      </span>
      </button> <br />
      Cart
    </span>
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
        </div>
    </div>
   </section>
    </>
  )
}
