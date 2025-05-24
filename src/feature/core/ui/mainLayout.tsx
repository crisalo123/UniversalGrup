
import { Navbar } from './navbar'
import { Footer } from './footer'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Outlet /> {/* Aquí se renderizan las páginas hijas */}
      </main>
      <Footer />
    </>
  )
}

