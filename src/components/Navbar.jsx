import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  
  const navToggle = () => {
    // Cambia el estado 'active' al hacer clic en la navegación
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
  
    // Cambia el estado 'toggleIcon' al hacer clic en el botón de alternar
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        <img src="" alt="" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Quiénes somos
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Instalaciones
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Tratamientos
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Casos exitosos
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contáctanos
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div>
        <button className="nav__button">Programa HOY<br></br>tu valoración</button>
      </div>
    </nav>
  );
}
export default Navbar;
