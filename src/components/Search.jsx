import React from 'react'

const Serach = (props) => {
  return (
    <div className="Border-menu">
      <div className="find-person">
        <h3 className="title-new-fighter">Buscar Luchador</h3>
        <h4 className="new-name">Nombre </h4>
        <input
          value={props.name}
          type="text"
          className="name-input new-input"
          name="name-input"
          onChange={(e) => props.setName(e.target.value)}
        />

        <button
          className="button-acept"
          onClick={() => props.viewFunctions('finishedSearch')}
        >
          {props.name === '' ? 'Mostrar a todos' : 'Buscar'}
        </button>
        <button
          className="button-cancel"
          onClick={() => props.viewFunctions('cancel')}
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}

export default Serach
