import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';
import { Toaster } from 'sonner';




gsap.registerPlugin(ScrollToPlugin);


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Component {...pageProps} />
    </>
);
}
