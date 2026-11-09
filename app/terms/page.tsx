import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata('Terms of Use', 'Read the terms for using PhoneGPT, including AI limitations, downloadable models, web search and your information.', '/terms/');

export default function TermsPage() {
  return <>
    <PageIntro eyebrow="USING PHONEGPT" title="PhoneGPT Terms of Use">
      <p>PhoneGPT is provided by Parth Verma. These terms describe use of the app, website and associated online search service. Last updated <time dateTime="2026-11-09">November 9, 2026</time>.</p>
    </PageIntro>
    <article className="section wrap prose">
      <section><h2>Use PhoneGPT responsibly</h2><p>Use PhoneGPT in accordance with applicable laws and respect other people’s privacy, safety and intellectual property. Do not use our online services to distribute unlawful content, interfere with other users or gain unauthorised access to systems.</p></section>
      <section><h2>AI answers need your judgement</h2><p>AI-generated answers can be inaccurate, incomplete or outdated. Web search can provide additional information, but does not guarantee that an answer is correct. Check important facts before acting. Replies are not a substitute for qualified medical, legal or financial advice.</p></section>
      <section><h2>Models and other services</h2><p>Downloaded models and included software components have their own licences and terms. Check the conditions for the model you choose, including any restrictions on commercial use. PhoneGPT’s terms do not replace those licences or remove rights they grant.</p><p>Model availability, download access, speed and compatibility can change. A model’s presence in the library does not guarantee it will run well on every phone.</p></section>
      <section><h2>Web search and fair use</h2><p>Web search needs internet and depends on third-party services. Usage limits and temporary interruptions may apply, and allowances may be shared by devices on the same network. Do not bypass limits, misuse the search service or disrupt its operation. These service-use conditions do not override licences governing separately distributed software or models.</p></section>
      <section><h2>Your content and privacy</h2><p>You retain whatever rights you have in the prompts and files you provide. Using PhoneGPT does not give Parth ownership of your saved conversations. You are responsible for having the right to use the content you provide.</p><p>The <Link href="/privacy/">Privacy Policy</Link> explains local storage, online search requests, contact messages and deletion. Do not include private information in a web search or contact message unless you intend to send it to the services described there.</p></section>
      <section><h2>Availability, updates and saved data</h2><p>PhoneGPT is an evolving Android beta. Features and online services may change or become unavailable. Keep copies of information that matters to you. Uninstalling the app or clearing its data removes app-owned local chats and models; separately exported files and platform backups are managed separately.</p><p>We do not promise uninterrupted operation, compatibility with every device or preservation of data through every update.</p></section>
      <section><h2>Limitations and your rights</h2><p>To the extent permitted by applicable law, PhoneGPT is provided as available, without guarantees that it will be error-free or suitable for every purpose. You remain responsible for decisions you make using its answers.</p><p>Nothing in these terms excludes or limits rights or liabilities that cannot lawfully be excluded or limited. Applicable third-party and open-source licences continue to govern their respective components.</p></section>
      <section><h2>Changes and questions</h2><p>Changes to these terms will be published on this page with an updated date. For questions about PhoneGPT or these terms, use the <Link href="/contact/#say-hello">contact form</Link>.</p></section>
    </article>
  </>;
}
