import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CreateAccount() {
    const [user , setUser] = useState({
        firstname:"",
        lastname:"",
        email3:"",
        password3:"",
        confirmpassword4:""
    })
    const [error , setError] = useState({
        firstname:"",
        lastname:"",
        email3:"",
        password3:"",
        confirmpassword4:"" 
    })

    function handleUser(event){
      const userData = {...user};
      const err = {...error};
      err[event.target.name] = "";
     userData[event.target.name] = event.target.value;
     setError(err);
      setUser(userData);  
    }
    function submit(event) {
        event.preventDefault();
        const newErrors = {};
        let isValid = true;

        if (!user.firstname) {
            newErrors.firstname = 'Please Enter Your First Name';
            isValid = false;
          }
        if (!user.lastname) {
            newErrors.lastname = 'Please Enter Your Last Name';
            isValid = false;
          }
        if (!user.email3) {
            newErrors.email3 = 'Please Enter Your Email';
            isValid = false;
          }
        if (!user.password3) {
            newErrors.password3 = 'Please Enter Your Password';
            isValid = false;
          }
        if (user.password3 !== user.confirmpassword4) {
            newErrors.confirmpassword4 = 'Passwords do not match';
            isValid = false;
          }
          setError(newErrors);
      
          if (isValid) {
            localStorage.setItem('user', JSON.stringify(user));
            alert('Data saved let go to make Log in');
            window.location.href = "/login";
          } else {
            setError(newErrors);
          }
    }

  return (
   <>
         {/* shop sec start */}
         <section className='cart'>
      <div className="shoptext text-center" data-aos="fade-down"
     data-aos-duration="4000" data-aos-easing="linear">
          <h1 className='mb-1'>
          Create New Customer Account
            </h1>
            <Link to="/">
            Home / 
            </Link>  
            <span> Create Account</span>
        </div>  
    </section>
    {/* shop sec end */}
   <section className='sign'>
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-xl-5 col-lg-6" data-aos="fade-right"
     data-aos-duration="4000" data-aos-easing="linear">
        <h2 className='signHead mt-3'>
        Personal Information
       </h2>
       <form className='mt-4' onSubmit={submit}>
        <label htmlFor="firstname" className='mt-3 mb-2 ms-3'>First Name</label>
        <input className='input' type="text" name="firstname" id="firstname" onChange={handleUser} placeholder='First Name'/>
        {error.firstname && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.firstname}</p>}
        <label htmlFor="lastname" className='mt-3 mb-2 ms-3'>Last Name</label>
        <input className='input' type="text" name="lastname" id="lastname" onChange={handleUser} placeholder='Last Name'/>
        {error.lastname && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.lastname}</p>}
       </form>
        </div>
        <div className="col-xl-5 col-lg-6" data-aos="fade-up"
     data-aos-duration="4000" data-aos-easing="linear">
        <h2 className='signHead mt-3'>
        Sign-in Information
       </h2>
       <form className='mt-4' onSubmit={submit}>
        <label htmlFor="email3" className='mt-3 mb-2 ms-3'>Email</label>
        <input className='input' type="email" name="email3" id="email3" onChange={handleUser} placeholder='Email'/>
        {error.email3 && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.email3}</p>}
        <label htmlFor="password3" className='mt-3 mb-2 ms-3'>Password</label>
        <input className='input' type="password" name="password3" id="password3" onChange={handleUser} placeholder='Password'/>
        {error.password3 && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.password3}</p>}
        <label htmlFor="confirmpassword4" className='mt-3 mb-2 ms-3'>Confirm Password</label>
        <input className='input' type="password" name="confirmpassword4" id="confirmpassword4" onChange={handleUser} placeholder='Confirm Password'/>
        {error.confirmpassword4 && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.confirmpassword4}</p>}
        <div className="salary">
        <button className='checkOut toCart d-block text-center my-5' onSubmit={submit} type='submit'>
        CREATE AN ACCOUNT
        </button>
        </div>
       </form>
        </div>
    </div>
    </div>
   </section>
   </>
  )
}
