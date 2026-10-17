import { useState } from 'react'
import { PHOTOS, CONTACT, homes, areas, why, steps, reviews, stats } from '../data.js'
import { wa, mail } from '../lib.js'
import { useApp } from '../store.jsx'
import { Reveal, CountUp } from '../hooks.jsx'
import { Eyebrow, Photo } from './ui.jsx'
import { Brand } from './Navbar.jsx'

const H2 = 'h-display text-[clamp(3.4rem,6.4vw,6.2rem)]'
export function Trust() {
  return (
    <section id="intro" aria-label="Mansu Plas at a glance" className="border-b border-ink/10 bg-cream"><div className="wrap grid grid-cols-2 gap-y-6 py-7 md:grid-cols-4">
      {stats.map(([n, l, s], i) => <div key={l} className={`md:px-8 ${i ? 'md:border-l md:border-ink/15' : 'md:pl-0'}`}><b className="block font-display text-3xl font-normal md:text-4xl"><CountUp to={n} />{s === '+' ? '' : s}</b><span className="text-[11px] text-muted">{l}</span></div>)}
    </div></section>
  )
}

const area = ['md:row-span-2', '', '', '', '', 'col-span-2 md:col-span-1']
export function Areas() {
  const { setQuery, setType } = useApp()
  const go = (c) => { setQuery(c); setType('All'); document.getElementById('listings').scrollIntoView({ behavior: 'smooth' }) }
  return (
    <section id="areas" aria-labelledby="a-title" className="wrap py-[clamp(80px,10vw,130px)]">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-8">
        <div><Eyebrow>02 / Find your neighbourhood</Eyebrow><h2 id="a-title" className={H2}>Where in Kenya<br /><em className="text-moss">feels like you?</em></h2></div>
        <p className="max-w-[300px] text-xs leading-[1.9] text-muted">From Nairobi suburbs to the coast and the highlands. Select an area to see its homes.</p>
      </Reveal>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-2.5 md:auto-rows-[260px] md:grid-cols-3 md:gap-4">
        {areas.map(([c, r, tag, ph], i) => {
          const n = homes.filter((h) => h.area === c).length
          return (
            <button key={c} onClick={() => go(c)} className={`group relative overflow-hidden text-left text-white ${area[i]}`}>
              <Photo src={PHOTOS[ph]} alt={`${c} homes`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 text-[10px] tracking-widest">{n} HOME{n === 1 ? '' : 'S'}</span>
              <span className="absolute bottom-3 left-3 right-10 md:bottom-4 md:left-4"><small className="block text-[10px] opacity-85">{r}</small><strong className="font-display text-2xl font-normal md:text-3xl">{c}</strong><i className="block text-[11px] opacity-90">{tag}</i></span>
              <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full border border-white/70 transition group-hover:bg-sand group-hover:text-ink">↗</span>
            </button>)
        })}
      </div>
    </section>
  )
}

export function Why() {
  return (
    <section id="why" aria-labelledby="w-title" className="bg-deep py-[clamp(70px,9vw,120px)] text-white"><div className="wrap grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-[11%]">
      <Reveal>
        <Eyebrow light>03 / The Mansu way</Eyebrow>
        <h2 id="w-title" className={H2}>Buy with<br /><em className="text-[#dec99b]">confidence.</em></h2>
        <p className="my-6 max-w-[380px] text-sm leading-[2] text-[#c3c9bf]">Buying a home is the biggest decision many of us make. We keep it clear, personal and honest from the first video to the last signature.</p>
        <a href="#contact" className="btn border-[#d9cbad] text-white hover:bg-white/10">Talk to Mansu <span>↗</span></a>
      </Reveal>
      <div className="border-t border-white/20">{why.map(([t, d, p], i) => (
        <Reveal key={t} className="grid min-h-[112px] grid-cols-[44px_1fr_25px] items-center gap-4 border-b border-white/20 py-5">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d7c89e78]"><svg viewBox="0 0 32 32" className="h-6 w-6 fill-none stroke-[#e1d1a8] stroke-[1.2]" strokeLinecap="round" strokeLinejoin="round"><path d={p} /></svg></span>
          <div><h3 className="font-display text-xl font-normal">{t}</h3><p className="text-xs leading-[1.75] text-[#b8c0b6]">{d}</p></div>
          <span className="self-start pt-1 text-[10px] text-[#d4c295]">0{i + 1}</span>
        </Reveal>))}</div>
    </div></section>
  )
}

export function Process() {
  return (
    <section id="process" aria-labelledby="p-title" className="wrap py-[clamp(80px,10vw,130px)]">
      <Reveal className="mb-10"><Eyebrow>04 / How buying works</Eyebrow><h2 id="p-title" className={H2}>Four steps to<br /><em className="text-moss">your front door.</em></h2></Reveal>
      <ol className="grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-4">
        {steps.map(([t, d], i) => <li key={t} className="bg-paper p-7"><span className="font-display text-5xl italic text-sand">{i + 1}</span><h3 className="mt-4 font-display text-2xl font-normal">{t}</h3><p className="mt-2 text-sm leading-[1.8] text-muted">{d}</p></li>)}
      </ol>
    </section>
  )
}

export function Stories() {
  const [i, setI] = useState(0)
  const row = [0, 1, 2].map((k) => reviews[(i + k) % 3])
  return (
    <section id="stories" aria-labelledby="s-title" className="bg-cream py-[clamp(70px,9vw,120px)]"><div className="wrap">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div><Eyebrow>05 / Happy homeowners</Eyebrow><h2 id="s-title" className={H2}>Keys in hand,<br /><em className="text-moss">stories to tell.</em></h2></div>
        <div className="flex gap-2">{[['←', 2, 'Previous review'], ['→', 1, 'Next review']].map(([a, d, l]) => <button key={a} aria-label={l} onClick={() => setI((i + d) % 3)} className="h-11 w-11 rounded-full border border-ink/25 transition hover:bg-forest hover:text-white">{a}</button>)}</div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">{row.map(([q, n, w], k) => (
        <article key={n} className={`flex min-h-[250px] flex-col justify-between border p-7 ${k === 1 ? 'border-forest bg-forest text-white' : 'border-ink/15 bg-paper'}`}>
          <div><div className="text-sand" aria-label="5 out of 5 stars">★★★★★</div><blockquote className="mt-3 font-display text-xl leading-snug">“{q}”</blockquote></div>
          <div className="mt-6 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-sand text-xs font-bold text-ink">{n.split(' ').map((x) => x[0]).join('')}</span><span><b className="block text-sm">{n}</b><small className={k === 1 ? 'text-[#c3c9bf]' : 'text-muted'}>{w}</small></span></div>
        </article>))}</div>
    </div></section>
  )
}

