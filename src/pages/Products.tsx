import { Dispatch, FC, SetStateAction } from 'react';
import { products } from '../mocks/product.mock';
import { Product } from '../domain/product';

interface ProductProps {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
}

const Products: FC<ProductProps> = ({ cart, setCart }) => {
  const handleAddProduct = (product: Product) => {
    setCart([...cart, product]);
  };

  const handleRemoveProduct = (product: Product) => {
    const productExists = cart.some((item) => item.id === product.id);
    if (productExists) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    }
  };

  return (
    <div className="row">
      {products.map((product) => {
        const { id, name, description, img } = product;
        return (
          <div className="col-md-3 mb-4" key={id}>
            <div className="card">
              <img src={img} alt="Producto 1" className="card-img-top" />
              <div className="card-body" style={{ minHeight: 100 }}>
                <h5 className="card-title">{name}</h5>
                <h6>{description}</h6>
              </div>
              <div
                className="card-footer"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <button
                  className="btn btn-success"
                  onClick={() => handleAddProduct(product)}
                >
                  <i className="fa-solid fa-cart-plus" />
                  <span className="ms-2">Agregar</span>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveProduct(product)}
                >
                  <i className="fa-solid fa-cart-shopping" />
                  <span className="ms-2">Remover</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
