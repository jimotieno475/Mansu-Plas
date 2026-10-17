import { AppProvider } from './store.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Listings from './components/Listings.jsx'
import Detail from './components/Detail.jsx'
import Drawer from './components/Drawer.jsx'
import { Trust, Areas, Why, Process, Stories, Contact, Footer, WhatsAppFab } from './components/Sections.jsx'

export default function App() {
  return (
    <AppProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[200] focus:bg-forest focus:p-3 focus:text-white">Skip to content</a>
      <Navbar />
      <main id="main"><Hero /><Trust /><Listings /><Areas /><Why /><Process /><Stories /><Contact /></main>
      <Footer />
      <WhatsAppFab /><Detail /><Drawer />
    </AppProvider>
  )
}
