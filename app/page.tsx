'use client'

import { useEffect, useState } from 'react'

const navigation = [
  ['Tentang', '#tentang'],
  ['Menginap', '#menginap'],
  ['Pengalaman', '#pengalaman'],
  ['Galeri', '#galeri'],
  ['Lokasi', '#lokasi'],
]

const gallery = [
  { title: 'Massa dan cahaya', tone: 'clay', size: 'large' },
  { title: 'Ruang yang bernapas', tone: 'forest', size: 'small' },
  { title: 'Di antara pepohonan', tone: 'stone', size: 'small' },
  { title: 'Detail material', tone: 'charcoal', size: 'wide' },
]

function VisualBlock({ tone, label }: { tone: string; label: string }) {
  return (
    <div className={`visual-block visual-${tone}`} role="img" aria-label={label}>
      <span className="visual-mark" aria-hidden="true">KH</span>
      <span className="visual-caption">{label}</span>
    </div>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#beranda" aria-label="Kadoya House, kembali ke beranda">KADOYA <span>HOUSE</span></a>
        <nav id="main-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigasi utama">
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-book" href="#reservasi" onClick={() => setMenuOpen(false)}>Rencanakan kunjungan <span aria-hidden="true">→</span></a>
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">Buka menu</span>{menuOpen ? 'Tutup' : 'Menu'}
        </button>
      </header>

      <section className="hero section-shell" id="beranda">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Claket / Pacet / Mojokerto</p>
          <h1>Ruang untuk<br /><em>kembali</em> pada<br />yang esensial.</h1>
          <p className="hero-intro">Sebuah rumah di antara udara pegunungan, pepohonan, dan waktu yang berjalan lebih pelan.</p>
          <a className="text-link" href="#tentang">Kenali tempat ini <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-art" aria-label="Komposisi abstrak yang merepresentasikan arsitektur Kadoya House" role="img">
          <div className="hero-sun" /><div className="hero-house"><span>KADOYA<br />HOUSE</span></div><div className="hero-tree tree-one" /><div className="hero-tree tree-two" />
          <div className="hero-label">01 — A house<br />between green</div>
        </div>
        <div className="hero-meta"><span>01 / 05</span><span>Scroll to explore</span></div>
      </section>

      <section className="intro section-shell" id="tentang">
        <p className="section-number">01 / Tentang</p>
        <div className="intro-content">
          <h2>Datang untuk<br /><span>berhenti.</span></h2>
          <div className="intro-side"><p>Kadoya House adalah jeda yang memiliki bentuk. Tempat untuk membuka jendela, mendengar angin, dan membiarkan hari menemukan ritmenya sendiri.</p><a className="text-link" href="#menginap">Tentang pengalaman menginap <span aria-hidden="true">→</span></a></div>
        </div>
        <div className="intro-visual"><VisualBlock tone="forest" label="A sense of place" /><p>Arsitektur yang tidak bersaing dengan lanskapnya.</p></div>
      </section>

      <section className="stay section-shell dark-section" id="menginap">
        <div className="stay-heading"><p className="section-number">02 / Menginap</p><h2>Yang cukup,<br /><em>lebih dari</em> cukup.</h2></div>
        <div className="stay-details"><p className="large-note">Informasi menginap tersedia melalui kontak langsung.</p><p>Ruang, kapasitas, dan ketersediaan dapat berubah. Kami percaya percakapan yang jujur adalah awal terbaik untuk merencanakan kunjungan.</p><a className="outline-link" href="#reservasi">Tanyakan ketersediaan <span aria-hidden="true">→</span></a></div>
      </section>

      <section className="experience section-shell" id="pengalaman">
        <p className="section-number">03 / Pengalaman</p><div className="experience-grid"><h2>Hari-hari kecil<br />yang terasa <em>penuh.</em></h2><div className="experience-list"><article><span>01</span><div><h3>Pagi yang terbuka</h3><p>Cahaya pertama, udara dingin, dan waktu yang belum perlu diberi nama.</p></div></article><article><span>02</span><div><h3>Ruang untuk berkumpul</h3><p>Tempat berbagi cerita, makan bersama, atau sekadar tidak melakukan apa-apa.</p></div></article><article><span>03</span><div><h3>Dekat dengan alam</h3><p>Lanskap Pacet hadir sebagai latar yang selalu berubah sepanjang hari.</p></div></article></div></div>
      </section>

      <section className="gallery section-shell" id="galeri">
        <div className="gallery-heading"><div><p className="section-number">04 / Galeri</p><h2>Beberapa<br /><em>kemungkinan.</em></h2></div><p>Visual properti akan hadir di sini setelah aset fotografi resmi tersedia.</p></div>
        <div className="gallery-grid">{gallery.map((item, index) => <button className={`gallery-item gallery-${item.size}`} key={item.title} type="button" onClick={() => setActiveImage(index)}><VisualBlock tone={item.tone} label={item.title} /></button>)}</div>
      </section>

      <section className="location section-shell" id="lokasi"><div className="location-copy"><p className="section-number">05 / Lokasi</p><h2>Naik sedikit.<br />Tarik napas.</h2><p>Kadoya House berada di kawasan Claket, Pacet, Mojokerto — di mana lanskap mulai menanjak dan udara terasa berubah.</p><span className="location-note">Alamat lengkap dan tautan peta dibagikan saat reservasi.</span></div><div className="map-visual" role="img" aria-label="Ilustrasi abstrak lanskap perbukitan Pacet"><span className="map-label">Pacet<br /><b>Claket</b></span><span className="map-line line-a" /><span className="map-line line-b" /><span className="map-dot" /></div></section>

      <section className="booking section-shell" id="reservasi"><p className="section-number">Mulai dari sini</p><h2>Waktu yang lebih<br /><em>berarti.</em></h2><p>Untuk bertanya tentang ketersediaan dan merencanakan kunjungan, hubungi kami secara langsung.</p><a className="booking-link" href="mailto:hello@kadoyahouse.com">Hubungi Kadoya House <span aria-hidden="true">→</span></a></section>

      <footer className="site-footer"><span>© Kadoya House</span><span>Claket / Pacet / Mojokerto</span><a href="#beranda">Kembali ke atas ↑</a></footer>

      {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Galeri, ${gallery[activeImage].title}`} onClick={() => setActiveImage(null)}><button type="button" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Tutup galeri">Tutup ×</button><div className="lightbox-art" onClick={(event) => event.stopPropagation()}><VisualBlock tone={gallery[activeImage].tone} label={gallery[activeImage].title} /><p>{gallery[activeImage].title}</p></div></div>}
    </main>
  )
}
