import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { INTRODUCTION_IMAGE } from '../../assets/images';
import { defaultTheme } from '../../styles/themes/default';
import { RoundedIcon } from './components';
import { IntroductionContainer, IntroductionImage } from './styles';

export function Home() {
  return (
    <IntroductionContainer>
      <RoundedIcon
        backgroundColor={defaultTheme['yellow-dark']}
        icon={
          <ShoppingCart size={16} color={defaultTheme.white} weight='fill' />
        }
        label='Compras simples e segura'
      />

      <RoundedIcon
        backgroundColor={defaultTheme.yellow}
        icon={<Timer size={16} color={defaultTheme.white} weight='fill' />}
        label='Entrega rápida e rastreada'
      />

      <RoundedIcon
        backgroundColor={defaultTheme['base-text']}
        icon={<Package size={16} weight='fill' color={defaultTheme.white} />}
        label='Embalagem mantém o café intacto'
      />

      <RoundedIcon
        backgroundColor={defaultTheme.purple}
        icon={<Coffee size={16} weight='fill' color={defaultTheme.white} />}
        label='O café chega fresquinho até você'
      />

      <IntroductionImage src={INTRODUCTION_IMAGE} />
    </IntroductionContainer>
  );
}
