import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { Button } from '../../../../components';
import { ShopContext } from '../../../../contexts';
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
  const { addToCart } = useContext(ShopContext);

  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function resetQuantity() {
    setQuantity(1);
  }

  function handleAddToCart() {
    addToCart({
      name,
      description,
      tags,
      price,
      image,
      quantity,
    });
    resetQuantity();
  }

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

        <Counter
          quantity={quantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />

        <Button
          backgroundColor={defaultTheme['purple-dark']}
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} weight='fill' color={defaultTheme.white} />
        </Button>
      </CardFooter>
    </CardContainer>
  );
}
