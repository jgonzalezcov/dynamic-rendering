import React from 'react'
import logo from '../assets/img/mk.jpg'
import blood from '../assets/img/200w.gif'

const Header = (props) => {
  return (
    <header>
      <img
        className="logo-header"
        src={logo}
        alt="Logo Mortal Kombat"
        onClick={() => props.viewFunctions('ini')}
      />
      <div className="container-search">
        <div className="container-button">
          <button
            className="formIn header-button"
            onClick={() => props.viewFunctions('new')}
          >
            Nuevo
          </button>
          <div className="container-boold">
            <img className="blood" src={blood} alt="" />
            <img className="blood" src={blood} alt="" />
          </div>
        </div>
        <div className="container-button">
          <button
            className="listView  header-button"
            onClick={() => props.viewFunctions('find')}
          >
            Buscar
          </button>
          <div className="container-boold">
            <img className="blood" src={blood} alt="" />
            <img className="blood" src={blood} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
