import { ButtonContainer } from "./styles";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  children?: React.ReactNode;
}

export function Button({ backgroundColor, children }: ButtonProps) {
  return (
    <ButtonContainer backgroundColor={backgroundColor}>
      {children}
    </ButtonContainer>
  );
}
