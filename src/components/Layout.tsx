import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

const titles: Record<string, string> = {
  '/': 'Coreva Ltd | Web, Mobile & Software Systems',
  '/about': 'About Us | Coreva Ltd',
  '/services': 'Services | Coreva Ltd',
  '/work': 'Our Work | Coreva Ltd',
  '/contact': 'Contact | Coreva Ltd',
}

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] ?? 'Coreva Ltd'
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
