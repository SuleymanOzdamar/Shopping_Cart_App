
import { useBasket } from '../../contexts/BasketContex';
import Basket from '../Basket/Basket'


function IndexBasket() {

  const { onAdd, onRemove, cartItems } = useBasket();

  return (
    <div>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
    </div>
  )
}

export default IndexBasket