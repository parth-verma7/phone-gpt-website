'use client';
import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT_FORM_ENDPOINT } from '@/lib/site';
export function ContactForm(){
 const [notice,setNotice]=useState(''); const [sending,setSending]=useState(false); const [ready,setReady]=useState(false);
 useEffect(()=>{setReady(true);},[]);
 async function submit(e:FormEvent<HTMLFormElement>){
 e.preventDefault(); if(sending)return;
 const form=e.currentTarget, data=new FormData(form);
 const name=String(data.get('name')||'').trim(), email=String(data.get('email')||'').trim(), message=String(data.get('message')||'').trim(), topic=String(data.get('topic')||'Hello');
 if(!name||!email||!message){setNotice('Please add your name, reply email and message.');return;}
 setSending(true);setNotice('');
 const controller=new AbortController(); const timeout=window.setTimeout(()=>controller.abort(),20000);
 try {
 const response=await fetch(CONTACT_FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name,email,message,topic}),signal:controller.signal});
 const result=await response.json().catch(()=>null);
 if(!response.ok||!result?.ok)throw new Error('Submission not confirmed');
 form.reset();setNotice('Thanks! Your message has been submitted.');
 }catch{setNotice('We couldn’t confirm your submission. Your message is still here. Check your connection and try again. If you already tried sending, it may have gone through.');}
 finally{window.clearTimeout(timeout);setSending(false);}
 }

 return <form className="founder-form" onSubmit={submit} aria-busy={sending} aria-describedby="founder-disclosure"><fieldset disabled={!ready||sending} className="form-fields"><legend className="sr-only">Say hello</legend><div className="form-row"><div className="field"><label htmlFor="founder-name">Your name (required)</label><input id="founder-name" name="name" autoComplete="name" placeholder="What should I call you?" required maxLength={100}/></div><div className="field"><label htmlFor="founder-email">Your email (required)</label><input id="founder-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required maxLength={254}/></div></div><div className="field"><label htmlFor="founder-topic">What’s on your mind?</label><select id="founder-topic" name="topic" defaultValue="Just saying hello"><option>Just saying hello</option><option>Feedback or an idea</option><option>A model I’d love to use</option><option>Something else</option></select></div><div className="field"><label htmlFor="founder-message">Your message (required)</label><textarea id="founder-message" name="message" rows={4} aria-describedby="model-request-hint" placeholder="A kind word, a fresh idea, a model request… I’m listening." required maxLength={2000}/><span id="model-request-hint" className="muted">Requesting a model? Include its name or link.</span></div><div className="form-actions"><button type="submit" className="button button-primary">{sending?'Sending…':'Send message'} <ArrowUpRight size={17}/></button><span>A direct note to Parth.</span></div></fieldset><noscript><p className="form-disclosure">The message form needs JavaScript. Please enable JavaScript to use this form.</p></noscript><p className="form-disclosure" id="founder-disclosure">Sending shares your name, email and message with Parth through Formspree. Please don’t include private chat content. Read our <Link href="/privacy/">privacy notice</Link>.</p>{notice&&<p className="form-notice" role="status">{notice}</p>}</form>
}
