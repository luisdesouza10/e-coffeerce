import { ShoppingCart } from 'phosphor-react';
import { Button } from '../../../../components';
import { defaultTheme } from '../../../../styles/themes/default';
import { formatPrice } from '../../../../utils';
import { Counter } from '../counter';
import {
  CardContainer,
  CardFooter,
  SubTitleText,
  TagText,
  TitleText,
} from './styles';

export interface CatalogCardProps {
  name: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export function CatalogCard({
  name,
  description,
  tags,
  price,
  image,
}: CatalogCardProps) {
  return (
    <CardContainer>
      <img src={image} />
      <div>
        {tags.map(tag => (
          <TagText>{tag}</TagText>
        ))}
      </div>
      <TitleText>{name}</TitleText>
      <SubTitleText>{description}</SubTitleText>
      <CardFooter>
        <p>
          R$ <span>{formatPrice(price)}</span>
        </p>

        <Counter />

        <Button backgroundColor={defaultTheme['purple-dark']}>
          <ShoppingCart size={18} weight='fill' color={defaultTheme.white} />
        </Button>
      </CardFooter>
    </CardContainer>
  );
}
