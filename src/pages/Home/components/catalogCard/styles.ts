import { defaultTheme } from './../../../../styles/themes/default';
import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${defaultTheme['base-card']};

  border-radius: 6px 36px 6px 36px;

  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    gap: 0.25rem;
  }
`;

export const TagText = styled.p`
  padding: 0.25rem 0.5rem;

  background-color: ${defaultTheme['yellow-light']};
  border-radius: 100px;

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  color: ${defaultTheme['yellow-dark']};
  text-transform: uppercase;

  margin-top: 0.75rem;
`;

export const TitleText = styled.p`
  line-height: 130%;
  font-size: 1.25rem;
  font-family: 'Baloo 2', cursive;
  color: ${defaultTheme['base-subtitle']};
  margin-top: 1rem;
`;

export const SubTitleText = styled.p`
  line-height: 130%;
  font-size: 0.875rem;
  color: ${defaultTheme['base-label']};
  margin-top: 1rem;
  text-align: center;
`;

export const CardFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;

  gap: 0.5rem;

  p {
    line-height: 130%;
    font-size: 0.875rem;
    color: ${defaultTheme['base-text']};

    span {
      line-height: 130%;
      font-size: 1.5rem;
      font-family: 'Baloo 2', cursive;
      color: ${defaultTheme['base-text']};
    }
  }
`;
