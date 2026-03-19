import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import './technologies-modal.css'

export const TechnologiesModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('microsoft')

  useEffect(() => {
    if (isOpen) {
      playModalSound()
      gsap.fromTo(
        '.technologies-modal',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out' }
      )
    }
  }, [isOpen])

  const playModalSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()

    oscillator.connect(gain)
    gain.connect(audioContext.destination)

    oscillator.frequency.value = 800
    gain.gain.setValueAtTime(0.1, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
  }

  const technologies = {
    microsoft: {
      name: 'MICROSOFT ECOSYSTEM',
      icon: '🏢',
      items: ['.NET Framework', '.NET Core', 'Microsoft Azure', 'Microsoft Teams', '.NET MAUI', 'Blazor', 'Xamarin', 'Office 365', 'SharePoint', 'Power Platform'],
    },
    web: {
      name: 'WEB TECHNOLOGIES',
      icon: '🌐',
      items: ['React.js', 'Node.js', 'HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'Next.js', 'Express.js'],
    },
    design: {
      name: 'DESIGN & UX/UI',
      icon: '🎨',
      items: ['Adobe XD', 'Figma'],
    },
    backend: {
      name: 'BACKEND & LANGUAGES',
      icon: '⚙️',
      items: ['Python', 'C#', 'PHP'],
    },
    database: {
      name: 'DATABASES & STORAGE',
      icon: '🗄️',
      items: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Oracle DB', 'Firebase', 'Cassandra'],
    },
    devops: {
      name: 'DEVOPS & CLOUD',
      icon: '🚀',
      items: ['Docker', 'Kubernetes', 'Google Cloud', 'Jenkins', 'GitHub Actions'],
    },
    mobile: {
      name: 'MOBILE & FRAMEWORKS',
      icon: '📱',
      items: ['React Native', 'Xamarin'],
    },
  }

  if (!isOpen) return null

  const current = technologies[selectedCategory as keyof typeof technologies]

  return (
    <div className="technologies-modal-overlay" onClick={onClose}>
      <div className="technologies-modal" onClick={(e) => e.stopPropagation()}>
        <div className="tech-modal-header">
          <h2>⚡ STACK TECNOLÓGICO</h2>
          <p>Enterprise Solutions</p>
          <button className="tech-modal-close" onClick={onClose}>×</button>
        </div>

        <div className="tech-modal-content">
          <div className="tech-categories">
            {Object.entries(technologies).map(([key, value]) => (
              <button
                key={key}
                className={`tech-category-btn ${selectedCategory === key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(key)}
              >
                {value.icon} {value.name}
              </button>
            ))}
          </div>

          <div className="tech-items-list">
            {current.items.map((item, index) => (
              <div key={index} className="tech-item">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="tech-modal-footer">
          <p>30+ Tecnologías | Enterprise Grade</p>
        </div>
      </div>
    </div>
  )
}