export function Contact() {
  const [f, setF] = useState({ name: '', phone: '', want: '', note: '' })
  const set = (k, v) => setF((o) => ({ ...o, [k]: v }))
  const body = `Hello Mansu, I'm ${f.name || '[my name]'}. ${f.want ? `I'm looking for ${f.want}.` : ''} ${f.note} ${f.phone ? `Call me on ${f.phone}.` : ''}`.replace(/\s+/g, ' ').trim()
  const inp = 'w-full rounded-sm border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/55'
  const tel = CONTACT.phone.replace(/\s/g, '')
  return (
    <section id="contact" aria-labelledby="c-title" className="relative overflow-hidden bg-forest py-[clamp(70px,9vw,120px)] text-white">
      <Photo src={PHOTOS.h12} alt="" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="wrap relative grid gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow light>Let's talk</Eyebrow>
          <h2 id="c-title" className="h-display text-[clamp(3.4rem,7vw,6.4rem)]">Contact<br /><em className="text-[#e2cc9a]">{CONTACT.name}.</em></h2>
          <p className="my-5 max-w-[420px] text-sm leading-[1.9] text-[#efeee6]">Questions about a home, a viewing or financing? Message directly and get a personal reply, usually within the hour.</p>
          <div className="space-y-3 text-sm">
            <a href={wa('Hello Mansu, I would like to know more about your homes.')} target="_blank" rel="noreferrer" className="btn btn-gold">WhatsApp Mansu ↗</a>
            <p><a href={`tel:${tel}`} className="font-display text-3xl hover:text-sand">{CONTACT.phone}</a></p>
            <p><a href={`mailto:${CONTACT.email}`} className="hover:text-sand">{CONTACT.email}</a></p>
            <p className="text-[#c3c9bf]">{CONTACT.office} · {CONTACT.hours}</p>
          </div>
        </Reveal>
        <Reveal className="space-y-3 self-start bg-deep/70 p-6 backdrop-blur">
          <h3 className="font-display text-2xl font-normal">Tell us what you're looking for</h3>
          <input className={inp} placeholder="Your name" aria-label="Your name" value={f.name} onChange={(e) => set('name', e.target.value)} />
          <input className={inp} placeholder="Phone number" aria-label="Phone number" value={f.phone} onChange={(e) => set('phone', e.target.value)} />
          <select className={`${inp} text-white`} aria-label="What are you looking for" value={f.want} onChange={(e) => set('want', e.target.value)}><option value="" className="text-ink">I'm looking to…</option>{['buy a home', 'book a viewing', 'list my house for sale', 'understand financing'].map((o) => <option key={o} className="text-ink">{o}</option>)}</select>
          <textarea rows="3" className={inp} placeholder="Area, budget, bedrooms…" aria-label="Message" value={f.note} onChange={(e) => set('note', e.target.value)} />
          <div className="grid grid-cols-2 gap-2"><a href={wa(body)} target="_blank" rel="noreferrer" className="btn btn-gold">WhatsApp ↗</a><a href={mail('Enquiry from Mansu Plas website', body)} className="btn btn-line">Email</a></div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  const col = (t, items) => <div><h3 className="mb-3 font-display text-lg font-normal text-white">{t}</h3>{items.map(([h, l]) => <a key={l} href={h} className="block py-1 text-xs hover:text-sand">{l}</a>)}</div>
  return (
    <footer className="bg-deep pb-[env(safe-area-inset-bottom,0px)] text-[#b8c0b6]">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.7fr_1fr]">
        <div><div className="text-white"><Brand /></div><p className="mt-4 text-xs leading-[1.9]">Quality homes for sale across Kenya.<br />Honest advice, from first video to final keys.</p></div>
        {col('Explore', [['#listings', 'Homes for sale'], ['#areas', 'Areas'], ['#why', 'Why Mansu'], ['#process', 'How it works']])}
        {col('Popular areas', [['#areas', 'Karen'], ['#areas', 'Runda'], ['#areas', 'Nyali'], ['#areas', 'Diani']])}
        <div><h3 className="mb-3 font-display text-lg font-normal text-white">Reach Mansu</h3><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="block py-1 text-xs text-white">{CONTACT.phone}</a><a href={`mailto:${CONTACT.email}`} className="block py-1 text-xs">{CONTACT.email}</a><p className="py-1 text-xs">{CONTACT.office}</p></div>
      </div>
      <div className="wrap flex flex-wrap justify-between gap-2 border-t border-white/15 py-4 text-[11px]"><span>© {new Date().getFullYear()} Mansu Plas</span><span>Listings are illustrative samples until replaced with your own.</span><a href="#home">Back to top ↑</a></div>
    </footer>
  )
}

export function WhatsAppFab() {
  return <a href={wa('Hello Mansu, I found you on your website.')} target="_blank" rel="noreferrer" aria-label="Chat with Mansu on WhatsApp" className="fixed bottom-[calc(16px+env(safe-area-inset-bottom,0px))] right-4 z-40 flex h-14 items-center gap-2 rounded-full bg-[#25a55a] px-5 text-sm font-semibold text-white shadow-xl transition hover:scale-105"><svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M12 2a10 10 0 00-8.600 15.100L2 22l5-1.300A10 10 0 1012 2zm5.200 14.100c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.200-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800 0-1.300.7-1.900.9-2.200.2-.3.5-.3.700-.3h.5c.2 0 .4 0 .6.500.2.600.8 2 .9 2.200.1.100.1.300 0 .5-.1.200-.2.300-.3.500l-.4.500c-.1.100-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1.200-.2.700-.8.900-1.100.2-.3.400-.2.600-.1l2 .9c.3.200.5.200.5.300.1.200.1.800-.1 1.400z" /></svg><span className="hidden sm:inline">Chat with Mansu</span></a>
}
