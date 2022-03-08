import { React, useState } from 'react'

const Contact = () => {
  


  const sendWhatsapp = (e) => {
    e.preventDefault();
    const mensaje = "Hola soy " + name + " " + lastName + " Mi correo electronico es: " + email + " Soy de la ciudad de: " + city + " Requiero: " + requirements  
    window.location.href = "https://api.whatsapp.com/send?phone=+524434149436&text="+mensaje ;
    
  }
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [requirements, setRequirements] = useState('');

  return (
    <form className="row g-3" onSubmit={sendWhatsapp}>


      <div className="col-md-6">
        <label className="form-label">Nombre</label>
        <input 
          type="text" 
          onChange={e => setName(e.target.value)} 
          className="form-control" 
          placeholder="Nombre" 
          aria-label="Nombre" />
      </div>
      <div className="col-md-6">
        <label  className="form-label">Apellido</label>
        <input 
          type="text" 
          onChange={e => setLastName(e.target.value)} 
          className="form-control" 
          placeholder="Apellido" 
          aria-label="Apellido" />
      </div>

      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input 
          type="email" 
          onChange={e => setEmail(e.target.value)} 
          className="form-control" 
          placeholder="Email" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Ciudad</label>
        <input 
          type="text" 
          onChange={e => setCity(e.target.value)} 
          className="form-control" 
          placeholder="Ciudad" />
      </div>

      <div className="form-floating">
        <textarea className="form-control" placeholder="Mandanos tus solicitudes" onChange={e => setRequirements(e.target.value)}  style={{ height: 100 + "px" }}></textarea>
        <label>Escribe tus requisitos...</label>
      </div>

      <div className="col-md-12">
        <button className="btn btn-success" type='submit'>Enviar WhatsApp</button>
      </div>
    </form>
  )
}

export default Contact