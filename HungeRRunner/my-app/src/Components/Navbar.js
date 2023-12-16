import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions';
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";


const orderstate= useSelector((state)=> state.placeOrderReducer)
const {loading , error, success} = orderstate


export default function Checkout({subtotal}) {

  const dispatch = useDispatch()
    function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token,subtotal))

    }


  return (
    <div>


    {loading && (<Loading/>)}
    {error && (<Error error= 'Something went wrong'/>)}
    {success && (<Success success= 'Your Order Placed Successfully'/>)}
        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        token={tokenHandler}
        stripeKey='pk_test_51OO38SDoouD4K5PZvozBiBiZoMTdQc7DcrDEskkZPPSwb5F6OuB3m6tTP8SQZFlnTJeDp9fhFxkxEzCbP5NqfqZ6009tF0uVxZ'
        currency='INR'
        
        >

            <button className='btn'>Pay Now</button>
        </StripeCheckout>
      
    </div>
  )
}
