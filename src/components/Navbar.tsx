import React, { useState, useEffect } from 'react'
import './navbar.css'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-container">
            <div className="logo-text-container">
              <span className="logo-text">TypingSoft</span>
              <span className="logo-subtitle">Soluciones Empresariales</span>
            </div>
          </div>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          <button className="nav-link" onClick={() => scrollToSection('home')}>
            Inicio
          </button>
          <button className="nav-link" onClick={() => scrollToSection('services')}>
            Servicios
          </button>
          <button className="nav-link" onClick={() => scrollToSection('innovation')}>
            Innovación
          </button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            Acerca de
          </button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>
            Contacto
          </button>
        </div>

        <div
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          id="nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}
