import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserLogin() {

    const [getUser, setGetUser] = useState({
        userEmail: "",
        userPassword: "",
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
            mail === getUser.userEmail &&
            pass === getUser.userPassword   
          ) {
            window.location.href = "/shop";
          }
}
  return (
    <>
       {/* shop sec start */}
       <section className='cart'>
      <div className="shoptext text-center">
          <h1 className='mb-1'>
          Customer Login
            </h1>
            <Link to="/">
            Home / 
            </Link>  
            <span>Customer Login</span>
        </div>  
    </section>
    {/* shop sec end */}
    <section className='sign'>
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6">
        <h2 className='signHead mt-3'>
        Registered Customers
       </h2>
       <form className='mt-4' onSubmit={submit}>
        <label htmlFor="userEmail" className='mt-3 mb-2 ms-3'>Email</label>
        <input className='input' type="email" name="userEmail" id="userEmail" onChange={getuserData}/>
        <label htmlFor="userPassword" className='mt-3 mb-2 ms-3'>Password</label>
        <input className='input' type="password" name="userPassword" id="userPassword" onChange={getuserData}/>
        <button className='checkOut toCart d-block text-center my-5' type='submit' id='btn' onSubmit={submit}>
        Sign In
        </button>
       </form>
        </div>
        <div className="col-xl-5 col-lg-6">
        <h2 className='signHead mt-3'>
        Create an Account
       </h2>
       <p className='makeAccount my-3'>
       Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails. 
       </p>
       <Link to="/createaccount" className='checkOut toCart d-block text-center my-5'>
       CREATE AN ACCOUNT
        </Link>
        </div>
    </div>
    </div>
   </section>
    </>
  )
}
