'use client'

import { useEffect, useState } from 'react'

const navigation = [
  ['Beranda', '#beranda'],
  ['Tentang', '#tentang'],
  ['Menginap', '#menginap'],
  ['Sekitar', '/sekitar'],
  ['Galeri', '/galeri'],
  ['Lokasi', '#lokasi'],
  ['Kontak', '#kontak'],
]

const gallery = [
  { title: 'Teras depan Kadoya House', image: '/teras-rumah.jpeg' },
  { title: 'Taman dan beranda kolonial', image: '/teras-rumah-2.jpeg' },
  { title: 'Detail arsitektur dan lanskap', image: '/rumah-dalam.jpeg' },
]

const stays = [
  ['Kamar nyaman', 'Ruang istirahat yang tenang untuk melepas lelah setelah menjelajah Pacet.'],
  ['Ruang berkumpul', 'Area bersama untuk sarapan, berbincang, atau menghabiskan sore.'],
  ['Dapur & perlengkapan', 'Fasilitas pendukung untuk pengalaman menginap yang terasa seperti di rumah.'],
  ['Taman dan teras', 'Sudut terbuka untuk menikmati udara sejuk dan suasana rumah bersejarah.'],
]

const nearby = [
  ['01', 'Wisata alam', 'Nikmati udara pegunungan, jalur hijau, dan pemandangan khas kawasan Pacet.', 'Jelajah alam'],
  ['02', 'Kuliner lokal', 'Temukan warung hangat, kopi, dan hidangan rumahan untuk melengkapi perjalanan.', 'Cicipi sekitar'],
  ['03', 'Aktivitas keluarga', 'Rencanakan waktu santai untuk bermain, berfoto, dan berkumpul bersama orang terdekat.', 'Waktu bersama'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#beranda" aria-label="Kadoya House, kembali ke beranda"><img src="/logo-kadoya.png" alt="Kadoya House Claket Pacet" /></a>
        <nav id="main-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigasi utama">
          {navigation.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="booking-button header-booking" href="#kontak"><span aria-hidden="true">▣</span> Booking sekarang</a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><span className="sr-only">Buka menu</span>{menuOpen ? 'Tutup' : 'Menu'}</button>
      </header>

      <section className="reference-hero" id="beranda">
        <div className="hero-backdrop" aria-label="Rumah kolonial Kadoya House dengan atap genteng" role="img" /><div className="hero-wash" />
        <div className="hero-copy"><p className="hero-kicker">Est. 1924 <span aria-hidden="true">—</span></p><h1>Kenyamanan<br />dalam Warisan<br />di Kadoya House</h1><span className="ornament" aria-hidden="true">◇</span><p className="hero-intro">Penginapan bergaya kolonial Belanda yang berdiri sejak tahun 1924 di sejuknya Claket, Pacet.</p><div className="hero-actions"><a className="booking-button" href="#kontak"><span aria-hidden="true">▣</span> Booking sekarang</a><a className="video-button" href="#galeri"><span aria-hidden="true">▶</span> Lihat galeri</a></div></div><p className="hero-scroll">Scroll untuk menjelajah <span aria-hidden="true">↓</span></p>
      </section>

      <section className="about section-shell" id="tentang"><div className="about-image"><img src="/rumah-hero.webp" alt="Bangunan rumah kolonial dengan atap genteng merah dan taman" /></div><div className="about-copy"><p className="eyebrow">Tentang Kadoya House</p><h2>Warisan Kolonial,<br /><em>Kenangan yang Hidup</em></h2><span className="ornament" aria-hidden="true">◇</span><p>Kadoya House adalah rumah peninggalan era kolonial Belanda yang telah berdiri sejak tahun 1924. Terletak di kawasan sejuk Claket, Pacet, tempat ini menawarkan suasana tenang, udara segar, dan pengalaman menginap yang berbeda.</p><a className="outline-button" href="#menginap">Lihat fasilitas <span aria-hidden="true">→</span></a></div></section>

      <section className="stats section-shell" aria-label="Kadoya House dalam angka"><div><strong>1924</strong><span>Tahun Berdiri</span></div><div><strong>700</strong><span>MDPL Ketinggian</span></div><div><strong>8</strong><span>Kamar Nyaman</span></div><div><strong>50+</strong><span>Tamu Puas</span></div></section>

      <section className="stay section-shell" id="menginap"><div className="section-heading"><div><p className="eyebrow">Menginap di Kadoya</p><h2>Ruang untuk<br /><em>berhenti sejenak.</em></h2></div><p>Fasilitas berikut adalah gambaran awal pengalaman menginap di Kadoya House.</p></div><div className="stay-list">{stays.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><b aria-hidden="true">↗</b></article>)}</div></section>

      <section className="around section-shell" id="sekitar"><div className="around-intro"><p className="eyebrow">Sekitar Kadoya</p><h2>Jadikan perjalanan<br /><em>lebih berwarna.</em></h2><p>Selain beristirahat, ada banyak cara sederhana untuk menikmati suasana Claket dan Pacet. Pilih ritme perjalanan yang paling sesuai untukmu.</p></div><div className="nearby-grid">{nearby.map(([number, title, text, link]) => <article key={number}><span className="nearby-number">{number}</span><div><h3>{title}</h3><p>{text}</p><a href="#kontak">{link} <span aria-hidden="true">→</span></a></div></article>)}</div></section>

      <section className="gallery section-shell" id="galeri"><div className="section-heading"><div><p className="eyebrow">Galeri</p><h2>Beberapa kemungkinan.</h2></div><p>Arsitektur, taman, dan suasana Kadoya House.</p></div><div className="gallery-grid">{gallery.map((item, index) => <button className={`gallery-item gallery-item-${index}`} key={item.title} type="button" onClick={() => setActiveImage(index)}><img src={item.image} alt={item.title} /><span>{item.title} <b aria-hidden="true">↗</b></span></button>)}</div></section>

      <section className="location section-shell" id="lokasi"><div><p className="eyebrow">Lokasi</p><h2>Naik sedikit.<br /><em>Tarik napas.</em></h2><p>Kadoya House berada di Jl. Anggrek IV, Claket, Pacet, Mojokerto — di mana lanskap mulai menanjak dan udara terasa berubah.</p></div><div className="location-card"><img src="/rumah-depan.jpeg" alt="Fasad rumah kolonial di lingkungan Kadoya House" /><span>Claket<br /><b>Pacet, Jawa Timur</b></span></div></section>
      <section className="contact section-shell" id="kontak"><p className="eyebrow">Mulai dari sini</p><h2>Waktu yang lebih<br /><em>berarti.</em></h2><p>Hubungi kami untuk bertanya tentang ketersediaan dan merencanakan kunjungan.</p><a className="booking-button contact-primary" href="mailto:hello@kadoyahouse.com">Hubungi Kadoya House <span aria-hidden="true">→</span></a></section>
      <footer className="site-footer"><span>© Kadoya House</span><span>Claket · Pacet · Mojokerto</span><div className="social-links" aria-label="Media sosial Kadoya House"><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok Kadoya House"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 3c.4 2.2 1.7 3.5 3.8 3.7v3a7.6 7.6 0 0 1-3.8-1.2v6.4a5.1 5.1 0 1 1-4.4-5.1v3.1a2.1 2.1 0 1 0 1.4 2V3h3Z" /></svg></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram Kadoya House"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r="1" className="social-fill" /></svg></a><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" aria-label="WhatsApp Kadoya House"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.5 8.5 0 1 0 12 3.5Z" /><path d="M8.8 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.6 1.1 1.5 2 2.7 2.6l.7-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.3.6-.2 1-1 1.6-1.9 1.5-3.8-.5-6.6-3.3-7.1-6.9-.1-.3.2-.6.3-.7Z" /></svg></a><a className="footer-back" href="#beranda">Kembali ke atas ↑</a></div></footer><a className="floating-whatsapp" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" aria-label="Chat WhatsApp Kadoya House"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.5 8.5 0 1 0 12 3.5Z" /><path d="M8.8 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.6 1.1 1.5 2 2.7 2.6l.7-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.3.6-.2 1-1 1.6-1.9 1.5-3.8-.5-6.6-3.3-7.1-6.9-.1-.3.2-.6.3-.7Z" /></svg></a>
      {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[activeImage].title} onClick={() => setActiveImage(null)}><button type="button" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Tutup galeri">Tutup ×</button><img src={gallery[activeImage].image} alt={gallery[activeImage].title} onClick={(event) => event.stopPropagation()} /></div>}
    </main>
  )
}
