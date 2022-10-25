import { ButtonContainer } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  children?: React.ReactNode;
}

export function Button({
  backgroundColor,
  children,
  hoverBackgroundColor,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
}
