import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { CounterContainer } from './styles';

export function Counter() {
  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <CounterContainer>
      <button onClick={handleDecrement}>
        <Minus size={16} color='#c3a7a7' weight='fill' style={{ margin: 0 }} />
      </button>
      <p>{quantity}</p>
      <button onClick={handleIncrement}>
        <Plus size={16} color='#c3a7a7' weight='fill' />
      </button>
    </CounterContainer>
  );
}
