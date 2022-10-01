import { defaultTheme } from './../../../../styles/themes/default';
import styled from 'styled-components';

export interface RoundedIconStyleProps {
  backgroundColor: string;
}

export const IconLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.75rem;
`;

export const RoundedIconContainer = styled.div<RoundedIconStyleProps>`
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.backgroundColor};
`;

export const Label = styled.text`
  color: ${defaultTheme['base-text']};
  font-size: 1rem;
  line-height: 130%;
`;
