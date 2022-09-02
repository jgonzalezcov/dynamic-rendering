import React from 'react'

const EditAvatar = (props) => {
  return (
    <div className="card-avatar">
      <img
        className="img-card-avatar"
        onClick={() => props.avatarFunctionEdit(props.nameImg)}
        src={props.srcs}
        alt={props.alt}
      />
      <h4>{props.name}</h4>
    </div>
  )
}

export default EditAvatar
