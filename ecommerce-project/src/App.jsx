import {Routes,Route} from 'react-router';
import './App.css'
import { useState,useEffect} from 'react'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import axios from 'axios'
function App() {
 const [cart, setCart] = useState([]);

 const fetchAppData = async() =>{
  const response = await axios.get('/api/cart-items?expand=product');
  setCart(response.data)
 }
  useEffect(()=>{
  fetchAppData();
  },[])
  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />}></Route>
      <Route path="/checkout" element={<CheckoutPage cart={cart}/>}/>
      <Route path="/orders" element={<OrdersPage cart={cart}/>}/>
      <Route path="/tracking" element={<TrackingPage/>}/>
    </Routes>
  )}

export default App
