import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

export default class Paquetes extends Component {
  render() {
    return (
      <div>
        <header>
          <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Paquetes</h1>
            <p class="fs-5 ">Cue Ilisound siempre hara el evento a tu gusto , estas interesado en alguno de nuestros servicios? aqui puedes ver la informacion </p>
          </div>
        </header>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Karaoke</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$4,200<small class="text-muted fw-light">Mxn</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>2 Satelitales</li>
                  <li>1 Subwoofer</li>
                  <li>3 Microfonos</li>
                  <li>6 par RGBW</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModalKaraoke">Ver mas</button>
                {/* <!-- Modal  Karaoke--> */}
                <div class="modal fade" id="exampleModalKaraoke" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Karaoke</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <li>2 Satelitales</li>
                        <li>1 Subwoofer</li>
                        <li>3 Microfonos</li>
                        <li>6 par RGBW</li>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Medio 150 personas</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$8,500<small class="text-muted fw-light">Mxn</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>2 Satelitales</li>
                  <li>1 Subwoofer</li>
                  <li>3 Microfonos</li>
                  <li>6 par RGBW</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mas</button>
                {/* <!-- Modal  Medio--> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Medio 150 personas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <li>2 Satelitales</li>
                        <li>1 Subwoofer</li>
                        <li>3 Microfonos</li>
                        <li>6 par RGBW</li>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
              <div class="card-header py-3 text-white bg-primary border-primary">
                <h4 class="my-0 fw-normal">Grande 250 personas</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$15,000<small class="text-muted fw-light">Mxn</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>2 Satelitales</li>
                  <li>1 Subwoofer</li>
                  <li>3 Microfonos</li>
                  <li>6 par RGBW</li>
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalGrande">Ver mas</button>
                
                {/* <!-- Modal  Grande--> */}
                <div class="modal fade" id="exampleModalGrande" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Grande 250 personas</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <li>2 Satelitales</li>
                        <li>1 Subwoofer</li>
                        <li>3 Microfonos</li>
                        <li>6 par RGBW</li>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <h3 className="fs-5">No encontraste el paquete adecuado para tu evento haz click <Link to="contacto">aqui</Link></h3>
      </div>
    )
  }
}
