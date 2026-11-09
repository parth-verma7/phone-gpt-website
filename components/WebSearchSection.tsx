import Link from 'next/link';
import { ArrowUpRight, Globe, Smartphone, WifiOff } from 'lucide-react';

export function WebSearchSection() {
  return <section className="section wrap" id="web-search" aria-labelledby="web-search-heading">
    <div className="section-heading"><div><p className="eyebrow">LOCAL AI. A WINDOW TO THE WEB.</p><h2 id="web-search-heading">Offline when you want.<br/>Current information when you need.</h2></div></div>
    <div className="grid-2">
      <article className="feature-card web-search-card"><Globe size={28} aria-hidden="true"/><p className="tag">Web search</p><h3>Ask about the world as it changes.</h3><p>Look up recent information by turning Web on beside your chat model or explicitly asking to search the web. Source links appear separately so you can check the details.</p><Link className="text-link" href="/get-started/">Get started with PhoneGPT <ArrowUpRight size={16}/></Link></article>
      <article className="feature-card"><Smartphone size={28} aria-hidden="true"/><h3>Your phone still writes the answer.</h3><p>Web search brings back information; your downloaded model uses it to answer on your device. No separate search account or extra setup is needed.</p><p><WifiOff size={16} aria-hidden="true"/> For offline chat, turn Web off and avoid requesting a web search. Downloaded chat and voice models continue to work without internet.</p><p className="muted">Search needs internet and is subject to availability and usage limits. The question used for a search is sent online; saved chat history, attached files and voice recordings are not sent with it.</p><Link className="text-link" href="/privacy/#web-search-privacy">How web search handles your information <ArrowUpRight size={16}/></Link></article>
    </div>
  </section>;
}
