import { FC, useState } from 'react';
import Header from './shared/Header';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import { Product } from './domain/product';

const App: FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <div>
      <Header list={cart} />
      <main className="m-4">
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="checkout" element={<Checkout list={cart} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
