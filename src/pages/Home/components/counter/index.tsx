import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { defaultTheme } from '../../../../styles/themes/default';
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
        <Minus size={16} color={defaultTheme['purple-dark']} weight='fill' />
      </button>
      <p>{quantity}</p>
      <button onClick={handleIncrement}>
        <Plus size={16} color={defaultTheme['purple-dark']} weight='fill' />
      </button>
    </CounterContainer>
  );
}
