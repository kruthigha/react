import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import ItemCard from './ItemCard'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  const store = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  console.log( 'store from cart', store)
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div>
        <h1 className='text-xl text-center font-bold m-4 p-4 text-gray-600'>Cart</h1>
        <button className='bg-black text-white rounded-lg p-2 m-2 ml-188 text-center ' onClick={handleClearCart}> Clear Cart</button>
        {store.map((item,index)=>
            <ItemCard key={index} item={item} dummy={"From Cart"} className="w-6/12" />
        )}
    </div>
  )
}

export default Cart
