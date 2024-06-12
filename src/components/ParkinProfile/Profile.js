import React, { useState } from 'react';
import './Profile.styles.css';
import perfil from '../../assets/perfil.jpg';
import Parqueadero1 from '../../assets/parqueadero1.jpg';
import Parqueadero2 from '../../assets/parqueadero2.jpg';
import Parqueadero3 from '../../assets/parqueadero3.jpg';
import Parqueadero4 from '../../assets/parqueadero4.jpg';

const Profile = () => {
  const [section, setSection] = useState('Perfil');
  const [nombre, setNombre] = useState('Juan Pérez');
  const [fechaNacimiento, setFechaNacimiento] = useState('10 de Enero de 1985');
  const [pais, setPais] = useState('Colombia');
  const [correo, setCorreo] = useState('juanperez@example.com');
  const [telefono, setTelefono] = useState('+57 123456789');
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaFechaNacimiento, setNuevaFechaNacimiento] = useState('');
  const [nuevoPais, setNuevoPais] = useState('');
  const [nuevoCorreo, setNuevoCorreo] = useState('');
  const [nuevoTelefono, setNuevoTelefono] = useState('');

  const handleMenuClick = (menuOption) => {
    setSection(menuOption);
    const element = document.getElementById(menuOption);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleActualizarClick = () => {
    setNombre(nuevoNombre || nombre);
    setFechaNacimiento(nuevaFechaNacimiento || fechaNacimiento);
    setPais(nuevoPais || pais);
    setCorreo(nuevoCorreo || correo);
    setTelefono(nuevoTelefono || telefono);
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="profile-pic">
          <img src={perfil} alt="Profile" />
        </div>
        <h2>Usuario: {nombre}</h2>
        <ul>
          <li onClick={() => handleMenuClick('Perfil')}>Perfil</li>
          <li onClick={() => handleMenuClick('Historial de Reservas')}>Historial de Reservas</li>
          <li onClick={() => handleMenuClick('Parqueaderos Favoritos')}>Parqueaderos Favoritos</li>
          <li onClick={() => handleMenuClick('Configuraciones de Cuenta')}>Configuraciones de Cuenta</li>
          <li>Cerrar Sesión</li>
        </ul>
      </div>
      <div className="content">
        <div id="Perfil">
          <h1>Perfil</h1>
          <div className="profile-info">
            <img src={perfil} alt="Profile" className="profile-image" />
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Fecha de Nacimiento:</strong> {fechaNacimiento}</p>
            <p><strong>País:</strong> {pais}</p>
            <p><strong>Correo Electrónico:</strong> {correo}</p>
            <p><strong>Teléfono:</strong> {telefono}</p>
          </div>
        </div>
        <div id="Historial de Reservas">
          <h1>Historial de Reservas</h1>
          <div className="reservation">
            <img src={Parqueadero4} alt="Profile" className="profile-image" />
            <h2>Reserva Confirmada:</h2>
            <p><strong>Fecha:</strong> 01/06/2024</p>
            <p><strong>Hora de Entrada:</strong> 10:00 AM</p>
            <p><strong>Hora de Salida:</strong> 12:00 PM</p>
            <p><strong>Parqueadero:</strong> Parqueadero XYZ</p>
            <p><strong>Costo:</strong> $10.00</p>
          </div>
          <div className="reservation">
            <img src={Parqueadero3} alt="Parqueadero" className="parking-image" />
            <h2>Reserva Pendiente:</h2>
            <p><strong>Fecha:</strong> 02/06/2024</p>
            <p><strong>Hora de Entrada:</strong> 11:00 AM</p>
            <p><strong>Hora de Salida:</strong> 1:00 PM</p>
            <p><strong>Parqueadero:</strong> Parqueadero ABC</p>
            <p><strong>Costo:</strong> Pendiente</p>
          </div>
        </div>
        <div id="Parqueaderos Favoritos">
          <h1>Parqueaderos Favoritos</h1>
          <div className="favorite-parking">
            <div className="parking">
              <img src={Parqueadero1} alt="Parqueadero 1" />
              <p>Parqueadero Centro Andino</p>
            </div>
            <div className="parking">
              <img src={Parqueadero2} alt="Parqueadero 2" />
              <p>Parqueadero Usaquén</p>
            </div>
            <div className="parking">
              <img src={Parqueadero3} alt="Parqueadero 3" />
              <p>Parqueadero Chapinero</p>
            </div>
            <div className="parking">
              <img src={Parqueadero4} alt="Parqueadero 4" />
              <p>Parqueadero Salitre</p>
            </div>
          </div>
        </div>
        <div id="Configuraciones de Cuenta">
          <h1>Configuraciones de Cuenta</h1>
          <div className="profile-info">
            <p><strong>Nombre:</strong> <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} /></p>
            <p><strong>Fecha de Nacimiento:</strong> <input type="text" value={nuevaFechaNacimiento} onChange={(e) => setNuevaFechaNacimiento(e.target.value)} /></p>
            <p><strong>País:</strong> <input type="text" value={nuevoPais} onChange={(e) => setNuevoPais(e.target.value)} /></p>
            <p><strong>Correo Electrónico:</strong> <input type="text" value={nuevoCorreo} onChange={(e) => setNuevoCorreo(e.target.value)} /></p>
            <p><strong>Teléfono:</strong> <input type="text" value={nuevoTelefono} onChange={(e) => setNuevoTelefono(e.target.value)} /></p>
          </div>
          <button onClick={handleActualizarClick}>Actualizar</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
