import { PageIntro } from '@/components/PageIntro';
import { FounderSection } from '@/components/FounderSection';
import { pageMetadata } from '@/lib/seo';
export const metadata=pageMetadata('Say hello','Share an idea, request an AI model, send feedback or simply say hello to Parth, the person behind PhoneGPT.','/contact/');
export default function Contact(){return <div className="contact-page"><PageIntro eyebrow="LET’S MAKE IT BETTER, TOGETHER" title="A message goes a long way."><p>This is a place for your ideas, feedback, model requests and good wishes. For a model request, include its name or link and what you’d like to do with it.</p></PageIntro><FounderSection/></div>}
