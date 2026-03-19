import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './hero.css'

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && actionsRef.current) {
      // Animación de título
      const lines = titleRef.current.querySelectorAll('.title-line')
      gsap.from(lines, {
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })

      // Animación de subtítulo
      gsap.from(subtitleRef.current, {
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
      })

      // Animación de botones
      gsap.from(actionsRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-title" ref={titleRef}>
            <span className="title-line">BIENVENIDO AL</span>
            <span className="title-line accent-cyan">FUTURO</span>
            <span className="title-line">TECNOLÓGICO</span>
          </div>

          <p className="hero-subtitle" ref={subtitleRef}>
            Transformamos ideas en soluciones digitales revolucionarias
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Proyectos Entregados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Años de Excelencia</div>
            </div>
          </div>

          <div className="hero-actions" ref={actionsRef}>
            <button className="btn btn-primary">Comenzar Ahora</button>
            <button className="btn btn-secondary">Saber Más</button>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Desplázate para explorar</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}
