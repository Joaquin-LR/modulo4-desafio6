import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Pizza() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then(response => response.json())
      .then(data => {
        setPizza(data);
        document.title = `Pizza ${data.name} - Pizzería Mamma Mia`;
      })
      .catch(error => {
        console.error('Error al obtener la pizza:', error);
        setPizza(null);
        document.title = 'Pizza no encontrada - Pizzería Mamma Mia';
      });
  }, [id]);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <div>
      <Button variant="secondary" onClick={() => window.history.back()}>Volver</Button>
      <div className='pizza-details-container'>
        <Card style={{ width: '30rem', marginTop: '20px' }}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title><h4>Pizza {pizza.name}</h4></Card.Title>
            <p>{pizza.desc}</p>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <div className='ingredientes'>
              <ListGroup.Item>
                <p className='ingredientes-titulo'>Ingredientes:</p>
                <ul className='ingredientes-texto'>
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index}>🍕 {ingredient}</li>
                  ))}
                </ul>
              </ListGroup.Item>
            </div>
            <div className='precio-details'>
              <ListGroup.Item>
                <p>Precio: {pizza.price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
              </ListGroup.Item>
            </div>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default Pizza;