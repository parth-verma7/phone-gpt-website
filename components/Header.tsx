'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { asset } from '@/lib/site';
const links = [['Home','/#home'],['Features','/#features'],['Models','/#models'],['Get started','/#get-started'],['FAQ','/#faq']];
export function Header() {
 const [open,setOpen]=useState(false); const [hash,setHash]=useState('');
 const pathname=usePathname(); const menuRef=useRef<HTMLButtonElement>(null);
 useEffect(()=>{const sync=()=>setHash(window.location.hash);sync();window.addEventListener('hashchange',sync);return()=>window.removeEventListener('hashchange',sync);},[]);
 useEffect(()=>{if(!open)return; const key=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);menuRef.current?.focus();}};window.addEventListener('keydown',key);return ()=>window.removeEventListener('keydown',key);},[open]);
 const follow=(path:string)=>{setOpen(false);setHash('#'+path.split('#')[1]);};
 return <header className="site-header"><div className="wrap header-inner">
  <Link className="brand" href="/#home" aria-label="PhoneGPT home" onClick={()=>follow('/#home')}><img src={asset('/phonegpt-logo.png')} width="34" height="34" alt=""/>PhoneGPT<span className="brand-dot">.</span></Link>
  <nav aria-label="Main navigation" className="desktop-nav">{links.map(([title,path])=><Link key={path} href={path} onClick={()=>follow(path)} aria-current={pathname==='/'&&(hash===path.slice(1)||(!hash&&title==='Home'))?'location':undefined}>{title}</Link>)}</nav>
  <Link className="button button-dark header-download" href="/#download" onClick={()=>follow('/#download')}>Get PhoneGPT <ArrowUpRight size={16}/></Link>
  <button ref={menuRef} className="menu-toggle" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<nav id="mobile-navigation" className="mobile-nav wrap" aria-label="Mobile navigation">{[...links,['Downloads','/#download'],['Say hello','/#say-hello']].map(([title,path])=><Link href={path} key={path} onClick={()=>follow(path)}>{title}<ArrowUpRight size={16}/></Link>)}</nav>}</header>;
}
