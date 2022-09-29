import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    gap: 0.75rem;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme.purple};
  }

  @media (max-width: 768px) {
    padding: 1rem 5rem;
  }

  @media (max-width: 425px) {
    padding: 0.5rem 2.5rem;
  }
`;
