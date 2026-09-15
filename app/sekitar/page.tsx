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
      <section className="inner-hero"><p className="eyebrow">Sekitar Kadoya House</p><h1>Perjalanan yang<br /><em>berlanjut di luar pintu.</em></h1><p>Jadikan Kadoya House sebagai titik awal untuk mengenal alam, rasa, dan ritme hidup Pacet.</p></section>
      <section className="place-grid section-shell"><div className="inner-intro"><p className="eyebrow">Rekomendasi lokal</p><h2>Temukan sisi lain<br /><em>Claket & Pacet.</em></h2></div>{places.map(([number, title, text, category]) => <article className="place-card" key={number}><span>{number}</span><div><small>{category}</small><h3>{title}</h3><p>{text}</p><Link href="/#kontak">Lihat rekomendasi <span aria-hidden="true">→</span></Link></div></article>)}</section>
      <section className="inner-cta"><p className="eyebrow">Rencanakan pelarian kecil</p><h2>Datang dengan rasa ingin tahu.<br /><em>Pulang membawa cerita.</em></h2><Link className="booking-button" href="/#kontak">Hubungi Kadoya House <span aria-hidden="true">→</span></Link></section>
      <footer className="site-footer"><span>© Kadoya House</span><span>Claket · Pacet · Mojokerto</span><div className="social-links" aria-label="Media sosial Kadoya House"><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok Kadoya House">TikTok</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram Kadoya House">Instagram</a><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" aria-label="WhatsApp Kadoya House">WhatsApp</a><Link className="footer-back" href="/">Kembali ke beranda</Link></div></footer><a className="floating-whatsapp" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" aria-label="Chat WhatsApp Kadoya House"><span aria-hidden="true">WA</span></a>
    </main>
  )
}
