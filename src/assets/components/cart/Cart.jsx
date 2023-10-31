import React, { useContext } from 'react'
import './Cart.css'
import CartItem from '../cartItem/CartItem';


function Cart() {

    {/* const {cartItems} = useContext(AppContext) */}

    return(
        <section className='cart'>
            <div className='cart-items'>
                {/* {cartItems.map((cartItem)=> <CartItem key={CartItem.id} data={cartItem}/> )} */}

                <CartItem data ={{thumbnail: '', title: '', price: '123'}} />
            </div>

            <div className='cart-resume'>Resumen de la compra</div>
        </section>
    );
}

export default Cart;