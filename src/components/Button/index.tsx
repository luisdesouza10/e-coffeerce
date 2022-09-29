import { ButtonContainer } from './styles';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  children?: React.ReactNode;
}

export function Button({
  backgroundColor,
  children,
  hoverBackgroundColor,
}: ButtonProps) {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      {children}
    </ButtonContainer>
  );
}
