import React, { useState } from 'react'
import gsap from 'gsap'
import './interactive-phone.css'

export const InteractivePhone: React.FC = () => {
  const [appStarted, setAppStarted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleStartApp = () => {
    setLoading(true)
    gsap.to('.phone-screen', {
      opacity: 0.5,
      duration: 0.3,
    })

    setTimeout(() => {
      setAppStarted(true)
      setLoading(false)
      gsap.to('.phone-screen', {
        opacity: 1,
        duration: 0.3,
      })
    }, 2000)
  }

  const handleRequestTaxi = () => {
    gsap.to('.taxi-icon-phone', {
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      duration: 0.5,
    })
  }

  return (
    <div className="interactive-phone-container">
      <div className="phone-device-wrapper">
        {/* Teléfono físico */}
        <div className="phone-device">
          <div className="phone-frame">
            {/* Pantalla */}
            <div className="phone-screen">
              {!appStarted ? (
                // Pantalla de carga
                <div className="loading-screen-phone active">
                  <div className="status-bar-phone">
                    <span className="time-phone">14:30</span>
                    <div className="status-icons-phone">
                      <span>📶</span>
                      <span>🔋 85%</span>
                    </div>
                  </div>

                  <div className="loading-content-phone">
                    <div className="app-logo-phone">T</div>
                    <h3 className="app-title-phone">TAXI SOFT</h3>
                    <p className="app-subtitle-phone">Tu viaje, nuestra tecnología</p>

                    <button
                      className="start-app-button"
                      onClick={handleStartApp}
                      disabled={loading}
                    >
                      <span className="button-text">
                        {loading ? '🔄 CARGANDO...' : '🚀 INICIAR APP'}
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                // Pantalla de la app
                <div className="taxi-app-screen active">
                  <div className="status-bar-phone">
                    <span className="time-phone">14:30</span>
                    <div className="status-icons-phone">
                      <span>📶</span>
                      <span>🔋 85%</span>
                    </div>
                  </div>

                  <div className="app-header-phone">
                    <div className="user-avatar-phone">GH</div>
                    <div className="user-details-phone">
                      <span className="greeting-phone">¡Hola, Usuario!</span>
                      <span className="location-phone">📍 Tu ubicación</span>
                    </div>
                  </div>

                  <div className="map-container-phone">
                    <div className="map-overlay-phone">
                      <div className="location-pin pickup-pin">
                        <div className="pin-icon-phone">📍</div>
                        <span className="pin-label">Tu ubicación</span>
                      </div>
                      <div className="location-pin destination-pin">
                        <div className="pin-icon-phone">🏢</div>
                        <span className="pin-label">Destino</span>
                      </div>
                      <div className="taxi-icon-phone">🚖</div>
                      <div className="route-line-phone"></div>
                    </div>
                  </div>

                  <div className="trip-info-phone">
                    <div className="trip-details-phone">
                      <div className="trip-item-phone">
                        <span className="trip-label-phone">Tiempo</span>
                        <span className="trip-value-phone">15 min</span>
                      </div>
                      <div className="trip-item-phone">
                        <span className="trip-label-phone">Distancia</span>
                        <span className="trip-value-phone">8.5 km</span>
                      </div>
                      <div className="trip-item-phone">
                        <span className="trip-label-phone">Precio</span>
                        <span className="trip-value-phone">$125</span>
                      </div>
                    </div>

                    <button
                      className="action-btn-phone primary-btn"
                      onClick={handleRequestTaxi}
                    >
                      🚖 SOLICITAR TAXI
                    </button>
                  </div>

                  <div className="bottom-nav-phone">
                    <div className="nav-item-phone active-nav">🏠</div>
                    <div className="nav-item-phone">🗺️</div>
                    <div className="nav-item-phone">💳</div>
                    <div className="nav-item-phone">👤</div>
                  </div>
                </div>
              )}
            </div>

            {/* Detalles físicos del teléfono */}
            <div className="phone-notch"></div>
            <div className="phone-home-button"></div>
            <div className="phone-speaker"></div>
          </div>

          <div className="phone-shadow"></div>
        </div>

        {/* Descripción */}
        <div className="phone-description">
          <h3>Tecnología del Mañana</h3>
          <p>App interactiva de transporte</p>
        </div>
      </div>
    </div>
  )
}
