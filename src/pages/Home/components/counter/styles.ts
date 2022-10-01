import { defaultTheme } from './../../../../styles/themes/default';
import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 4.5rem;
  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${defaultTheme['base-button']};

  button {
    background-color: transparent;
    border: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 3px;

    cursor: pointer;
  }

  p {
    font-size: 1rem;
    line-height: 130%;
    color: ${defaultTheme['base-title']};
  }
`;
