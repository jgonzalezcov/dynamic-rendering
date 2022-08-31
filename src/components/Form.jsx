import React from 'react'
const Form = (props) => {
  return (
    <div className="Border-menu">
      <div className="new-person">
        <h3 className="title-new-fighter">Inscripción de Luchador</h3>
        <h4 className="new-name">Nombre </h4>
        <input
          value={props.name}
          type="text"
          className="name-input new-input"
          name="name-input"
          onChange={(e) => props.setName(e.target.value)}
        />
        <h4 className="new-raza">Raza</h4>
        <input
          value={props.race}
          type="text"
          className="race-input  new-input"
          name="race-input"
          onChange={(e) => props.setRace(e.target.value)}
        />
        <h4 className="new-mail">Correo</h4>
        <input
          value={props.mail}
          type="text"
          className="mail-input  new-input"
          name="mail-input"
          onChange={(e) => props.setMail(e.target.value)}
        />
        <button
          className="button-avatar"
          onClick={() => props.viewFunctions('selectAvatar')}
        >
          Selecciona tu avatar
        </button>
        <button
          className="button-acept"
          onClick={() => props.viewFunctions('finishedForm')}
        >
          Guardar
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

export default Form
