import React, { useEffect, useState } from "react";
import { Link, useLocation, } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const { pathname } = useLocation()
    // const navigate = useNavigate()

  const [ isLogged , setIsLogged ] = useState(false)

    useEffect(()=>{
     const token = localStorage.getItem("token")
     console.log(token)
  
     if(token){
      setIsLogged(true)
     }
    //  setIsLoggedIn(true)
    },[pathname])

    const logoutbuttonfuncation=async()=>{
      try {
        const respose=await axios.post("http://localhost:5000/user/user-logout");
        localStorage.removeItem("token")
         setIsLogged(false);
         
      } catch (error) {
        console.log(error)
      }
    }
  
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
       
        <h1 className="text-2xl font-bold text-blue-400">
          MyStore
        </h1>

        <div className="space-x-6 text-lg">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-400 transition duration-300"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact Us
          </Link>
            <Link
            to="/addtocart"
            className="hover:text-blue-400 transition duration-300"
          >
             AddToCart
          </Link>

          {
            isLogged ?   
            <button onClick={logoutbuttonfuncation} >
              Logout
            </button> :  <Link
            to="/userRegister"
            className="hover:text-blue-400 transition duration-300"
          >
             User-Register
          </Link>
          }
             
          
          

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
