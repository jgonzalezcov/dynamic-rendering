import React from 'react'

const Card = (props) => {
  return (
    <div className="container-card-view">
      <div className="card-view-edit">
        <img className="img-card-view" src={props.srcs} alt={props.alt} />
        <h3>Nombre: {props.name}</h3>
        <p className="race">Raza: {props.category}</p>
        <p className="email">E-mail: {props.email}</p>
        <div className="container-button-view">
          <button
            className="formIn view-button"
            onClick={() => props.actionCard('edit')}
          >
            Editar
          </button>
          <button
            className="formIn view-button"
            onClick={() => props.actionCard('delete')}
          >
            Eliminar
          </button>
          <button
            className="view-cancel"
            onClick={() => props.actionCard('cancel-view')}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
