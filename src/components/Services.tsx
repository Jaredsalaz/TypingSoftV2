import React, { useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import './services.css'

const services = [
  {
    id: 1,
    title: 'Desarrollo de Software',
    description: 'Soluciones personalizadas adaptadas a las necesidades de tu negocio',
    features: ['Desarrollo Full-Stack', 'Arquitectura en la Nube', 'DevOps', 'Microservicios'],
    icon: '💻',
    color: '#FF6B6B',
  },
  {
    id: 2,
    title: 'Consultoría y Estrategia',
    description: 'Orientación experta para tu transformación digital',
    features: ['Estrategia Empresarial', 'Hoja de Ruta Tecnológica', 'Optimización de Procesos', 'Gestión del Cambio'],
    icon: '📊',
    color: '#4ECDC4',
  },
  {
    id: 3,
    title: 'Soluciones de Seguridad',
    description: 'Protege tus activos con seguridad empresarial',
    features: ['Ciberseguridad', 'Cumplimiento Normativo', 'Pruebas de Penetración', 'Evaluación de Riesgos'],
    icon: '🔒',
    color: '#45B7D1',
  },
  {
    id: 4,
    title: 'Infraestructura en la Nube',
    description: 'Soluciones escalables y confiables en la nube',
    features: ['AWS/Azure/GCP', 'Servicios de Migración', 'Monitoreo', 'Recuperación ante Desastres'],
    icon: '☁️',
    color: '#96CEB4',
  },
]

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
  margin-bottom: 180px;

  .carousel-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-track {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .service-card {
    position: absolute;
    width: 320px;
    height: 400px;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 35px 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-style: preserve-3d;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    &:hover {
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .card-icon {
      font-size: 3.5rem;
      text-align: center;
      animation: float 3s ease-in-out infinite;
    }

    .card-title {
      font-family: var(--font-primary);
      font-size: 1.6rem;
      font-weight: 700;
      color: #fff;
      margin: 0;
      letter-spacing: 0.5px;
      text-shadow: 0 0 15px rgba(42, 208, 208, 0.2);
      line-height: 1.2;
    }

    .card-description {
      font-family: var(--font-secondary);
      font-size: 0.85rem;
      color: #ccc;
      line-height: 1.5;
      margin: 0;
      flex-grow: 0;
    }

    .card-features {
      display: flex;
      flex-direction: column;
      gap: 6px;
      flex-grow: 1;

      .feature {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.75rem;
        color: #aaa;
        line-height: 1.3;

        &:before {
          content: '▸';
          color: var(--feature-color);
          font-size: 1.2rem;
          flex-shrink: 0;
        }
      }
    }

    .card-cta {
      align-self: flex-start;
      padding: 8px 16px;
      background: linear-gradient(135deg, rgba(42, 208, 208, 0.3), rgba(42, 208, 208, 0.1));
      border: 1px solid rgba(42, 208, 208, 0.5);
      color: #2ad0d0;
      border-radius: 6px;
      font-family: var(--font-secondary);
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: auto;

      &:hover {
        background: linear-gradient(135deg, rgba(42, 208, 208, 0.5), rgba(42, 208, 208, 0.3));
        box-shadow: 0 0 20px rgba(42, 208, 208, 0.4);
      }
    }
  }

  .carousel-controls {
    position: absolute;
    bottom: -130px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
    align-items: center;
    z-index: 20;

    .control-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(42, 208, 208, 0.1);
      border: 2px solid rgba(42, 208, 208, 0.3);
      color: #2ad0d0;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;

      &:hover {
        background: rgba(42, 208, 208, 0.3);
        box-shadow: 0 0 20px rgba(42, 208, 208, 0.4);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .indicators {
      display: flex;
      gap: 10px;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(42, 208, 208, 0.2);
        border: 1px solid rgba(42, 208, 208, 0.3);
        cursor: pointer;
        transition: all 0.3s ease;

        &.active {
          background: #2ad0d0;
          box-shadow: 0 0 15px rgba(42, 208, 208, 0.6);
          width: 28px;
          border-radius: 5px;
        }

        &:hover {
          background: rgba(42, 208, 208, 0.4);
        }
      }
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 120px;

    .service-card {
      width: 280px;
      height: 360px;
      padding: 30px 25px;

      .card-title {
        font-size: 1.5rem;
      }

      .card-features .feature {
        font-size: 0.8rem;
      }
    }

    .carousel-controls {
      bottom: -100px;

      .control-btn {
        width: 45px;
        height: 45px;
        font-size: 1rem;
      }
    }
  }
`

export const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = React.useRef<HTMLDivElement>(null)
  const [dragStart, setDragStart] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX)
    setIsDragging(true)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStart(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const diff = e.clientX - dragStart
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePrev()
      } else {
        handleNext()
      }
      setIsDragging(false)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return

    const diff = e.touches[0].clientX - dragStart
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handlePrev()
      } else {
        handleNext()
      }
      setIsDragging(false)
    }
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  const getCardPosition = (index: number) => {
    let position = index - currentIndex

    if (position > 2) position -= services.length
    if (position < -2) position += services.length

    return position
  }

  React.useEffect(() => {
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        duration: 0.6,
        ease: 'power2.inOut',
      })
    }
  }, [currentIndex])

  return (
    <section
      id="services"
      className="services"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      <div className="services-header">
        <h2 className="services-title">Nuestros Servicios</h2>
        <p className="services-subtitle">Soluciones integrales para tu transformación digital</p>
      </div>

      <CarouselContainer>
        <div className="carousel-wrapper">
          <div className="carousel-track" ref={trackRef}>
            {services.map((service, index) => {
              const position = getCardPosition(index)
              const isCenter = position === 0
              const isLeft = position === -1
              const isRight = position === 1

              let translateX = position * 380
              let translateZ = 0
              let rotateY = 0
              let scale = 0.7
              let opacity = 0.5

              if (isCenter) {
                translateZ = 0
                rotateY = 0
                scale = 1
                opacity = 1
              } else if (isLeft) {
                translateX -= 50
                rotateY = 35
                scale = 0.8
                opacity = 0.7
              } else if (isRight) {
                translateX += 50
                rotateY = -35
                scale = 0.8
                opacity = 0.7
              }

              return (
                <div
                  key={index}
                  className="service-card"
                  onClick={() => handleDotClick(index)}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: isCenter ? 10 : 5,
                    pointerEvents: isCenter ? 'auto' : 'none',
                    '--feature-color': service.color,
                  } as React.CSSProperties & { '--feature-color': string }}
                >
                  <div className="card-icon">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  <div className="card-features">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="feature">
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="card-cta">Explorar →</button>
                </div>
              )
            })}
          </div>
        </div>

        <div className="carousel-controls">
          <button className="control-btn" onClick={handlePrev}>
            ←
          </button>
          <div className="indicators">
            {services.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <button className="control-btn" onClick={handleNext}>
            →
          </button>
        </div>
      </CarouselContainer>
    </section>
  )
}