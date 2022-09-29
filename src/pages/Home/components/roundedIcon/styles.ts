import { defaultTheme } from "./../../../../styles/themes/default";
import styled from "styled-components";

export interface RoundedIconStyleProps {
  backgroundColor: string;
}

export const RoundedIconContainer = styled.div<RoundedIconStyleProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.backgroundColor};
`;
