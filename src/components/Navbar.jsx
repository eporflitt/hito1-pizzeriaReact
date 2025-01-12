import React from 'react';

const Navbar = () => {
  const total = 25000; // Total fijo de ejemplo
  const token = false; // Simulación de usuario no logueado

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Botón Home siempre visible */}
            <li className="nav-item">
              <button className="btn btn-link text-white">🍕 Home</button>
            </li>

            {/* Botones condicionales según el token */}
            <li className="nav-item">
              {token ? (
                <>
                  <button className="btn btn-link text-white">🔓 Profile</button>
                  <button className="btn btn-link text-white">🔒 Logout</button>
                </>
              ) : (
                <>
                  <button className="btn btn-link text-white">🔐 Login</button>
                  <button className="btn btn-link text-white">🔐 Register</button>
                </>
              )}
            </li>
          </ul>
          {/* Botón Total siempre visible */}
          <button className="btn btn-outline-info">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
