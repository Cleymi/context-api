import { FC } from 'react';
import Header from './shared/Header';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';

const App: FC = () => {
  return (
    <div>
      <Header />
      <main className="m-4">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
