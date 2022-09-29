import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { LOGO } from '../../assets/images';
import { defaultTheme } from '../../styles/themes/default';
import { Button } from '../Button';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={LOGO} />
      </NavLink>

      <div>
        <Button backgroundColor={defaultTheme['purple-light']}>
          <MapPin size={18} weight='fill' color={defaultTheme['purple']} />
          <h1>Brusque, SC</h1>
        </Button>

        <NavLink to={'/Checkout'}>
          <Button backgroundColor={defaultTheme['yellow-light']}>
            <ShoppingCart
              size={18}
              weight='fill'
              color={defaultTheme['yellow-dark']}
            />
          </Button>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
