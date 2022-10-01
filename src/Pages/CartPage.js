import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Components/Layout'
function CartPage() {

  const {cartItems}=useSelector((state)=>state.cartReducer);
  const dispatch=useDispatch() 
  return (
    <Layout>
      <h1>CartPage</h1>
    </Layout>
  )
}

export default CartPage
