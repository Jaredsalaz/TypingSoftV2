import React, { useEffect } from 'react'
import gsap from 'gsap'
import './org-chart-modal.css'

export const OrgChartModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      playModalSound()
      gsap.fromTo(
        '.org-chart-modal',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out' }
      )
    }
  }, [isOpen])

  const playModalSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()

    oscillator.connect(gain)
    gain.connect(audioContext.destination)

    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2)
    gain.gain.setValueAtTime(0.1, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.2)
  }

  const ceo = {
    name: 'Gerardo López',
    position: 'CEO & FUNDADOR',
    bio: 'Visionario directo e innovación',
  }

  const directors = [
    {
      name: 'Magdalena',
      position: 'DIRECTORA ADMINISTRATIVA',
      bio: 'Contabilidad, Finanzas y Administración',
      specialties: ['Liderazgo', 'Estrategia'],
    },
    {
      name: 'Jared Salazar',
      position: 'CTO & DIRECTOR DE DESARROLLO',
      bio: 'Arquitectura de software y desarrollo',
      specialties: ['Tech Lead', 'Innovation'],
    },
    {
      name: 'Darniel',
      position: 'DIRECTOR DE CONSULTORÍA',
      bio: 'Estrategia tecnológica y transformación digital',
      specialties: ['Consulting', 'Strategy'],
    },
  ]

  const specialists = [
    {
      name: 'Pablo',
      position: 'ESPECIALISTA EN IA/ML',
      bio: 'Machine Learning y Deep Learning',
      icon: '🤖',
    },
    {
      name: 'Ricardo',
      position: 'ARQUITECTO DE SOFTWARE',
      bio: 'Arquitectura de sistemas y escalabilidad',
      icon: '🏗️',
    },
    {
      name: 'Diana',
      position: 'LEAD UX/UI DESIGNER',
      bio: 'Experiencia de usuario y diseño digital',
      icon: '🎨',
    },
  ]

  if (!isOpen) return null

  return (
    <div className="org-chart-modal-overlay" onClick={onClose}>
      <div className="org-chart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="org-chart-header">
          <h2>🏢 ORGANIGRAMA EMPRESARIAL</h2>
          <p>ESTRUCTURA ORGANIZACIONAL TYPINGSOFT</p>
          <button className="org-chart-close" onClick={onClose}>×</button>
        </div>

        <div className="org-chart-content">
          {/* CEO */}
          <div className="ceo-section">
            <div className="ceo-card">
              <div className="card-avatar">👔</div>
              <h3>{ceo.name}</h3>
              <p className="card-position">{ceo.position}</p>
              <p className="card-bio">{ceo.bio}</p>
            </div>
          </div>

          {/* Directors */}
          <div className="directors-section">
            <h4 className="section-label">DIRECTORES</h4>
            <div className="directors-grid">
              {directors.map((director, index) => (
                <div key={index} className="director-card">
                  <div className="card-avatar">📊</div>
                  <h4>{director.name}</h4>
                  <p className="card-position">{director.position}</p>
                  <p className="card-bio">{director.bio}</p>
                  <div className="card-specialties">
                    {director.specialties.map((spec, i) => (
                      <span key={i}>{spec}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specialists */}
          <div className="specialists-section">
            <h4 className="section-label">ESPECIALISTAS</h4>
            <div className="specialists-grid">
              {specialists.map((specialist, index) => (
                <div key={index} className="specialist-card">
                  <div className="card-avatar">{specialist.icon}</div>
                  <h4>{specialist.name}</h4>
                  <p className="card-position">{specialist.position}</p>
                  <p className="card-bio">{specialist.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="org-chart-footer">
          <p>7 Miembros | Equipo Directivo TypingSoft</p>
        </div>
      </div>
    </div>
  )
}
