'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { asset } from '@/lib/site';
const links = [['Features','/features/'],['Models','/models/'],['Get started','/get-started/'],['FAQ','/faq/']];
export function Header() {
 const [open,setOpen]=useState(false); const pathname=usePathname(); const menuRef=useRef<HTMLButtonElement>(null);
 useEffect(()=>{if(!open)return; const key=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);menuRef.current?.focus();}};window.addEventListener('keydown',key);return ()=>window.removeEventListener('keydown',key);},[open]);
 return <header className="site-header"><div className="wrap header-inner">
  <Link className="brand" href="/" aria-label="PhoneGPT home" onClick={()=>setOpen(false)}><img src={asset('/phonegpt-logo.png')} width="34" height="34" alt=""/>PhoneGPT<span className="brand-dot">.</span></Link>
  <nav aria-label="Main navigation" className="desktop-nav">{links.map(([title,path])=><Link key={path} href={path} aria-current={pathname.replace(/\/+$/,'')===path.replace(/\/+$/,'')?'page':undefined}>{title}</Link>)}</nav>
  <Link className="button button-dark header-download" href="/downloads/">Get PhoneGPT <ArrowUpRight size={16}/></Link>
  <button ref={menuRef} className="menu-toggle" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<nav id="mobile-navigation" className="mobile-nav wrap" aria-label="Mobile navigation">{[...links,['Downloads','/downloads/'],['Say hello','/contact/']].map(([title,path])=><Link href={path} key={path} onClick={()=>setOpen(false)}>{title}<ArrowUpRight size={16}/></Link>)}</nav>}</header>;
}
