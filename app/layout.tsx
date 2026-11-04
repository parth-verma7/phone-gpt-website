import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE_URL, BASE_PATH } from '@/lib/site';
export const metadata: Metadata={metadataBase:new URL(SITE_URL+'/'),title:{default:'PhoneGPT — Your AI, on your phone',template:'%s | PhoneGPT'},description:'Download AI models, chat offline and dictate messages on your Android phone. Meet PhoneGPT: local AI with no mandatory account.',applicationName:'PhoneGPT',icons:{icon:`${BASE_PATH}/favicon.png`},openGraph:{type:'website',siteName:'PhoneGPT',locale:'en_US',images:[{url:`${SITE_URL}/social-card.png`,width:1200,height:630,alt:'PhoneGPT — Your phone. Your models. Your space.'}]},twitter:{card:'summary_large_image',images:[`${SITE_URL}/social-card.png`]},robots:{index:true,follow:true}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#f7f9f6'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body id="top"><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/></body></html>}
