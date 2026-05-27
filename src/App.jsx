import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' })
  // const [birds, setBirds] = useState([])

  useEffect(() => {
    const target = new Date('2026-06-04T08:45:00')
    const tick = () => {
      const diff = target - new Date()
      if (diff <= 0) return
      setTimeLeft({
        days:    String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours:   String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // useEffect(() => {
  //   let counter = 0
  //   const spawnFlock = () => {
  //     const count = Math.floor(Math.random() * 3) + 3
  //     const flock = Array.from({ length: count }, (_, i) => ({
  //       id: ++counter,
  //       top: Math.random() * 55 + 8,
  //       delay: i * 0.9,
  //       size: Math.random() * 20 + 35,
  //       duration: Math.random() * 4 + 10,
  //     }))
  //     setBirds(prev => [...prev, ...flock])
  //     setTimeout(() => {
  //       const ids = flock.map(b => b.id)
  //       setBirds(prev => prev.filter(b => !ids.includes(b.id)))
  //     }, 16000)
  //   }
  //   spawnFlock()
  //   const interval = setInterval(spawnFlock, 60000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div className="page">
      <img src="/Gemini_Generated1.webp" className="wedding-bg" alt="" fetchPriority="high" decoding="async" />

      <div className="all-overlays">

        <div className="hero-card">
          <div className="verse-block">
            <p className="verse">"அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை</p>
            <p className="verse">பண்பும் பயனும் அது"</p>
          </div>
          <p className="verse-ref">— குறள் 45</p>

          <h1 className="couple-names">Janarthanan <span className="ampersand">&amp;</span> Nithyasree</h1>
          <div className="divider" />

<p className="tagline">WE ARE GETTING MARRIED!</p>
          <p className="description">Please join us for this celebration and come bless our union.</p>

          <div className="countdown">
            {[['days','Days'],['hours','Hours'],['minutes','Minutes'],['seconds','Seconds']].map(([key, label]) => (
              <div className="countdown-unit" key={key}>
                <span className="countdown-number">{timeLeft[key]}</span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="celebration-container">
          <h2 className="celebration-title">The Celebration</h2>
          <div className="cards-row">

            <div className="card reception-card">
              <div className="card-front">
                <p className="title">Reception</p>
                <p className="subtitle">Dinner & Celebration</p>
              </div>
              <div className="card-back reception-back">
                <div className="reception-info">
                  <p>June 03, 2026</p>
                  <p>06:00 PM – 10:00 PM</p>
                  <p>Saroja Sanmugam</p>
                  <p>Thirumana Mandapam</p>
                </div>
              </div>
            </div>

            <div className="card marriage-card">
              <div className="card-front">
                <p className="title">Wedding Ceremony</p>
                <p className="subtitle">Sacred Rites</p>
              </div>
              <div className="card-back marriage-back">
                <div className="reception-info">
                  <p>June 04, 2026</p>
                  <p>07:30 AM – 09:00 AM</p>
                  <p>Saroja Sanmugam</p>
                  <p>Thirumana Mandapam</p>
                </div>
              </div>
            </div>

            <div className="card nagavalli-card">
              <div className="card-front">
                <p className="title">Nagavalli Muhurtham</p>
                <p className="subtitle">Sacred Ritual</p>
              </div>
              <div className="card-back nagavalli-back">
                <div className="reception-info">
                  <p>June 04, 2026</p>
                  <p>11:00 AM – 12:00 PM</p>
                  <p>Saroja Sanmugam</p>
                  <p>Thirumana Mandapam</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="map-container">
          <h2 className="map-title">Venue & Location</h2>
          <p className="map-subtitle">Saroja Sanmugam Thirumana Mandapam</p>

          <div className="map-body">
            <div className="map-frame-wrapper">
              <iframe
                className="map-frame"
                src="https://maps.google.com/maps?q=Saroja+Sanmugam+Thirumana+Mandapam&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location"
              />
            </div>

            <div className="map-side">
              <p className="map-scan-label">Scan to navigate</p>
              <img
                className="map-qr"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent('https://maps.app.goo.gl/25nbvj3ZawwExuYE7')}`}
                alt="QR code to venue"
              />
              <a
                className="map-btn"
                href="https://maps.app.goo.gl/25nbvj3ZawwExuYE7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="invitation-footer">
        <img src="/Invitation.jpeg" className="invitation-img" alt="Wedding Invitation" />
      </div>

      <img src="/mickey-mouse-gif-4.gif" className="mickey-gif" alt="" />

      {/* birds temporarily disabled
      {birds.map(bird => (
        <img
          key={bird.id}
          src="/bird.gif"
          className="bird"
          style={{
            top: `${bird.top}%`,
            width: `${bird.size}px`,
            animationDelay: `${bird.delay}s`,
            animationDuration: `${bird.duration}s`,
          }}
          alt=""
        />
      ))}
      */}
    </div>
  )
}

export default App
