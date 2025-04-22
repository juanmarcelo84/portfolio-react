import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/Main.css"


const Main = (props) => {
  return (
    <div>
      <Card className='card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.Alumno.imagen} />
  <Card.Body>
    <Card.Title>
      {props.Alumno.nombre} {props.Alumno.apellido}
    </Card.Title>
    <Card.Text>
      Soy estudiante de la carrera Tecnicatura en Programación de la UTN-FRT, me especializo en lenguajes como{" "}
      {props.Alumno.lenguajes.map((lenguaje, index) => (
        <span key={index}>{lenguaje}</span>
      ))}
    </Card.Text>
    <p className="mascota-info">
      Tengo una mascota que se llama {props.Alumno.mascotas.nombre}, su raza es {props.Alumno.mascotas.raza} y tiene {props.Alumno.mascotas.edad} años.
    </p>
  </Card.Body>
</Card>
    </div>
  )
}

export default Main
