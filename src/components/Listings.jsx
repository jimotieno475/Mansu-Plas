import { useMemo, useState } from 'react'
import { PHOTOS, homes, types } from '../data.js'
import { ksh, kshShort } from '../lib.js'
import { useApp } from '../store.jsx'
import { Reveal } from '../hooks.jsx'
import { Heart, Eyebrow, Photo } from './ui.jsx'

function Card({ h, i }) {
  const { wish, toggleWish, setHome } = useApp()
  return (
    <article className="group">
      <div className="relative h-[300px] cursor-pointer overflow-hidden bg-[#d3d1c5]" onClick={() => setHome(h)} tabIndex={0} role="button" aria-label={`View ${h.title}`} onKeyDown={(e) => e.key === 'Enter' && setHome(h)}>
        <Photo src={PHOTOS[h.photos[0]]} alt={`${h.title}, ${h.area}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.055] group-hover:brightness-90" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111a15a8] to-transparent" />
        <span className={`absolute left-3.5 top-3.5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${h.status === 'For sale' ? 'bg-paper text-ink' : 'bg-sand text-ink'}`}>{h.status}</span>
        <button aria-label={wishLabel(wish, h)} onClick={(e) => { e.stopPropagation(); toggleWish(h.id) }} className="absolute right-3.5 top-3.5 grid h-9 w-9 place-items-center rounded-full border border-white/70 bg-black/20 text-white backdrop-blur transition hover:bg-sand hover:text-ink"><Heart on={wish.includes(h.id)} /></button>
        <span className="absolute bottom-3.5 left-4 text-[11px] tracking-[.12em] text-white">{h.area.toUpperCase()}, {h.county.toUpperCase()}</span>
        <span className="absolute bottom-3 right-3.5 flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-[11px] text-white backdrop-blur">▶ Video tour</span>
      </div>
      <div className="pt-4">
        <div className="flex justify-between text-[10px] uppercase tracking-[.1em] text-[#898679]"><span>{h.type}</span><span>{h.size} sqm · {h.plot}</span></div>
        <h3 className="my-1.5 font-display text-[26px] font-normal leading-tight">{h.title}</h3>
        <p className="text-xs leading-[1.8] text-muted">{h.blurb}</p>
        <div className="mt-4 flex items-end justify-between border-t border-ink/15 pt-3"><div><b className="font-display text-2xl font-normal">{kshShort(h.price)}</b><div className="text-[11px] text-muted">{h.beds} beds · {h.baths} baths · {h.parking} parking</div></div><button className="text-xs font-semibold" onClick={() => setHome(h)}>View home <span className="ml-1 text-[#9c8555]">↗</span></button></div>
      </div>
    </article>
  )
}
const wishLabel = (w, h) => (w.includes(h.id) ? 'Remove from favourites' : 'Save to favourites')

export default function Listings() {
  const { query: q, setQuery: setQ, type, setType } = useApp()
  const [beds, setBeds] = useState(0), [max, setMax] = useState(150000000), [sort, setSort] = useState('new')
  const list = useMemo(() => {
    const by = { new: () => 0, low: (a, b) => a.price - b.price, high: (a, b) => b.price - a.price, beds: (a, b) => b.beds - a.beds }
    return homes.filter((h) => (type === 'All' || h.type === type) && h.beds >= beds && h.price <= max && (h.title + h.area + h.county + h.type).toLowerCase().includes(q.toLowerCase())).sort(by[sort])
  }, [q, type, beds, max, sort])
  const sel = 'rounded-sm border border-ink/20 bg-cream px-4 py-3 text-sm'
  return (
    <section id="listings" aria-labelledby="l-title" className="wrap py-[clamp(80px,10vw,130px)]">
      <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-8">
        <div><Eyebrow>01 / Homes for sale</Eyebrow><h2 id="l-title" className="h-display text-[clamp(3.4rem,6.4vw,6.2rem)]">Find the one<br /><em className="text-moss">you'll call home.</em></h2></div>
        <p className="max-w-[300px] text-xs leading-[1.9] text-muted">Every listing has full details and a video tour. Save the ones you like and message Mansu when you are ready to view.</p>
      </Reveal>
      <div className="mb-10 grid gap-3 border-y border-ink/15 py-4 md:grid-cols-[1.3fr_1fr_auto_auto] md:items-center">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search area, county or home" aria-label="Search homes" className={sel} />
        <label className="flex items-center gap-3 text-xs text-muted">Up to <b className="w-20 text-ink">{kshShort(max)}</b><input type="range" min="5000000" max="150000000" step="1000000" value={max} onChange={(e) => setMax(+e.target.value)} className="w-full" /></label>
        <select value={beds} onChange={(e) => setBeds(+e.target.value)} aria-label="Minimum bedrooms" className={sel}>{[0, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n ? `${n}+ beds` : 'Any beds'}</option>)}</select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort homes" className={sel}><option value="new">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="beds">Most bedrooms</option></select>
        <div className="flex flex-wrap gap-2 md:col-span-4">{types.map((r) => <button key={r} onClick={() => setType(r)} className={`rounded-sm border px-4 py-2 text-xs font-semibold tracking-wide transition ${type === r ? 'border-forest bg-forest text-white' : 'border-ink/20 hover:border-forest'}`}>{r}</button>)}</div>
      </div>
      <p className="mb-6 text-xs text-muted" aria-live="polite">{list.length} home{list.length === 1 ? '' : 's'} found</p>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{list.map((h, i) => <Card key={h.id} h={h} i={i} />)}</div>
      {!list.length && <div className="py-16 text-center text-muted">No homes match yet. <button className="font-semibold text-forest underline" onClick={() => { setQ(''); setType('All'); setBeds(0); setMax(150000000) }}>Clear filters</button></div>}
    </section>
  )
}
