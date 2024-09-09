import React, { useState, useEffect } from 'react';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header'; 
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart, cart, updateQuantity } = useCart(); // Usar el contexto para manejar el carrito
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home - Pizzería Mamma Mia";
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/pizzas')
      .then(response => response.json())
      .then(data => setPizzas(data))
      .catch(error => console.error('Error al obtener las pizzas:', error));
  }, []);

  const handleViewMore = (pizza) => {
    navigate(`/pizza/${pizza.id}`);
  };

  return (
    <div className='home-container'>
      <Header headerTitle="¡Bienvenido a Pizzería Mamma Mia!" headerSubtitle="Las mejores pizzas de la ciudad" />
      
      <div className='card-container'>
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            imagen={pizza.img}
            quantity={cart.find(item => item.id === pizza.id)?.quantity || 0}
            onViewMore={() => handleViewMore(pizza)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;