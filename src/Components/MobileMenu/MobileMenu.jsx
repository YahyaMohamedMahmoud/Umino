import { Heart, House, Menu, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileMenu() {

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
    <Link type="button" className="position-relative">
          <Heart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger number">
        0
        <span className="visually-hidden">unread messages</span>
      </span>
      </Link> <br />
      WishList
    </span>
    <span>
    <Link type="button" className="position-relative">
          <ShoppingCart />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger number">
        0
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
