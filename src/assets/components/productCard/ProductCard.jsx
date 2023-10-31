import React from 'react'
import './ProductCard.css';
import {BsFillCartPlusFill} from 'react-icons/bs'
import { propTypes } from 'react-bootstrap/esm/Image';


function ProductCard({ data }) {

    const {title, price} = data;

    return(
        <section className='product-card'>

            <div className='card__infos'>
                <h2 className='card__price'>hola</h2>
                <h2 className='card__title'>60</h2>
            </div>

            <button type='button' className='button__add-cart'><BsFillCartPlusFill /></button>
        </section>
    );
}

export default ProductCard;

