import React, {useState, useEffect} from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../productCard/ProductCard';


function Products() {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetchProducts('games').then((response) => {
            setProducts(response);
            console.log(products);
        })

    }, []);

    console.log(products)

    return(
        <section className='products-container'>
            <ProductCard />
        </section>
    );
}

export default Products;