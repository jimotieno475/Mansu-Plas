import { CONTACT } from './data.js'
export const ksh = (n) => 'KSh ' + Math.round(n).toLocaleString('en-KE')
export const kshShort = (n) => 'KSh ' + (n >= 1e6 ? (n / 1e6).toFixed(n % 1e6 ? 1 : 0).replace(/\.0$/, '') + 'M' : Math.round(n).toLocaleString('en-KE'))
export const wa = (text) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
export const mail = (subject, body) => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
export const ytId = (url = '') => (url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/) || [])[1] || (/^[\w-]{11}$/.test(url) ? url : '')
