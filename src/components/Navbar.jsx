import { useEffect, useState } from 'react'
import { useApp } from '../store.jsx'
import { Heart } from './ui.jsx'

const links = [['#listings', 'Homes'], ['#areas', 'Areas'], ['#why', 'Why Mansu'], ['#process', 'How it works']]
export const Brand = ({ dark }) => (
  <a href="#home" className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[.2em]" aria-label="Mansu Plas home">
    <span className="grid h-[33px] w-[33px] place-items-center rounded-full border border-current font-display text-xl italic tracking-normal">M</span>
    <span>MANSU <b className={`font-normal ${dark ? 'text-moss' : 'text-sand'}`}>PLAS</b></span>
  </a>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { wish, setDrawer } = useApp()
  useEffect(() => {
    const f = () => setScrolled(scrollY > 28)
    f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  const solid = scrolled || open
  return (
    <header className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${scrolled ? 'py-2' : 'py-3 md:py-5'}`}>
      <nav aria-label="Main" className={`relative mx-auto flex h-[58px] w-[calc(100%-22px)] max-w-[1300px] items-center justify-between rounded-sm border px-4 backdrop-blur-md transition md:w-[calc(100%-72px)] ${solid ? 'border-ink/10 bg-paper/95 text-ink shadow-lg' : 'border-white/35 bg-deep/25 text-white'}`}>
        <Brand dark={solid} />
        <div className={`absolute left-0 right-0 top-[64px] flex flex-col border bg-paper/98 p-4 text-ink shadow-xl transition md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0 md:visible md:translate-y-0 md:opacity-100'} md:text-inherit`}>
          {links.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)} className="border-b border-ink/10 py-3 text-xs tracking-wider hover:text-moss md:border-0 md:py-0 md:hover:text-sand">{l}</a>)}
          <button onClick={() => { setOpen(false); setDrawer(true) }} className="flex items-center gap-2 py-3 text-xs tracking-wider md:py-0" aria-label="Favourite homes"><Heart on={!!wish.length} />Favourites{wish.length ? ` (${wish.length})` : ''}</button>
          <a href="#contact" onClick={() => setOpen(false)} className={`mt-2 self-start rounded-sm border px-4 py-2.5 text-xs tracking-wider md:mt-0 ${solid ? 'border-forest bg-forest text-white' : 'border-white/60 md:text-white'}`}>Contact Mansu ↗</a>
        </div>
        <button className="grid h-10 w-10 place-items-center md:hidden" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </nav>
    </header>
  )
}
