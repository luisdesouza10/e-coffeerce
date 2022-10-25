import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';
import { defaultTheme } from '../../../../styles/themes/default';
import { CounterContainer } from './styles';

interface CounterProps {
  quantity: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export function Counter({
  quantity,
  handleIncrement,
  handleDecrement,
}: CounterProps) {
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
