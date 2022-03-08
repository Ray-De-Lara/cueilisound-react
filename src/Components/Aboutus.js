import React, { Component } from 'react'
import Gabriel from '../media/Gabriel-Ramirez.png'
import Ruben from '../media/Ruben-Ramirez.png'
import Raymundo from '../media/Ray-De-Lara.jpg'
import Rocio from '../media/Rocio-Heredia.jpeg'


export default class Aboutus extends Component {

  personas = [
    {
      nombre: "Gabriel Ramirez",
      titulo: "titulo",
      picture: Gabriel,
      estudios: "Ing. Mecatronico",
      correo: "correo@gmail.com",
      displaygithub: "none",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      nombre: "Ruben Ramirez",
      titulo: "titulo",
      picture: Ruben,
      estudios: "Ing. Mecatronico",
      correo: "correo@gmail.com",
      displaygithub: "none",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      nombre: "Rocio Heredia",
      titulo: "titulo",
      picture: Rocio,
      estudios: "Ing. Industrial",
      correo: "correo@gmail.com",
      displaygithub: "none",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      nombre: "Ray De Lara",
      titulo: "titulo",
      picture: Raymundo,
      estudios: "Ing. Mecatronico",
      correo: "raydelara99@gmail.com",
      linkedin: "https://www.linkedin.com/in/ray-de-lara/",
      github: "https://github.com/Ray-De-Lara",
      twitter: "https://twitter.com/Raydelara099",
      displaygithub: "inline-flex",
      displayfacebook: "none",
      description: "Soy Ingeniero mecatronico y Desarrollador Web, si crees que puedo ayudar a un proyecto que estes desarrollando. Contactame!"
    },

  ]
  render() {
    return (
      <div className="row row-cols-1 row-cols-md-4 g-5 ">
        {
          this.personas.map((persona, index) => (

            <div className="col" key={index}>
              <div className="card hover" style={{ width: 15 + 'rem' }} >
                <img src={persona.picture} className="card-img-top" alt="Integrante Cue Ilisound" />
                <div className="card-body">
                  <h5 className="card-title">{persona.nombre}</h5>
                  <p className="card-text">{persona.description}</p>
                  <a href="#" className="btn btn-primary">Descargar CV</a>
                </div>
              </div>
            </div>

          ))


        }

      </div>

    )
  }
}
