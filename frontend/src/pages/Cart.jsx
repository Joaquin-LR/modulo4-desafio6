import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, updateQuantity, removeFromCart, calculateTotal } = useCart();

  useEffect(() => {
    document.title = "Carrito - Pizzería Mamma Mia";
  }, []);

  return (
    <div className='carrito-container'>
      <h2>Tu Carrito de Compras</h2>
      {cart.length > 0 ? (
        cart.map((pizza) => (
          <div className='card-container-2' key={pizza.id}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img variant="top" src={pizza.img} alt={`Imagen de Pizza ${pizza.name}`} className="cart-image" />
              <Card.Body>
                <Card.Title>Pizza {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</Card.Title>
                <p>Precio: {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                <ListGroup>
                  <ListGroup.Item>
                    <div className='cantidad-control'>
                      <Button variant="outline-dark" onClick={() => updateQuantity(pizza.id, pizza.quantity - 1)} disabled={pizza.quantity === 0}>–</Button>
                      <span className='quantity-display'>{pizza.quantity}</span>
                      <Button variant="outline-dark" onClick={() => updateQuantity(pizza.id, pizza.quantity + 1)}>+</Button>
                    </div>
                    <Button variant="danger" onClick={() => removeFromCart(pizza.id)}>Eliminar</Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <p>No hay pizzas en tu carrito.</p>
      )}
      <h3>Total: {calculateTotal().toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h3>
      <Button variant="success">Pagar</Button>
    </div>
  );
}

export default Cart;