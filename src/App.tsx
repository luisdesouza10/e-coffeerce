import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import './styles/global';
export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
