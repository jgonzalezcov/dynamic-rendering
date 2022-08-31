import React from 'react'
const Tower = (props) => {
  return (
    <div className="card-tower">
      <img className="img-card-tower" src={props.srcs} alt={props.alt} />
      <h4>{props.name}</h4>
      <h4>{props.mail}</h4>
    </div>
  )
}

export default Tower
