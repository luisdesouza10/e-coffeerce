import styled from 'styled-components';

interface ButtonStyleProps {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

export const ButtonContainer = styled.button<ButtonStyleProps>`
  background: ${(props: ButtonStyleProps) =>
    props.backgroundColor || 'transparent'};
  border: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 0.5rem;

  cursor: pointer;

  min-width: 22px;
  min-height: 22px;

  :hover {
    background: ${(props: ButtonStyleProps) => props.hoverBackgroundColor};

    opacity: ${(props: ButtonStyleProps) =>
      props.hoverBackgroundColor ? 1 : 0.7};
  }
`;
