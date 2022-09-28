
import { useBasket } from '../../contexts/BasketContex';
import Main from '../Main/Main';

function IndexMain() {
  const { onAdd, products } = useBasket();

  return (
    <div>
      <Main onAdd={onAdd} products={products}></Main>
    </div>
  )
}

export default IndexMain
