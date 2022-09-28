import React from 'react'


function Product(props) {
    const { product, onAdd } = props;
  return (
    <div className='product'>
      <img className='small' src={product.Image} alt={product.name} />
      <h3 className='fnt'>{product.name}</h3>
      <div>${product.price}</div>
      <div className='btn'>
        <button onClick={() => onAdd(product)} >Add to Cart</button>
      </div>
    </div>
  )
}

export default Product
