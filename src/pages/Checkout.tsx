import { FC } from 'react';
import { Cart } from '../domain/card';

const Checkout: FC<Cart> = ({ list }) => {
  return (
    <div className="bg-light text-black p-3">
      <h3>Detalle de compra</h3>
      <h6>Cantidad de productos: {list.length}</h6>
      <ul className="list-group mt-3">
        {list.map(({ id, name, img }, index) => {
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
