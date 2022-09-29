import { RoundedIconContainer } from "./styles";

export interface RoundedIconProps {
  backgroundColor: string;
  icon: React.ReactNode;
}

export function RoundedIcon({ backgroundColor, icon }: RoundedIconProps) {
  return (
    <RoundedIconContainer backgroundColor={backgroundColor}>
      {icon}
    </RoundedIconContainer>
  );
}
