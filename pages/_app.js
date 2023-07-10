import 'tailwindcss/tailwind.css';
import '../styles/globals.css'
import {Unbounded} from '@next/font/google'

const unbounded = Unbounded({
  subsets: ['latin'],
  weights: [400],
})

function MyApp({ Component, pageProps }) {
  return (
   <main className={unbounded.className}>  <Component {...pageProps} />
   </main>

  )
}

export default MyApp
