'use client';
import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT_EMAIL } from '@/lib/site';
export function ContactForm(){
 const [notice,setNotice]=useState(''); const [ready,setReady]=useState(false);
 useEffect(()=>{setReady(true);},[]);
 function submit(e:FormEvent<HTMLFormElement>){e.preventDefault(); const data=new FormData(e.currentTarget); const name=String(data.get('name')||'').trim(), email=String(data.get('email')||'').trim(),message=String(data.get('message')||'').trim(),topic=String(data.get('topic')||'Hello');
 if(!name||!email||!message){setNotice('Please add your name, reply email and message.');return;}
 const body=`Name: ${name}\nReply email: ${email}\nTopic: ${topic}\n\n${message}`;
 window.location.href=`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`PhoneGPT · ${topic}`)}&body=${encodeURIComponent(body)}`;
 setNotice('Review and send your message in your email app. If nothing opens, please set up an email app and try again. We cannot confirm delivery.');
 }

 return <form className="founder-form" onSubmit={submit} aria-describedby="founder-disclosure"><fieldset disabled={!ready} className="form-fields"><legend className="sr-only">Say hello</legend><div className="form-row"><div className="field"><label htmlFor="founder-name">Your name (required)</label><input id="founder-name" name="name" autoComplete="name" placeholder="What should I call you?" required maxLength={100}/></div><div className="field"><label htmlFor="founder-email">Your email (required)</label><input id="founder-email" name="email" type="email" autoComplete="email" placeholder="Your email address" required maxLength={254}/></div></div><div className="field"><label htmlFor="founder-topic">What’s on your mind?</label><select id="founder-topic" name="topic" defaultValue="Just saying hello"><option>Just saying hello</option><option>Feedback or an idea</option><option>A model I’d love to use</option><option>Something else</option></select></div><div className="field"><label htmlFor="founder-message">Your message (required)</label><textarea id="founder-message" name="message" rows={4} aria-describedby="model-request-hint" placeholder="A kind word, a fresh idea, a model request… I’m listening." required maxLength={2000}/><span id="model-request-hint" className="muted">Requesting a model? Include its name or link.</span></div><div className="form-actions"><button type="submit" className="button button-primary">Open email app <ArrowUpRight size={17}/></button><span>A direct note to Parth.</span></div></fieldset><noscript><p className="form-disclosure">The draft form needs JavaScript. Please enable JavaScript to use this form.</p></noscript><p className="form-disclosure" id="founder-disclosure">Opens your email app for you to review and send. This website doesn’t submit or save your message. Your email provider handles the draft and delivery.</p>{notice&&<p className="form-notice" role="status">{notice}</p>}</form>
}
