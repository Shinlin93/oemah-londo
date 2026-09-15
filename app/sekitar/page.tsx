import Link from 'next/link'

const places = [
  ['01', 'Air Terjun Dlundung', 'Jalur hijau, suara air, dan udara pegunungan untuk pagi yang lebih segar.', 'Wisata alam'],
  ['02', 'Warung Pacet', 'Temukan kopi, jagung bakar, dan hidangan rumahan hangat di sekitar Claket.', 'Kuliner lokal'],
  ['03', 'Pemandian Air Panas', 'Ritual santai untuk menghangatkan tubuh setelah menjelajah lereng.', 'Relaksasi'],
  ['04', 'Pasar Tradisional', 'Berjalan pelan di antara hasil bumi dan kehidupan lokal yang autentik.', 'Budaya setempat'],
  ['05', 'Bukit Sunrise', 'Saksikan cahaya pagi dari dataran tinggi Pacet bersama orang terdekat.', 'Pemandangan'],
  ['06', 'Ruang Keluarga', 'Pilihan aktivitas ringan untuk bermain, berfoto, dan berkumpul bersama.', 'Waktu bersama'],
]

export default function SekitarPage() {
  return (
    <main className="inner-page">
      <header className="inner-header"><Link className="inner-logo" href="/"><img src="/logo-kadoya.png" alt="Kadoya House" /></Link><nav aria-label="Navigasi halaman"><Link href="/">Beranda</Link><Link className="active" href="/sekitar">Sekitar</Link><Link href="/galeri">Galeri</Link></nav><Link className="booking-button" href="/#kontak">Booking sekarang</Link></header>
      <section className="inner-hero"><p className="eyebrow">Sekitar Kadoya House</p><h1>Keluar sebentar.<br /><em>Lihat Pacet lebih dekat.</em></h1><p>Dari Kadoya House, kamu bisa berjalan mencari udara segar, makanan hangat, dan tempat untuk duduk lebih lama.</p></section>
      <section className="place-grid section-shell"><div className="inner-intro"><p className="eyebrow">Rekomendasi lokal</p><h2>Temukan sisi lain<br /><em>Claket & Pacet.</em></h2></div>{places.map(([number, title, text, category]) => <article className="place-card" key={number}><span>{number}</span><div><small>{category}</small><h3>{title}</h3><p>{text}</p><Link href="/#kontak">Lihat rekomendasi <span aria-hidden="true">→</span></Link></div></article>)}</section>
      <section className="inner-cta"><p className="eyebrow">Rencanakan kunjungan</p><h2>Datang untuk beristirahat.<br /><em>Gunakan waktu sesukamu.</em></h2><Link className="booking-button" href="/#kontak">Hubungi Kadoya House <span aria-hidden="true">→</span></Link></section>
      <footer className="site-footer"><span>© Kadoya House</span><span>Claket · Pacet · Mojokerto</span><div className="social-links" aria-label="Media sosial Kadoya House"><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok Kadoya House"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 3c.4 2.2 1.7 3.5 3.8 3.7v3a7.6 7.6 0 0 1-3.8-1.2v6.4a5.1 5.1 0 1 1-4.4-5.1v3.1a2.1 2.1 0 1 0 1.4 2V3h3Z" /></svg></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram Kadoya House"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r="1" className="social-fill" /></svg></a><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" aria-label="WhatsApp Kadoya House"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.5 8.5 0 1 0 12 3.5Z" /><path d="M8.8 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.6 1.1 1.5 2 2.7 2.6l.7-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.3.6-.2 1-1 1.6-1.9 1.5-3.8-.5-6.6-3.3-7.1-6.9-.1-.3.2-.6.3-.7Z" /></svg></a><Link className="footer-back" href="/">Kembali ke beranda</Link></div></footer><a className="floating-whatsapp" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" aria-label="Chat WhatsApp Kadoya House"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.5 8.5 0 1 0 12 3.5Z" /><path d="M8.8 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.6 1.1 1.5 2 2.7 2.6l.7-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.3.6-.2 1-1 1.6-1.9 1.5-3.8-.5-.5-6.6-3.3-7.1-6.9-.1-.3.2-.6.3-.7Z" /></svg></a>
    </main>
  )
}
