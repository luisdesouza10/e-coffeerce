import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '../layouts';
import { Checkout, Home, Success } from '../pages';
export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Success' element={<Success />} />
      </Route>
    </Routes>
  );
}
