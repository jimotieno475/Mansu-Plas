import { createContext, useContext, useEffect, useState } from 'react'
const Ctx = createContext(null)
export const useApp = () => useContext(Ctx)
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } }

export function AppProvider({ children }) {
  const [wish, setWish] = useState(() => load('mp-wish', []))
  const [home, setHome] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const [query, setQuery] = useState('')
  const [type, setType] = useState('All')
  useEffect(() => { try { localStorage.setItem('mp-wish', JSON.stringify(wish)) } catch { /* ignore */ } }, [wish])
  useEffect(() => { document.body.style.overflow = home || drawer ? 'hidden' : '' }, [home, drawer])
  const toggleWish = (id) => setWish((w) => (w.includes(id) ? w.filter((x) => x !== id) : [...w, id]))
  return <Ctx.Provider value={{ wish, toggleWish, home, setHome, drawer, setDrawer, query, setQuery, type, setType }}>{children}</Ctx.Provider>
}
