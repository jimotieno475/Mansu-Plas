import { useEffect, useRef, useState } from 'react'

/** Fades/slides children in once when they scroll into view. */
export function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.15 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`transition-all duration-1000 ease-out ${on ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className}`}>
      {children}
    </Tag>
  )
}

/** Counts up to `to` when scrolled into view. */
export function CountUp({ to }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      let s
      const step = (t) => {
        s ??= t
        const k = Math.min((t - s) / 1600, 1)
        setN(Math.round(to * (1 - Math.pow(1 - k, 3))))
        if (k < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{n.toLocaleString()}{to > 40 ? '+' : ''}</span>
}
