import { PHOTOS, homes } from '../data.js'
import { kshShort, ksh, wa } from '../lib.js'
import { useApp } from '../store.jsx'
import { Photo } from './ui.jsx'

export default function Drawer() {
  const { wish, drawer, setDrawer, toggleWish, setHome } = useApp()
  if (!drawer) return null
  const saved = homes.filter((h) => wish.includes(h.id))
  const msg = `Hello Mansu, I've saved these homes and would like to view them:\n${saved.map((h) => `• ${h.title}, ${h.area} (${ksh(h.price)}) Ref ${h.id}`).join('\n')}`
  return (
    <div className="fixed inset-0 z-[110] bg-deep/60" onClick={() => setDrawer(false)}>
      <aside onClick={(e) => e.stopPropagation()} className="pop absolute inset-y-0 right-0 flex w-[min(100%,400px)] flex-col bg-paper shadow-2xl">
        <div className="flex items-center justify-between p-5"><h2 className="font-display text-3xl font-normal">Favourites</h2><button onClick={() => setDrawer(false)} aria-label="Close">✕</button></div>
        <div className="flex-1 overflow-y-auto px-5">
          {!saved.length && <p className="text-muted">Tap the heart on any home to keep it here.</p>}
          {saved.map((h) => (
            <div key={h.id} className="mb-3 flex gap-3 border border-ink/15 bg-cream p-3">
              <Photo src={PHOTOS[h.photos[0]]} alt="" className="h-20 w-24 shrink-0 object-cover" />
              <div className="min-w-0 flex-1"><b className="block truncate font-display text-lg font-normal">{h.title}</b><small className="text-muted">{h.area} · {h.beds} beds · {kshShort(h.price)}</small>
                <div className="mt-1 flex gap-3 text-xs"><button className="font-semibold text-forest" onClick={() => { setDrawer(false); setHome(h) }}>View</button><button className="text-[#b4513d]" onClick={() => toggleWish(h.id)}>Remove</button></div></div>
            </div>))}
        </div>
        {!!saved.length && <div className="border-t border-ink/15 p-5"><a href={wa(msg)} target="_blank" rel="noreferrer" className="btn btn-dark w-full">Ask Mansu about these {saved.length} homes ↗</a></div>}
      </aside>
    </div>
  )
}
