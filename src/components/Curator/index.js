import React from 'react'
import './style.scss'
import curatorPhoto from '../../images/taisa-braga.jpg'

function CuratorItem() {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="Foto curadora Taisa Braga" />
      </div>
      <div className="curator__details">
        <div>
          <h3>Taisa Braga</h3>
          <h6>Curadoria</h6>
        </div>
        <p>
          Estutande de tecnologia a pouco tempo, mas bastante animada e
          empolgada com tudo que vem aprendendo e desenvolvendo em alguns meses
          de estudos.
        </p>
      </div>
    </div>
  )
}

export default CuratorItem
