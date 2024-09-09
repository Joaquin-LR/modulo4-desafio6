import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useCart } from '../context/CartContext';

function CardPizza({ id, name, price, ingredients, imagen, quantity, onViewMore }) {
  const { updateQuantity, addToCart } = useCart(); // Contexto para actualizar carrito

  // Función para "+""
  const handleIncrease = () => {
    if (quantity === 0) {
      // Si cantidad = 0, agregar al carrito
      addToCart({ id, name, price, ingredients, img: imagen });
    } else {
      // Si ya existe en el carrito, solo aumentar la cantidad
      updateQuantity(id, quantity + 1);
    }
  };

  // Función para "-""
  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(id, quantity - 1);
    }
  };

  return (
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title><h4>Pizza {name}</h4></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <div className='ingredientes'>
          <ListGroup.Item>
            <p className='ingredientes-titulo'>Ingredientes:</p>
            <ul className='ingredientes-texto'>
              {ingredients.map((ingredient, index) => (
                <li key={index}>🍕 {ingredient}</li>
              ))}
            </ul>
          </ListGroup.Item>
        </div>
        <div className='precio'>
          <ListGroup.Item>
            <p>Precio: {price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
            <Button className='ver-mas' variant="dark" onClick={onViewMore}>
              Ver Más
            </Button>
            <div className='cantidad-control'>
              {/* Funciones - y + */}
              <Button variant="outline-dark" onClick={handleDecrease} disabled={quantity === 0}>–</Button>
              <span className='quantity-display'>{quantity}</span>
              <Button variant="outline-dark" onClick={handleIncrease}>+</Button>
            </div>
          </ListGroup.Item>
        </div>
      </ListGroup>
    </Card>
  );
}

export default CardPizza;
