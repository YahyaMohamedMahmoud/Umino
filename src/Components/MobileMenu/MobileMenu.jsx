import { Heart, House, Menu, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MobileMenu() {
  
  const cart = useSelector((state)=> state.cart);
  const wishlist = useSelector((state)=> state.wishlist);

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
        <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
      <Menu /> <br />
        Menu
      </a>
    </span>
    <span>
    <Link to="/wishlist" className="position-relative">
          <Heart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger number">
        {wishlist.length}
        <span className="visually-hidden">unread messages</span>
      </span>
      </Link> <br />
      WishList
    </span>
    <span>
    <Link to="/cart" className="position-relative">
          <ShoppingCart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger number">
        {cart.length}
        <span className="visually-hidden">unread messages</span>
      </span>
      </Link> <br />
      Cart
    </span>
        </div>
    </div>
   </section>
    </>
  )
}
