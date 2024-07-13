import React, { useState } from 'react';
import Logo from "../../img/logo_umino.png";
import { Link } from 'react-router-dom';
import { ChevronsUp, Heart, Menu, ShoppingCart, Trash2, UserRound } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Offcanvas } from 'react-bootstrap';
import { productDetails } from '../../ReduxToolkit/slices/productModal';
import { deleteWishList } from '../../ReduxToolkit/slices/wishlistSlice';
import { deleteCart } from '../../ReduxToolkit/slices/cartSlice';

export default function Header() {
  const [headerfixed, setFixed] = useState(false);
  const [btnfixed , setbtnFixed] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const cart = useSelector((state)=> state.cart);
  const wishlist = useSelector((state)=> state.wishlist);
  const dispatch = useDispatch();

  function headerFixed(){
    if(window.scrollY > 100){
      setFixed(true)
      setbtnFixed(true)
    }
    else{
      setFixed(false)
      setbtnFixed(false)
    }
  }
  window.addEventListener("scroll" , headerFixed)
 
  function onScroll(){
    window.scroll({
      top:0
    })
  }
  const [showLog, setShowLog] = useState(false);

  const handleCloseLogModal = () => setShowLog(false);
  const handleShowLogModal = () => setShowLog(true);

  const [getUser, setGetUser] = useState({
    modalEmail: "",
    modalPassword: "",
  });

  const userData = JSON.parse(localStorage.getItem('user'));

const mail = userData ? userData.email3 : '';
const pass = userData ? userData.password3 : '';

  function getuserData(event) {
    const { name, value } = event.target;
    setGetUser((prevState) => ({ ...prevState, [name]: value }));
  }
  function submit(event) {
    event.preventDefault();
    if (
        mail === getUser.modalEmail &&
        pass === getUser.modalPassword   
      ) {
        window.location.href = "/shop";
      }
}

  return (
   <>
   <header className={headerfixed ? "headerFixed" : ""} id='headerPhone'>
    <div className="navbar py-3 px-3">
    <div className="rows">
      <div className="colum">
      <button className='linked' onClick={handleShow}>
      <Menu />
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
      
      </div>
      <div className="colum colum3">
        <Link to="/">
        <img src={Logo} alt="" className='logo'/>
        </Link>
      </div>
      <div className="colum">
      <ul className='navbar-nav navbar2'>
      <li className='nav-item me-2'>
          <button onClick={handleShowLogModal} className='linked'>
        <UserRound />
          </button>
        </li>

          <li className='nav-item me-2'>
          <button onClick={handleShow3} className="position-relative linked">
          <ShoppingCart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cart.length}
        <span className="visually-hidden">unread messages</span>
      </span>
      </button>
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
          </li>
      </ul>
      </div>
    </div>
    </div>
   </header>
  <header className={headerfixed ? "headerFixed" : ""} id='headerDesktop'>
  <nav className="navbar navbar-expand-lg py-3 px-4">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <img src={Logo} alt="logo" className='logo'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to="">Link</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to="">Link</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to="">Link</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to="">Link</Link>
        </li>
      </ul>
      <ul className='navbar-nav'>
        <li className='nav-item me-4'>
          <button onClick={handleShowLogModal} className='linked'>
        <UserRound />
          </button>
        </li>
      

          <li className='nav-item me-4'>
          <button onClick={handleShow2} className="position-relative linked">
          <Heart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {wishlist.length}
        <span className="visually-hidden">unread messages</span>
      </span>
      </button>
          </li>
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
    <img src={`/${product.image}`} alt="wishList"/>
  </div>
  <div className="flex-grow-1 ms-2">
  <Link to={`/productdetails/${product.id}`} className='toDetails' onClick={()=>dispatch(productDetails(product))}>{product.title}</Link> 
    <p className='my-3'>${product.price}.00</p>
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

          <li className='nav-item'>
          <button onClick={handleShow3} className="position-relative linked">
          <ShoppingCart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cart.length}
        <span className="visually-hidden">unread messages</span>
      </span>
      </button>
          </li>
      </ul>
    </div>
  </div>
</nav>
  </header>

   <section className='log'>
    
  <Modal show={showLog} onHide={handleCloseLogModal} centered className='dialog2'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='modal-body2 text-center'>
          <h1 className='signHead'>
       Sign In
       </h1>
       <p className='makeAccount my-2'>
       Don't have an account yet? <Link to="/createaccount" onClick={handleCloseLogModal}>Sign up</Link> for free
       </p>
       <form onSubmit={submit} className='mt-4'>
        <label htmlFor="modalEmail"></label>
        <input className='input' type="email" name="modalEmail" id="modalEmail" placeholder='Email' onChange={getuserData}/>
        <label htmlFor="modalPassword"></label>
        <input className='input' type="password" name="modalPassword" id="modalPassword" placeholder='Password' onChange={getuserData}/>
        <div className='forget text-end my-3'>
        <Link className='/'>Forget Your Password ?</Link>
        </div>
        <div className="salary">
<button className='checkOut toCart d-block text-center mb-4' onSubmit={submit}>
                                SIGN IN

                                </button>
</div>
       </form>

        </Modal.Body>
      </Modal>
    </section>                   

  {/* <LogIn/> */}
  <button className={`btnFixed ${btnfixed ? "show" : ""}`} onClick={onScroll}>
  <ChevronsUp className='icon'/>
  </button>


   </>
  )
}
