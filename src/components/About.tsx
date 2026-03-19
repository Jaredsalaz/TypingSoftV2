import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './about.css'

gsap.registerPlugin(ScrollTrigger)

export const About: React.FC<{
  onOpenTechnologies: () => void
  onOpenCountries: () => void
  onOpenOrgChart: () => void
}> = ({ onOpenTechnologies, onOpenCountries, onOpenOrgChart }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.about-feature')

    elements.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
      })
    })
  }, [])

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">¿Por qué elegir TypingSoft?</h2>
            <p className="section-description">
              Con más de 15 años de experiencia en la industria, hemos estado a la vanguardia de la transformación digital,
              ayudando a empresas de todo el mundo a lograr sus objetivos ambiciosos.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="feature-number">01</div>
                <h3>🚀 Innovación</h3>
                <p>Pioneros en tecnologías emergentes</p>
              </div>
              <div className="about-feature">
                <div className="feature-number">02</div>
                <h3>🔒 Seguridad</h3>
                <p>Protección de datos de nivel enterprise</p>
              </div>
              <div className="about-feature">
                <div className="feature-number">03</div>
                <h3>🤝 Confianza</h3>
                <p>Relaciones duraderas con nuestros clientes</p>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-box" onClick={onOpenOrgChart} style={{ cursor: 'pointer' }}>
                <div className="stat-box-number">7</div>
                <div className="stat-box-label">Equipo Directivo</div>
              </div>
              <div className="stat-box" onClick={onOpenTechnologies} style={{ cursor: 'pointer' }}>
                <div className="stat-box-number">30</div>
                <div className="stat-box-label">Tecnologías</div>
              </div>
              <div className="stat-box" onClick={onOpenCountries} style={{ cursor: 'pointer' }}>
                <div className="stat-box-number">3</div>
                <div className="stat-box-label">Países</div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-box">
              <div className="visual-icon">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
