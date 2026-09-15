'use client'

import Link from 'next/link'
import { useState } from 'react'

const images = [
  ['Tampak depan Kadoya House', '/kadoya-2.png', 'Arsitektur'],
  ['Rumah di antara pepohonan', '/kadoya-1.png', 'Lanskap'],
  ['Detail rumah dan taman', '/kadoya-2.png', 'Suasana'],
  ['Sore di teras Kadoya', '/kadoya-1.png', 'Momen'],
]

export default function GaleriPage() {
  const [active, setActive] = useState<number | null>(null)
  return <main className="inner-page"><header className="inner-header"><Link className="inner-logo" href="/"><img src="/logo-kadoya.png" alt="Kadoya House" /></Link><nav aria-label="Navigasi halaman"><Link href="/">Beranda</Link><Link href="/sekitar">Sekitar</Link><Link className="active" href="/galeri">Galeri</Link></nav><Link className="booking-button" href="/#kontak">Booking sekarang</Link></header><section className="inner-hero gallery-hero"><p className="eyebrow">Galeri Kadoya House</p><h1>Ruang yang menyimpan<br /><em>banyak suasana.</em></h1><p>Jelajahi sudut-sudut rumah, taman, dan lanskap Claket sebelum kamu datang.</p></section><section className="full-gallery section-shell"><div className="gallery-page-grid">{images.map(([title, image, category], index) => <button className={`gallery-page-item gallery-page-item-${index}`} type="button" key={title} onClick={() => setActive(index)}><img src={image} alt={title} /><span><small>{category}</small>{title}<b aria-hidden="true">↗</b></span></button>)}</div></section><section className="inner-cta"><p className="eyebrow">Lihat langsung</p><h2>Foto hanya permulaan.<br /><em>Suasananya menunggu.</em></h2><Link className="booking-button" href="/#kontak">Rencanakan kunjungan <span aria-hidden="true">→</span></Link></section><footer className="site-footer"><span>© Kadoya House</span><span>Claket · Pacet · Mojokerto</span><Link href="/">Kembali ke beranda</Link></footer>{active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={images[active][0]} onClick={() => setActive(null)}><button className="lightbox-close" type="button" onClick={() => setActive(null)}>Tutup ×</button><img src={images[active][1]} alt={images[active][0]} onClick={(event) => event.stopPropagation()} /></div>}</main>
}
