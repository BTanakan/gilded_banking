import '@/styles/globals.css'
import type { AppProps } from 'next/app'
 
 import "firebase/compat/auth";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
