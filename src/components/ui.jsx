import { useEffect, useState } from 'react'

export function Modal({ onClose, children, wide }) {
  useEffect(() => {
    const f = (e) => e.key === 'Escape' && onClose()
    addEventListener('keydown', f); return () => removeEventListener('keydown', f)
  }, [onClose])
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-deep/70 p-0 backdrop-blur-sm sm:p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}
        className={`pop relative max-h-[100svh] w-full overflow-y-auto bg-paper text-ink shadow-2xl sm:max-h-[94svh] sm:rounded-sm ${wide ? 'max-w-5xl' : 'max-w-xl'}`}>{children}</div>
    </div>
  )
}
export const Heart = ({ on }) => (
  <svg viewBox="0 0 24 24" className={`h-[18px] w-[18px] transition ${on ? 'fill-[#b4513d] stroke-[#b4513d]' : 'fill-none stroke-current'}`} strokeWidth="1.8"><path d="M12 21s-8-5.500-8-11a4.500 4.500 0 018-2.800A4.500 4.500 0 0120 10c0 5.500-8 11-8 11z" /></svg>
)
export function Photo({ className = '', alt = '', ...p }) {
  const [bad, setBad] = useState(false)
  return bad
    ? <div role="img" aria-label={alt} className={`${className} bg-gradient-to-br from-forest to-moss`} />
    : <img alt={alt} className={className} onError={() => setBad(true)} {...p} />
}
export const Eyebrow = ({ children, light }) => <p className={`eyebrow ${light ? 'light' : ''}`}>{children}</p>
