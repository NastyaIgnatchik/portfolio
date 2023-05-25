import type { AppProps } from 'next/app'
import '../styles/global.css'
import localFont from "next/font/local";


const myFont = localFont({ src: '../public/fonts/SpaceGrotesk-VariableFont_wght.ttf' })

const App = ({ Component, pageProps }: AppProps)=> (
    <main className={myFont.className}>
            <Component {...pageProps} />
    </main>





)
export default App;