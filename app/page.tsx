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
  { title: 'Tampak depan Kadoya House', image: '/kadoya-2.png' },
  { title: 'Rumah di antara pepohonan', image: '/kadoya-1.png' },
  { title: 'Detail arsitektur dan lanskap', image: '/kadoya-2.png' },
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
        <div className="hero-backdrop" aria-label="Kadoya House di antara pepohonan" role="img" /><div className="hero-wash" />
        <div className="hero-copy"><p className="hero-kicker">Est. 1924 <span aria-hidden="true">—</span></p><h1>Kenyamanan<br />dalam Warisan<br />di Kadoya House</h1><span className="ornament" aria-hidden="true">◇</span><p className="hero-intro">Penginapan bergaya kolonial Belanda yang berdiri sejak tahun 1924 di sejuknya Claket, Pacet.</p><div className="hero-actions"><a className="booking-button" href="#kontak"><span aria-hidden="true">▣</span> Booking sekarang</a><a className="video-button" href="#galeri"><span aria-hidden="true">▶</span> Lihat galeri</a></div></div><p className="hero-scroll">Scroll untuk menjelajah <span aria-hidden="true">↓</span></p>
      </section>

      <section className="about section-shell" id="tentang"><div className="about-image"><img src="/kadoya-1.png" alt="Bangunan Kadoya House dengan atap genteng dan taman" /></div><div className="about-copy"><p className="eyebrow">Tentang Kadoya House</p><h2>Warisan Kolonial,<br /><em>Kenangan yang Hidup</em></h2><span className="ornament" aria-hidden="true">◇</span><p>Kadoya House adalah rumah peninggalan era kolonial Belanda yang telah berdiri sejak tahun 1924. Terletak di kawasan sejuk Claket, Pacet, tempat ini menawarkan suasana tenang, udara segar, dan pengalaman menginap yang berbeda.</p><a className="outline-button" href="#menginap">Lihat fasilitas <span aria-hidden="true">→</span></a></div></section>

      <section className="stats section-shell" aria-label="Kadoya House dalam angka"><div><strong>1924</strong><span>Tahun Berdiri</span></div><div><strong>700</strong><span>MDPL Ketinggian</span></div><div><strong>8</strong><span>Kamar Nyaman</span></div><div><strong>50+</strong><span>Tamu Puas</span></div></section>

      <section className="stay section-shell" id="menginap"><div className="section-heading"><div><p className="eyebrow">Menginap di Kadoya</p><h2>Ruang untuk<br /><em>berhenti sejenak.</em></h2></div><p>Fasilitas berikut adalah gambaran awal pengalaman menginap di Kadoya House.</p></div><div className="stay-list">{stays.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><b aria-hidden="true">↗</b></article>)}</div></section>

      <section className="around section-shell" id="sekitar"><div className="around-intro"><p className="eyebrow">Sekitar Kadoya</p><h2>Jadikan perjalanan<br /><em>lebih berwarna.</em></h2><p>Selain beristirahat, ada banyak cara sederhana untuk menikmati suasana Claket dan Pacet. Pilih ritme perjalanan yang paling sesuai untukmu.</p></div><div className="nearby-grid">{nearby.map(([number, title, text, link]) => <article key={number}><span className="nearby-number">{number}</span><div><h3>{title}</h3><p>{text}</p><a href="#kontak">{link} <span aria-hidden="true">→</span></a></div></article>)}</div></section>

      <section className="gallery section-shell" id="galeri"><div className="section-heading"><div><p className="eyebrow">Galeri</p><h2>Beberapa kemungkinan.</h2></div><p>Arsitektur, taman, dan suasana Kadoya House.</p></div><div className="gallery-grid">{gallery.map((item, index) => <button className={`gallery-item gallery-item-${index}`} key={item.title} type="button" onClick={() => setActiveImage(index)}><img src={item.image} alt={item.title} /><span>{item.title} <b aria-hidden="true">↗</b></span></button>)}</div></section>

      <section className="location section-shell" id="lokasi"><div><p className="eyebrow">Lokasi</p><h2>Naik sedikit.<br /><em>Tarik napas.</em></h2><p>Kadoya House berada di Jl. Anggrek IV, Claket, Pacet, Mojokerto — di mana lanskap mulai menanjak dan udara terasa berubah.</p></div><div className="location-card"><img src="/kadoya-2.png" alt="Lingkungan Kadoya House di Claket, Pacet" /><span>Claket<br /><b>Pacet, Jawa Timur</b></span></div></section>
      <section className="contact section-shell" id="kontak"><p className="eyebrow">Mulai dari sini</p><h2>Waktu yang lebih<br /><em>berarti.</em></h2><p>Hubungi kami untuk bertanya tentang ketersediaan dan merencanakan kunjungan.</p><a className="booking-button" href="mailto:hello@kadoyahouse.com">Hubungi Kadoya House <span aria-hidden="true">→</span></a></section>
      <footer className="site-footer"><span>© Kadoya House</span><span>Claket · Pacet · Mojokerto</span><a href="#beranda">Kembali ke atas ↑</a></footer>
      {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[activeImage].title} onClick={() => setActiveImage(null)}><button type="button" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Tutup galeri">Tutup ×</button><img src={gallery[activeImage].image} alt={gallery[activeImage].title} onClick={(event) => event.stopPropagation()} /></div>}
    </main>
  )
}
