import React from 'react'

const Avatar = (props) => {
  return (
    <div className="card-avatar">
      <img
        className="img-card-avatar"
        onClick={() => props.avatarFunction(props.nameImg)}
        src={props.srcs}
        alt={props.alt}
      />
      <h4>{props.name}</h4>
    </div>
  )
}

export default Avatar
