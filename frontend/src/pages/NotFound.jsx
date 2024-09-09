import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Página no encontrada";
  }, []);

  return (
    <div className='not-found-container'>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className='btn btn-primary'>Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
