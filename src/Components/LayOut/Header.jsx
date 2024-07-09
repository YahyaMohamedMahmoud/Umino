import React, { useState } from 'react';
import Logo from "../../img/logo_umino.png";
import { Link } from 'react-router-dom';
import { ChevronsUp, Heart, Menu, ShoppingCart, UserRound } from 'lucide-react';
import OffcanvasWish from '../OffcanvasWish/OffcanvasWish';
import OffcanvasCart from '../OffcanvasCart/OffcanvasCart';

export default function Header() {

  const [headerfixed, setFixed] = useState(false);
  const [btnfixed , setbtnFixed] = useState(false);

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



  return (
   <>
   <header className={headerfixed ? "headerFixed" : ""} id='headerPhone'>
    <div className="navbar py-3 px-3">
    <div className="rows">
      <div className="colum">
      <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
      <Menu />
      </a>

<div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h1 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h1>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <Link to="/" className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link" to="/shop" aria-label="Close">Shop</Link>
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
    </div>
  </div>
</div>
      </div>
      <div className="colum colum3">
        <img src={Logo} alt="" className='logo'/>
      </div>
      <div className="colum">
      <ul className='navbar-nav navbar2'>
      <li className='nav-item me-2'>
          <Link>
        <UserRound />
          </Link>
          
        </li>

          <li className='nav-item me-2'>
          <Link type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" className="position-relative">
          <ShoppingCart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
        <span className="visually-hidden">unread messages</span>
      </span>
      </Link>
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
          <Link>
        <UserRound />
          </Link>
          
        </li>

          <li className='nav-item me-4'>
          <Link type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className="position-relative">
          <Heart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
        <span className="visually-hidden">unread messages</span>
      </span>
      </Link>
          </li>

          <li className='nav-item'>
          <Link type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" className="position-relative">
          <ShoppingCart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
        <span className="visually-hidden">unread messages</span>
      </span>
      </Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
  </header>


  <button className={`btnFixed ${btnfixed ? "show" : ""}`} onClick={onScroll}>
  <ChevronsUp className='icon'/>
  </button>

     <OffcanvasWish/>
     <OffcanvasCart/>


   </>
  )
}
