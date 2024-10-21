import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cart } from '../domain/card';

const Header: FC<Cart> = ({ list }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <b>Listado de productos</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0" />
          <div className="d-flex">
            <button className="btn btn-success" onClick={() => navigate('/checkout')}>
              <i className="fa-solid fa-cart-shopping" />
              <span className="ms-2">{list.length}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
