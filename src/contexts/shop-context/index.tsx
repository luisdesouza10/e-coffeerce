import { createContext, useEffect, useState } from 'react';
import { showToast } from '../../libs';

interface CartItem {
  name: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
  quantity: number;
}

interface ShopContextData {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

interface ShopContextProps {
  children: React.ReactNode;
}

export const ShopContext = createContext({} as ShopContextData);

export function ShopContextProvider({ children }: ShopContextProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    setCart([...cart, item]);

    showToast(`${item.name} adicionado no carrinho!`, 'success');
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
