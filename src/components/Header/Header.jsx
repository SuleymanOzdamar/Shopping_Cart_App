import React from 'react'
import {Link} from "react-router-dom";


function Header(props) {
  const { countCartItems } = props;
  return (
    <header className='row block center'>
       <div>

          <Link to={"/"}>
            <h1 className='header'>Shopping Cart App</h1>
          </Link>
  
       </div>

       <div>

          <Link to={"/cart"}> <h2>  Cart {''} {countCartItems ? (
            <button className='badge'>{countCartItems}</button>
          ): ('')
          }</h2> </Link>

       </div>
    </header>
  )
}

export default Header
