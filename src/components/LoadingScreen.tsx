import React, { useEffect, useState } from 'react'
import './loading-screen.css'

export const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false)
      onComplete?.()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isLoading) return null

  return (
    <div className="loading-screen active">
      <div className="loading-content">
        {/* 3D Boxes Loader */}
        <div className="boxes">
          <div className="box">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="box">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="box">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="box">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>

        {/* Texto de carga */}
        <div className="loading-text">
          <h2>TypingSoft</h2>
          <p>Cargando Innovación...</p>
          <div className="dots-animation">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Partículas animadas */}
      <div className="loading-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
            }}
          />
        ))}
      </div>
    </div>
  )
}
