import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { defaultTheme } from '../../../../styles/themes/default';
import { RoundedIcon } from '../roundedIcon';

export function Skills() {
  return (
    <section>
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
    </section>
  );
}
