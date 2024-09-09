import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ userEmail, setIsLoggedIn }) => {
  const navigate = useNavigate(); // Aquí donde está en el contexto de Router

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/'); // Ir al home después de cerrar sesión
  };

  useEffect(() => {
    document.title = "Profile - Pizzería Mamma Mia";
  }, []);

  return (
    <div className='profile-container'>
      <h2>Perfil del Usuario</h2>
      <p>Email: {userEmail}</p>
      {/* Botón de cerrar sesión reutilizando la misma función */}
      <button className='btn btn-danger' onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;
