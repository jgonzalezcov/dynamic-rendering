import React from 'react'
const Edit = (props) => {
  return (
    <div className="container-edit">
      <div className="Border-menu-edit">
        <div className="new-person">
          <h3 className="title-new-fighter">Edición de Luchador</h3>
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
            onClick={() => props.viewFunctions('selectAvatarEdit')}
          >
            Selecciona tu avatar
          </button>
          <button
            className="button-acept"
            onClick={() => props.viewFunctions('finishedFormEdit')}
          >
            Modificar
          </button>
          <button
            className="button-cancel"
            onClick={() => props.viewFunctions('visit')}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Edit
