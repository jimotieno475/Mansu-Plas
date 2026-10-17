import { useEffect, useState } from 'react'
import { heroSlides, homes, types } from '../data.js'
import { kshShort } from '../lib.js'
import { useApp } from '../store.jsx'
import { Eyebrow, Photo } from './ui.jsx'

export default function Hero() {
  const { setHome, setQuery, setType } = useApp()
  const [i, setI] = useState(0)
  const [q, setQ] = useState(''), [t, setT] = useState('All')
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((n) => (n + 1) % heroSlides.length), 6500)
    return () => clearInterval(id)
  }, [i])
  const h = homes.find((x) => x.id === heroSlides[i].home)
  const go = (e) => { e.preventDefault(); setQuery(q); setType(t); document.getElementById('listings').scrollIntoView({ behavior: 'smooth' }) }
  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex h-[min(920px,100svh)] min-h-[700px] items-center overflow-hidden bg-[#374b3f] text-white max-sm:h-auto max-sm:items-start max-sm:pb-44 max-sm:pt-36">
      {heroSlides.map((s, k) => <Photo key={s.src} src={s.src} alt={k === i ? s.alt : ''} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ${k === i ? 'opacity-100' : 'opacity-0'}`} />)}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,28,21,.8),rgba(19,33,24,.5)_45%,rgba(15,29,20,.08)),linear-gradient(0deg,rgba(13,25,19,.55),transparent_30%)]" />
      <div className="wrap rise relative z-10 pt-14 max-sm:pt-0">
        <Eyebrow light><span className="h-px w-7 bg-current" />Houses for sale in Kenya</Eyebrow>
        <h1 id="hero-title" className="h-display text-[clamp(4.4rem,11vw,8.4rem)]">Homes,<br /><em className="text-[#e0c896]">across Kenya.</em></h1>
        <p className="my-6 max-w-[470px] text-sm leading-[1.9] text-[#f0eee6]">From Karen gardens to Nyali sea breezes. Watch the video tour, save your favourites and talk straight to Mansu.</p>
        <form onSubmit={go} className="grid max-w-[640px] grid-cols-2 gap-px bg-white/90 p-1 text-ink shadow-2xl sm:grid-cols-[1.4fr_1fr_auto]">
          <label className="col-span-2 flex flex-col px-4 py-2 text-[11px] text-muted sm:col-span-1">Where<input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Karen, Nyali, Nairobi…" className="min-w-0 bg-transparent text-base font-semibold text-ink placeholder:font-normal placeholder:text-muted/70" /></label>
          <label className="flex flex-col px-4 py-2 text-[11px] text-muted">Type<select value={t} onChange={(e) => setT(e.target.value)} className="bg-transparent text-base font-semibold text-ink">{types.map((x) => <option key={x}>{x}</option>)}</select></label>
          <button className="btn btn-dark m-1">Find homes</button>
        </form>
      </div>
      <button onClick={() => setHome(h)} className="absolute bottom-16 right-5 z-20 w-[250px] bg-paper/95 p-5 pr-14 text-left text-ink shadow-2xl transition hover:-translate-y-1 md:bottom-20 md:right-[max(48px,calc((100vw-1200px)/2))] md:w-[300px]">
        <span className="block text-[11px] text-muted">Featured home</span>
        <strong className="block font-display text-xl font-normal">{h.area} <i className="not-italic text-[#a89160]">·</i> {h.beds} beds</strong>
        <span className="text-[11px] text-muted">{h.title} · <b className="text-ink">{kshShort(h.price)}</b></span>
        <span className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-ink/20">↗</span>
      </button>
      <div className="absolute bottom-7 left-5 z-10 flex items-center gap-5 md:left-[max(48px,calc((100vw-1200px)/2))]">
        <a href="#intro" className="flex items-center gap-3 text-[10px] uppercase tracking-[.14em]"><span className="h-9 w-px bg-sand" />Scroll to discover</a>
        <div className="flex gap-2" role="group" aria-label="Choose featured photo">{heroSlides.map((s, k) => <button key={s.home} aria-label={`Show photo ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? 'w-8 bg-sand' : 'w-3 bg-white/50'}`} />)}</div>
      </div>
    </section>
  )
}
