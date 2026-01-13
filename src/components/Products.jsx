import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setviewDetailsProduct } from "../redux/viewDeatialsSlice";
import { setAddtoCart } from "../redux/AddToCartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
       const token = localStorage.getItem("token")
       console.log(token)
    
       if(!token){
        navigate('/')
        
       }
      //  setIsLoggedIn(true)
      },[])

  const Getproductsdata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/products/products-get",{
    withCredentials: true
  }
      );
      setProducts(response.data.data); // backend array
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    Getproductsdata();
  }, []);

  const viewdetailsproduct=()=>{
    dispatch(setviewDetailsProduct(products))


  }
  const Addtocartproducts=(product)=>{
    dispatch(setAddtoCart(product))


  }
  


  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Our Products
      </h1>

      {loading ? (
        <p className="text-center text-gray-600 text-lg">Loading products...</p>
      ) : (
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col"
              >
                <div className="flex justify-center items-center h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-indigo-600 font-bold mt-2 text-xl">
                  ${product.price}
                </p>

                <button onClick={()=>Addtocartproducts(product)} className="mt-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold">
                  Add to Cart
                </button>
                <Link to={`/viewdetailsproducts/${product.id}`} className="" >
                <button onClick={viewdetailsproduct} className="mt-4  w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold">
                  view detials
                </button>
                </Link>

              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-600">
              No products found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
