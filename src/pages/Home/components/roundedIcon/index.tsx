import { IconLabelContainer, Label, RoundedIconContainer } from './styles';

export interface RoundedIconProps {
  backgroundColor: string;
  icon: React.ReactNode;
  label?: string;
}

export function RoundedIcon({
  backgroundColor,
  icon,
  label,
}: RoundedIconProps) {
  return (
    <IconLabelContainer>
      <RoundedIconContainer backgroundColor={backgroundColor}>
        {icon}
      </RoundedIconContainer>
      {label && <Label>{label}</Label>}
    </IconLabelContainer>
  );
}
