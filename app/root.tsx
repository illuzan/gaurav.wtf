import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import Footer from './components/Footer'
import Header from './components/Header'
import styles from './tailwind.css'
// import styles from './styles/root.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Gaurav Singh',
  description:
    'I’m a frontend developer that loves to create stuff!',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: '/favicon.ico',
  },
  { rel: 'stylesheet', href: styles },
]

export default function App() {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body className='max-w-3xl px-4 mx-auto'>
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  )
}
