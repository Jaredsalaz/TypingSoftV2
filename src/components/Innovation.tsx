import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { InteractivePhone } from './InteractivePhone'
import './innovation.css'

gsap.registerPlugin(ScrollTrigger)

export const Innovation: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.innovation-card')
    
    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
      })
    })
  }, [])

  return (
    <section id="innovation" className="innovation">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">INNOVACIÓN</div>
          <h2 className="section-title">Tecnología del Mañana</h2>
          <p className="section-description">
            Soluciones interactivas que transforman la experiencia del usuario
          </p>
        </div>

        <div className="innovation-content">
          <InteractivePhone />
        </div>
      </div>
    </section>
  )
}
