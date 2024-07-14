import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Checkout() {

    let cart = useSelector((state)=> state.cart);

    const [user , setUser] = useState({
        firstname2:"",
        lastname2:"",
        checkemail:"",
        address:"",
        phone:""
    })
    const [error , setError] = useState({
        firstname2:"",
        lastname2:"",
        checkemail:"",
        address:"",
        phone:"" 
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
  
          if (!user.firstname2) {
              newErrors.firstname2 = 'Please Enter Your First Name';
              isValid = false;
            }
          if (!user.lastname2) {
              newErrors.lastname2 = 'Please Enter Your Last Name';
              isValid = false;
            }
          if (!user.checkemail) {
              newErrors.checkemail = 'Please Enter Your Email';
              isValid = false;
            }
          if (!user.address) {
              newErrors.address = 'Please Enter Your Address';
              isValid = false;
            }
          if (!user.phone) {
              newErrors.phone = 'Please Enter Your Phone';
              isValid = false;
            }
            setError(newErrors);
        
            if (isValid) {
              localStorage.setItem('userCheckout', JSON.stringify(user));
              window.location.href = "/thanks";
            } else {
              setError(newErrors);
            }
      }
  return (
    <>
    <section className='check'>
        <div className="container">
         <div className="row">
         <div className="col-xl-5 col-lg-5">
         <div className="checkText pt-5">
           <h1>
          Checkout      
        </h1>     
        <form className='mt-4' onSubmit={submit}>
        <label htmlFor="firstname2" className='mt-3 mb-2 ms-3'>First Name</label>
        <input className='input input2' type="text" name="firstname2" id="firstname2" placeholder='First Name' onChange={handleUser}/>
        {error.firstname2 && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.firstname2}</p>}
        
        <label htmlFor="lastname2" className='mt-3 mb-2 ms-3'>Last Name</label>
        <input className='input input2' type="text" name="lastname2" id="lastname2" placeholder='Last Name' onChange={handleUser}/>
        {error.lastname2 && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.lastname2}</p>}
        
        <label htmlFor="checkemail" className='mt-3 mb-2 ms-3'>Email</label>
        <input className='input input2' type="email" name="checkemail" id="checkemail" placeholder='Email' onChange={handleUser}/>
        {error.checkemail && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.checkemail}</p>}
       
        <label htmlFor="address" className='mt-3 mb-2 ms-3'>Street Address</label>
        <input className='input input2' type="text" name="address" id="address" placeholder='Street Address' onChange={handleUser}/>
        {error.address && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.address}</p>}
        
        <label htmlFor="phone" className='mt-3 mb-2 ms-3'>Phone Number</label>
        <input className='input input2' type="text" name="phone" id="phone" placeholder='Your Phone' onChange={handleUser}/>
        {error.phone && <p className='ms-3 my-2' style={{ color: 'red' }}>{error.phone}</p>}
        <button className='checkOut toCart d-block text-center my-5' type='submit' onSubmit={submit}>
        CHECKOUT
        </button>
       </form>
        </div> 
         </div>
         <div className="col-xl-4 col-lg-5">
          {
            cart.map((product)=> <div key={product.id} className="checktable pt-5">
            <div className="d-flex">
                      <div className="flex-shrink-0">
                          <div className="checkimage">
                          <img src={product.image} alt="ss"/>
  
                          </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                          <h6 className='heading'>
                          {product.title}
                          </h6>
                          <p className='type mt-2'>
                              Type : {product.type}
                          </p>
                          <p className='type mt-2'>
                              Salary : ${product.price}.00
                          </p>
                          <p className='type mt-2'>
                              Qty : {product.count}
                          </p>
  
                      </div>
                      </div>
          </div> )
          } 
         </div>
        </div> 
        </div>
    </section>
    </>
  )
}
