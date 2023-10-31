import React from 'react'
import {BsCartDashFill} from 'react-icons/bs'
import './CartItem.css';

function CartItem({ data }) {

    const { thumbnail, title, price } = data;

    return(
        <section className='cart-item'>
            <img 
                src={thumbnail}
                alt='imagen del producto'
                className='imagen-item-carrito'
            />

            <div className='cart-item-content'>
                <h3 className='cart-item-title'>{title}</h3>
                <h3 className='cart-item-price'>{price}</h3>
                <button type='button' className='button__remove-item'>
                    <BsCartDashFill/>
                </button>
            </div>
        </section>
    ); 
}

export default CartItem;