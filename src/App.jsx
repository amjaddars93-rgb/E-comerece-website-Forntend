import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import Navbar from './components/Navbar'
import Products from './components/products'
import ViewDetailsProducts from './components/viewDetailsProducts'
import AddToCart from './components/AddToCart'
import UserRegistation from './components/UserRegistation'
import Contactus from './components/Contactus'
import UserLogin from './components/UserLogin'


const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path='/' element={<Homepage/>}/> 
   <Route path='/products' element={<Products/>}/> 
   <Route path='/about' element={<About/>}/> 
   <Route path='/contact' element={<Contactus/>}/> 
   <Route path='/addtocart' element={<AddToCart/>}/> 
   <Route path='/userRegister' element={<UserRegistation/>}/> 
  <Route path='/viewdetailsproducts/:id' element={<ViewDetailsProducts/>}/> 
  <Route path='/userLogin' element={<UserLogin/>}/> 
  

  
   
   </Routes>
   </BrowserRouter>
  )
}

export default App