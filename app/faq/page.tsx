import { FAQList } from '@/components/FAQList';
import { PageIntro } from '@/components/PageIntro';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Frequently asked questions', 'Simple answers about PhoneGPT, offline chat, Android, model choice, voice typing and your saved conversations.', '/faq/');

export default function FAQ(){return <><PageIntro eyebrow="A FEW GOOD QUESTIONS" title="Before your first conversation."><p>What you can do, what your phone needs and where the current limits are.</p></PageIntro><section className="section wrap" aria-label="Frequently asked questions"><FAQList/></section></>}
