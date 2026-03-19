import React, { useState } from 'react'
import gsap from 'gsap'
import './contact.css'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' })
      showNotification('¡Propuesta enviada exitosamente!')
    }, 1500)
  }

  const showNotification = (message: string) => {
    const div = document.createElement('div')
    div.className = 'notification'
    div.textContent = message
    document.body.appendChild(div)

    gsap.from(div, { opacity: 0, y: -20, duration: 0.3 })
    gsap.to(div, { opacity: 0, y: -20, duration: 0.3, delay: 2.5, onComplete: () => div.remove() })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Left Side */}
          <div className="contact-left">
            <span className="contact-label">CONTACTO</span>
            <h2 className="contact-title">COMENCEMOS<br />JUNTOS</h2>
            <p className="contact-description">
              ¿Listo para transformar su visión en realidad? Nuestro equipo está aquí para ayudarle.
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">📧</div>
                <div className="detail-content">
                  <span className="detail-label">EMAIL</span>
                  <p className="detail-text">info@typingsoft.com</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">📞</div>
                <div className="detail-content">
                  <span className="detail-label">TELÉFONO</span>
                  <p className="detail-text">+52 (961) 123-4567</p>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <span className="detail-label">OFICINA</span>
                  <p className="detail-text">Tuxtla Gutiérrez, Chiapas, México</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Nombre Completo"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Corporativo"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="company"
                placeholder="Empresa"
                value={formData.company}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="form-input form-select"
            >
              <option value="">Tipo de Servicio</option>
              <option value="software">Desarrollo de Software</option>
              <option value="consulting">Consultoría y Estrategia</option>
              <option value="security">Soluciones de Seguridad</option>
              <option value="cloud">Infraestructura en la Nube</option>
            </select>

            <textarea
              name="message"
              placeholder="Describe tu proyecto..."
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input form-textarea"
              rows={5}
            ></textarea>

            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'ENVIANDO...' : 'ENVIAR PROPUESTA'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
