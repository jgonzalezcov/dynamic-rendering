import { useState } from 'react'
import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import Gallery from './components/Gallery.jsx'
import fighters from './data/fighters.js'
import avatars from './data/avatars.js'
import Search from './components/Search.jsx'
import Avatar from './components/Avatar.jsx'
import soundnew from './assets/audio/kombatelige.mp3'
import soundFind from './assets/audio/mortalkomba.mp3'
import soundFinished from './assets/audio/eleccion.mp3'
import soundselect from './assets/audio/fatalidad.mp3'
import Tower from './components/Tower.jsx'
const heroeImages = require.context('./assets/img', true)

function App() {
  const [view, setView] = useState('ini')
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [race, setRace] = useState('')
  const [src, setSrc] = useState('')
  const [listFighters, setListFighters] = useState(fighters)
  const audBt1 = new Audio(soundFind)
  const audBt2 = new Audio(soundnew)
  const audBt3 = new Audio(soundFinished)
  const audBt4 = new Audio(soundselect)

  const clean = () => {
    setRace('')
    setMail('')
    setSrc('')
  }

  const avatarFunction = (srcSelect) => {
    setSrc(srcSelect)
    setView('new')
  }
  const list = () =>
    listFighters
      .filter((y) => y.nombre.toUpperCase().includes(name.toUpperCase()))
      .map((e) => (
        <div key={e.id}>
          {console.log(name)}
          <Gallery
            srcs={heroeImages(e.srcs)}
            alt={e.alt}
            name={e.nombre}
            category={e.raza}
            email={e.correo}
          />
        </div>
      ))

  const viewFunctions = (status) => {
    setView(status)
    if (status === 'find') {
      audBt1.play()
      setName('')
    } else if (status === 'new') {
      audBt2.play()
      setName('')
    } else if (status === 'cancel') {
      audBt3.play()
      clean()
    } else if (status === 'ini') {
    } else if (status === 'finishedSearch') {
      audBt4.play()
      clean()
    } else if (status === 'finishedForm') {
      if (name === '' || mail === '' || race === '') {
        alert('Debes completar todos los campos')
        status = 'new'
        setView(status)
        return
      } else if (src === '') {
        alert('Debes seleccionar un Avatar')
        status = 'new'
        setView(status)
        return
      } else {
        clean()
      }
      setListFighters([
        ...listFighters,
        {
          id: Math.max(...listFighters.map((f) => f.id)) + 1,
          srcs: src,
          nombre: name,
          correo: mail,
          raza: race,
        },
      ])
      audBt4.play()
      clean()
    }
  }

  return (
    <div className="App">
      {console.log(view)}
      {console.log(name)}
      <Header viewFunctions={viewFunctions} />

      {view === 'new' || view === 'selectAvatar' ? (
        <Form
          name={name}
          setName={setName}
          mail={mail}
          setMail={setMail}
          race={race}
          setRace={setRace}
          viewFunctions={viewFunctions}
        />
      ) : (
        ''
      )}
      {view === 'selectAvatar' ? (
        <>
          <div className="card_avatar-container">
            {avatars.map((e) => (
              <Avatar
                key={e.id}
                avatarFunction={avatarFunction}
                srcs={heroeImages(e.srcs)}
                nameImg={e.srcs}
                alt={e.alt}
                name={e.nombre}
              />
            ))}
          </div>
        </>
      ) : (
        ''
      )}
      {view === 'ini' || view === 'finishedForm' || view === 'cancel' ? (
        <div className="tower-container">
          <div className="up-tower"></div>
          {listFighters

            .slice(
              listFighters.length - 5 > 0
                ? listFighters.length - 5
                : (listFighters.length - 5) * 5
            )
            .reverse()
            .map((e) => (
              <Tower
                key={e.id}
                avatarFunction={avatarFunction}
                srcs={heroeImages(e.srcs)}
                nameImg={e.srcs}
                alt={e.alt}
                name={e.nombre}
                mail={e.correo}
              />
            ))}
          <div className="base-tower"></div>
          <div className="blood-tower">
            <h3 className="text-tower">Ultimas inscripciones</h3>
          </div>
        </div>
      ) : (
        ''
      )}
      {view === 'find' ? (
        <Search
          name={name}
          setName={setName}
          mail={mail}
          setMail={setMail}
          race={race}
          setRace={setRace}
          viewFunctions={viewFunctions}
        />
      ) : (
        ''
      )}
      {view === 'finishedSearch' ? (
        <div className="card_container">{list()}</div>
      ) : (
        ''
      )}
    </div>
  )
}

export default App
