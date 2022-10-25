import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LOGO } from '../../assets/images';
import { ShopContext } from '../../contexts';
import { defaultTheme } from '../../styles/themes/default';
import { Button } from '../Button';
import { HeaderContainer, RelativeContainerCart } from './styles';

export function Header() {
  const { cart } = useContext(ShopContext);
  const cartSize =
    cart.length && cart.length > 0 && cart.length < 10
      ? cart.length
      : cart.length > 0 && '9+';

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
            <RelativeContainerCart>
              <ShoppingCart
                size={18}
                weight='fill'
                color={defaultTheme['yellow-dark']}
              />
              {cartSize && (
                <div className='cart-quantity'>
                  <p>{cartSize}</p>
                </div>
              )}
            </RelativeContainerCart>
          </Button>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
