import { ShoppingCart } from 'phosphor-react';
import { CHOCOLATE_QUENTE } from '../../../../assets/images';
import { Button } from '../../../../components';
import { defaultTheme } from '../../../../styles/themes/default';
import { Counter } from '../counter';
import {
  CardContainer,
  CardFooter,
  SubTitleText,
  TagText,
  TitleText,
} from './styles';

export function CatalogCard() {
  return (
    <CardContainer>
      <img src={CHOCOLATE_QUENTE} />
      <TagText>TRADICIONAL</TagText>
      <TitleText>Expresso Tradicional</TitleText>
      <SubTitleText>
        O tradicional café feito com água quente e grãos moídos
      </SubTitleText>
      <CardFooter>
        <p>
          R$ <span>9,99</span>
        </p>

        <Counter />

        <Button backgroundColor={defaultTheme['purple-dark']}>
          <ShoppingCart size={18} weight='fill' color={defaultTheme.white} />
        </Button>
      </CardFooter>
    </CardContainer>
  );
}
