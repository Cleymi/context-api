import { FC } from 'react';
import { useAppState } from '../store/app-context';

const Checkout: FC = () => {
  const { cart } = useAppState();

  return (
    <div className="bg-light text-black p-3">
      <h3>Detalle de compra</h3>
      <h6>Cantidad de productos: {cart.length}</h6>
      <ul className="list-group mt-3">
        {cart.map(({ id, name, img }, index) => {
          return (
            <li className="list-group-item" key={id + index}>
              <img className="me-2" width={150} src={img} /> {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checkout;
