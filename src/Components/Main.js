import React, { Component } from 'react'

export default class Main extends Component {

  videos = [
    {
      nombre: "CUE ILISOUND",
      link: "https://www.youtube.com/embed/Jfl4IooFLv4"
    },
    {
      nombre: "CONCIERTOS",
      link: "https://www.youtube.com/embed/HWZpfPtK9L0"

    },
    {
      nombre: "XV",
      link: "https://www.youtube.com/embed/fsxwciY1KsU"
    },
    {
      nombre: "TEATRO",
      link: "https://www.youtube.com/embed/xhia__u3zik"
    }
  ]

  render() {
    return (
      <div>
        <main>

          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-bold">CUE ILISOUND</h1>
                <p className="lead">CueIlisound es una empresa de renta de audio e iluminacion, somos tu mejor opcion para eventos culturales, obras de teatro, danza,fiesta, contamos con ingenieros calificados.</p>
                <p>
                  <a href="#" className="btn btn-primary my-2">Contactanos</a>
                </p>
              </div>
            </div>
          </section>
          <div className="album py-5 bg-light">
            <div className="container">

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">

                {

                  this.videos.map((video,index) => (

                    <div className="col" key={index}>
                      <div className="card shadow-sm">
                        <div className="ratio ratio-16x9">
                          <iframe src={video.link} title="YouTube video" allowFullScreen></iframe>
                        </div>
                        <div className="card-body">
                          <p className="card-text d-flex justify-content-center">{video.nombre}</p>

                        </div>
                      </div>
                    </div>
                  ))

                }



              </div>
            </div>
          </div>

        </main>
      </div>

    )
  }
}
