
import { useEffect, useState } from 'react'
import { useApp } from '../store.jsx'
import { Heart } from './ui.jsx'

const links = [
  ['#listings', 'Homes'],
  ['#areas', 'Areas'],
  ['#why', 'Why Mansu'],
  ['#process', 'How it works'],
]

export const Brand = ({ dark }) => (
  <a
    href="#home"
    className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[.2em]"
    aria-label="Mansu Plas home"
  >
    <span className="grid h-[33px] w-[33px] place-items-center rounded-full border border-current font-display text-xl italic tracking-normal">
      M
    </span>

    <span>
      MANSU{' '}
      <b className={`font-normal ${dark ? 'text-moss' : 'text-sand'}`}>
        PLAS
      </b>
    </span>
  </a>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const { wish, setDrawer } = useApp()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28)

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3 md:py-5'
      }`}
    >
      <nav
        aria-label="Main"
        className={`relative mx-auto flex h-[58px] w-[calc(100%-22px)] max-w-[1300px] items-center justify-between rounded-3xl border px-4 backdrop-blur-md transition md:w-[calc(100%-72px)] ${
          solid
            ? 'border-ink/10 bg-paper/95 text-ink shadow-lg'
            : 'border-white/35 bg-deep/25 text-white'
        }`}
      >
        {/* Brand */}
        <Brand dark={solid} />

        {/* Navigation menu */}
        <div
          className={`absolute left-0 right-0 top-[64px] z-50 flex flex-col border border-white/30 bg-paper/90 p-4 text-ink shadow-xl backdrop-blur-2xl transition md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none ${
            open
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 opacity-0 md:visible md:translate-y-0 md:opacity-100'
          } md:text-inherit`}
        >
          {/* Main navigation links */}
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="group relative border-b border-ink/10 py-3 text-xs tracking-wider transition-colors hover:text-moss md:border-0 md:py-0 md:hover:text-sand"
            >
              {label}

              <span className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 md:bottom-[-6px]" />
            </a>
          ))}

          {/* Favourites */}
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              setDrawer(true)
            }}
            className="group relative flex items-center gap-2 border-b border-ink/10 py-3 text-xs tracking-wider transition-colors hover:text-moss md:border-0 md:py-0 md:hover:text-sand"
            aria-label="Favourite homes"
          >
            <Heart on={!!wish.length} />

            Favourites{wish.length ? ` (${wish.length})` : ''}

            <span className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 md:bottom-[-6px]" />
          </button>

          {/* Contact */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`group relative mt-2 self-start rounded-3xl px-4 py-2.5 text-xs tracking-wider md:mt-0 ${
              solid ? 'text-forest' : 'text-white'
            }`}
          >
            Contact Mansu ↗

            <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  )
}
