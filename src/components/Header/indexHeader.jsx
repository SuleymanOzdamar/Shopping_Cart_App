import { useBasket } from '../../contexts/BasketContex';
import Header from '../Header/Header';


function IndexHeader() {
  const { cartItems, onAdd } = useBasket();
  
  return (
    <div>
      <Header countCartItems={cartItems.length} onAdd={onAdd} ></Header>
    </div>
  )
}

export default IndexHeader
