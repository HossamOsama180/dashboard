import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';

import OrderList from "./Component/OrderList"
import Customer from './Pages/Customer';
import Reviwes from './Pages/Reviwes';

function App() {




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/order' element={<OrderList />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/Review' element={<Reviwes />} />
          {/* <Route path='/about' element={<AboutUs />}/>
            <Route path='/contact' element={<ContactUs />}/>
            <Route path='/register' element={<Regestration />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/SingIN' element={<SignUp />}/>
            <Route path='/desert' element={<Desert />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/drink' element={<Drink />}/>
            <Route path='/food' element={<Food />}/>
            <Route path='/Profile' element={<Profile />}/>
            <Route path='/checkOut' element={<CheckOut />}/>
            <Route path='/Payment' element={<Payment />}/>
            <Route path='/track' element={<Track />}/>
            <Route path='/follow' element={<Follow />}/> */}
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App;

