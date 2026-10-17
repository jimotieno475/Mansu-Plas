import { useEffect, useState } from 'react'
import { PHOTOS, CONTACT } from '../data.js'
import { ksh, wa, mail, ytId } from '../lib.js'
import { useApp } from '../store.jsx'
import { Modal, Heart, Photo } from './ui.jsx'

function Video({ h }) {
  const id = ytId(h.video)
  const [play, setPlay] = useState(false)
  useEffect(() => setPlay(false), [h.id])
  if (!id) return (
    <div className="grid place-items-center gap-3 bg-deep p-8 text-center text-white">
      <span className="grid h-14 w-14 place-items-center rounded-full border border-sand text-sand">▶</span>
      <p className="max-w-[40ch] text-sm text-[#c3c9bf]">The video tour for this home is being prepared. Ask Mansu for a private walkthrough, or browse tours of {h.area} homes on YouTube.</p>
      <a className="btn btn-gold" href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${h.area} Kenya house tour`)}`} target="_blank" rel="noreferrer">Search YouTube ↗</a>
    </div>)
  return (
    <div className="relative aspect-video bg-black">
      {play
        ? <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={`${h.title} video tour`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        : <button className="group absolute inset-0" onClick={() => setPlay(true)} aria-label={`Play video tour of ${h.title}`}>
            <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100" />
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sand text-xl text-ink transition group-hover:scale-110">▶</span>
          </button>}
    </div>)
}

function Calc({ price }) {
  const [dep, setDep] = useState(20), [yrs, setYrs] = useState(20), [rate, setRate] = useState(13)
  const loan = price * (1 - dep / 100), r = rate / 1200, n = yrs * 12
  const m = r ? (loan * r) / (1 - Math.pow(1 + r, -n)) : loan / n
  const row = (l, v, set, min, max, step, suf) => <label className="block text-xs text-muted"><span className="flex justify-between">{l}<b className="text-ink">{v}{suf}</b></span><input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} className="w-full" /></label>
  return (
    <div className="space-y-3 border border-ink/15 bg-cream p-5">
      <h3 className="font-display text-xl font-normal">Monthly repayment estimate</h3>
      {row('Deposit', dep, setDep, 10, 60, 5, '%')}{row('Years', yrs, setYrs, 5, 25, 1, '')}{row('Interest rate', rate, setRate, 8, 20, 0.5, '%')}
      <div className="flex items-end justify-between border-t border-ink/15 pt-3"><span className="text-xs text-muted">About per month</span><b className="font-display text-2xl font-normal text-forest">{ksh(m)}</b></div>
      <p className="text-[11px] text-muted">An estimate only. Ask your bank or SACCO for exact terms.</p>
    </div>)
}

function Enquiry({ h }) {
  const [f, setF] = useState({ name: '', phone: '', date: '' })
  const set = (k, v) => setF((o) => ({ ...o, [k]: v }))
  const body = `Hello Mansu, I'm ${f.name || '[my name]'} and I'm interested in ${h.title} (${h.area}, ${h.county}), listed at ${ksh(h.price)}. Ref ${h.id}.${f.date ? ` I'd like to view it on ${f.date}.` : ''}${f.phone ? ` You can reach me on ${f.phone}.` : ''}`
  const inp = 'w-full rounded-sm border border-ink/20 bg-cream px-3 py-2.5 text-sm'
  return (
    <div className="space-y-3 bg-forest p-5 text-white">
      <h3 className="font-display text-xl font-normal">Contact {CONTACT.name} about this home</h3>
      <input className={`${inp} text-ink`} placeholder="Your name" aria-label="Your name" value={f.name} onChange={(e) => set('name', e.target.value)} />
      <input className={`${inp} text-ink`} placeholder="Your phone" aria-label="Your phone" value={f.phone} onChange={(e) => set('phone', e.target.value)} />
      <label className="block text-xs text-[#c3c9bf]">Preferred viewing date<input type="date" className={`${inp} mt-1 text-ink`} value={f.date} onChange={(e) => set('date', e.target.value)} /></label>
      <a href={wa(body)} target="_blank" rel="noreferrer" className="btn btn-gold w-full">Message on WhatsApp ↗</a>
      <div className="grid grid-cols-2 gap-2"><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="btn btn-line">Call</a><a href={mail(`Enquiry: ${h.title}`, body)} className="btn btn-line">Email</a></div>
    </div>)
}

export default function Detail() {
  const { home: h, setHome, wish, toggleWish } = useApp()
  const [img, setImg] = useState(0)
  useEffect(() => setImg(0), [h?.id])
  if (!h) return null
  const close = () => setHome(null)
  const facts = [['Bedrooms', h.beds], ['Bathrooms', h.baths], ['Floor area', `${h.size} sqm`], ['Plot size', h.plot], ['Parking', `${h.parking} cars`], ['Year built', h.year], ['Type', h.type], ['Status', h.status]]
  return (
    <Modal onClose={close} wide>
      <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-ink/10 bg-paper/95 px-4 py-3 backdrop-blur">
        <div className="min-w-0"><b className="block truncate font-display text-lg font-normal">{h.title}</b><small className="text-muted">{h.area}, {h.county}</small></div>
        <div className="flex shrink-0 gap-2"><button onClick={() => toggleWish(h.id)} className="btn border-ink/25 !min-h-[40px] !px-4"><Heart on={wish.includes(h.id)} /><span className="hidden sm:inline">{wish.includes(h.id) ? 'Saved' : 'Save'}</span></button><button onClick={close} aria-label="Close" className="h-10 w-10 rounded-full border border-ink/25">✕</button></div>
      </div>
      <div className="grid gap-8 p-4 md:grid-cols-[1.6fr_1fr] md:p-6">
        <div className="min-w-0 space-y-8">
          <div>
            <Photo src={PHOTOS[h.photos[img]]} alt={`${h.title} photo ${img + 1}`} className="aspect-[16/10] w-full object-cover" />
            <div className="mt-2 grid grid-cols-5 gap-2">{h.photos.map((p, k) => <button key={p} onClick={() => setImg(k)} aria-label={`Photo ${k + 1}`} aria-current={k === img} className={`overflow-hidden border-2 ${k === img ? 'border-forest' : 'border-transparent opacity-70 hover:opacity-100'}`}><Photo src={PHOTOS[p]} alt="" className="aspect-[4/3] w-full object-cover" /></button>)}</div>
          </div>
          <div><div className="font-display text-4xl">{ksh(h.price)}</div><p className="mt-1 text-sm text-muted">{h.type} for sale · {h.area}, {h.county} · Ref {h.id}</p></div>
          <div className="grid grid-cols-2 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-4">{facts.map(([l, v]) => <div key={l} className="bg-cream p-3"><small className="block text-[11px] text-muted">{l}</small><b className="font-display text-lg font-normal">{v}</b></div>)}</div>
          <div><h3 className="mb-2 font-display text-2xl font-normal">About this home</h3><p className="max-w-[62ch] leading-[1.85] text-ink/85">{h.desc}</p></div>
          <div><h3 className="mb-3 font-display text-2xl font-normal">Features</h3><ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">{h.features.map((f) => <li key={f} className="flex gap-2 border-b border-ink/10 pb-2 text-sm"><span className="text-[#9c8555]">✓</span>{f}</li>)}</ul></div>
          <div><h3 className="mb-3 font-display text-2xl font-normal">Video tour</h3><Video h={h} /></div>
        </div>
        <aside className="space-y-5 md:sticky md:top-20 md:self-start"><Enquiry h={h} /><Calc price={h.price} /></aside>
      </div>
    </Modal>
  )
}
