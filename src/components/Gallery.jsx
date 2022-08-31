import React from 'react'

const Gallery = (props) => {
  return (
    <div className="card">
      <img className="img-card" src={props.srcs} alt={props.alt} />
      <h3>Nombre: {props.name}</h3>
      <p className="race">Raza: {props.category}</p>
      <p className="email">E-mail: {props.email}</p>
    </div>
  )
}
export default Gallery
