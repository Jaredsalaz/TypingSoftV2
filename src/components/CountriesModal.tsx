import React, { useEffect } from 'react'
import gsap from 'gsap'
import './countries-modal.css'

export const CountriesModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      playModalSound()
      gsap.fromTo(
        '.countries-modal',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'back.out' }
      )
    }
  }, [isOpen])

  const playModalSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()

    oscillator.connect(gain)
    gain.connect(audioContext.destination)

    oscillator.frequency.setValueAtTime(600, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.15)
    gain.gain.setValueAtTime(0.1, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.15)
  }

  const countries = [
    {
      name: 'MÉXICO',
      flag: '🇲🇽',
      title: 'Sede principal y centro de innovación tecnológica',
      details: [
        '🏢 Oficinas en CDMX',
        '👥 35+ Desarrolladores',
        '📱 180+ Proyectos',
      ],
      specialties: ['Fintech', 'E-commerce', 'Enterprise'],
    },
    {
      name: 'GUATEMALA',
      flag: '🇬🇹',
      title: 'Hub de desarrollo móvil y aplicaciones nativas',
      details: [
        '🏙️ Oficina en Guatemala City',
        '👥 12+ Especialistas',
        '📱 85+ Apps',
      ],
      specialties: ['Mobile Apps', 'IoT', 'Tourism Tech'],
    },
    {
      name: 'COLOMBIA',
      flag: '🇨🇴',
      title: 'Centro de inteligencia artificial y Big Data',
      details: [
        '🏢 Oficina en Bogotá',
        '👥 18+ Ingenieros',
        '🤖 45+ Modelos IA',
      ],
      specialties: ['AI/ML', 'Big Data', 'Cloud'],
    },
  ]

  if (!isOpen) return null

  return (
    <div className="countries-modal-overlay" onClick={onClose}>
      <div className="countries-modal" onClick={(e) => e.stopPropagation()}>
        <div className="countries-modal-header">
          <h2>🌍 PRESENCIA GLOBAL</h2>
          <p>TypingSoft en el mundo</p>
          <button className="countries-modal-close" onClick={onClose}>×</button>
        </div>

        <div className="countries-grid">
          {countries.map((country, index) => (
            <div key={index} className="country-card">
              <div className="country-flag">{country.flag}</div>
              <h3>{country.name}</h3>
              <p className="country-title">{country.title}</p>
              <div className="country-details">
                {country.details.map((detail, i) => (
                  <div key={i}>{detail}</div>
                ))}
              </div>
              <div className="country-specialties">
                {country.specialties.map((spec, i) => (
                  <span key={i} className="specialty-tag">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="countries-modal-stats">
          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">Países</div>
          </div>
          <div className="stat">
            <div className="stat-number">65+</div>
            <div className="stat-label">Profesionales</div>
          </div>
          <div className="stat">
            <div className="stat-number">310+</div>
            <div className="stat-label">Proyectos Globales</div>
          </div>
        </div>
      </div>
    </div>
  )
}
