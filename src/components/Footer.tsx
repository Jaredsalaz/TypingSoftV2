import React from 'react'
import './footer.css'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TypingSoft</h3>
            <p>Soluciones empresariales líderes para la transformación digital</p>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">GitHub</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#services">Desarrollo de Software</a></li>
              <li><a href="#services">Consultoría</a></li>
              <li><a href="#services">Soluciones de Seguridad</a></li>
              <li><a href="#services">Infraestructura en la Nube</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#about">Acerca de Nosotros</a></li>
              <li><a href="#">Carreras</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Política de Privacidad</a></li>
              <li><a href="#">Términos de Servicio</a></li>
              <li><a href="#">Política de Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} TypingSoft. Todos los derechos reservados. Tuxtla Gutiérrez, Chiapas, México</p>
          <p>Diseñado con innovación y creado con pasión.</p>
        </div>
      </div>
    </footer>
  )
}
