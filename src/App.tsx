import { BrowserRouter } from 'react-router-dom';
import { ShopContextProvider } from './contexts';
import { Router } from './routes/Router';
import './styles/global';
export function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Router />
      </ShopContextProvider>
    </BrowserRouter>
  );
}
