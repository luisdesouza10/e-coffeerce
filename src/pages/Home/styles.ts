import { defaultTheme } from './../../styles/themes/default';
import styled from 'styled-components';

export const IntroductionContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const IntroductionInformation = styled.div`
  h1 {
    color: ${defaultTheme['base-title']};
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-size: 3rem;
    margin: 0;
  }
  h2 {
    color: ${defaultTheme['base-subtitle']};
    line-height: 130%;
    font-size: 1.25rem;
    margin-top: 1rem;
    font-weight: 400;
  }
  section {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 1.25rem;

    margin-top: 4.125rem;
  }
`;

export const IntroductionImage = styled.img`
  width: 29.75rem;
  height: 22.5rem;

  margin-left: auto;
`;

export const ProductsContainer = styled.section`
  margin: 3.375rem 0;

  h3 {
    font-size: 2rem;
    line-height: 130%;
    font-family: 'Baloo 2', cursive;
    color: ${defaultTheme['base-subtitle']};
  }
`;

export const ProductsListContainer = styled.div`
  padding: 3.375rem 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
`;
