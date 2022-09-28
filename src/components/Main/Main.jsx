import React from 'react'
import { useBasket } from '../../contexts/BasketContex';
import Product from '../Product/Product';

function Main() {
  const { products, onAdd } = useBasket();
  return (
    <main className='main'>
      <h2>Products</h2>
      <div className='row'>
        {products.map((products) => (
          <Product key={products.id} product={products} onAdd={onAdd} ></Product>
        ))}
      </div>
    </main>
  )
}

export default Main
