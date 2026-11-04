import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';
import { APP_VERSION } from '@/lib/site';

export const metadata = pageMetadata('About PhoneGPT', 'Why PhoneGPT exists, who it is for, and what an on-device AI assistant can help you do.', '/about/');

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="Why PhoneGPT" title="Useful AI. Closer to hand.">
        <p>PhoneGPT is an Android app for chatting with AI models that run on your phone. Download a model, load it, and start with whatever is on your mind.</p>
      </PageIntro>

      <section className="section wrap split" aria-labelledby="why-heading">
        <div>
          <p className="eyebrow">The reason for it</p>
          <h2 className="section-heading" id="why-heading">Your ideas don’t wait for a connection.</h2>
        </div>
        <div className="prose">
          <p className="lead">Sometimes you want help writing a message on a journey, understanding a note, or thinking through a problem where the signal is patchy.</p>
          <p>PhoneGPT gives you another way to work: download the models you need ahead of time, then use them locally. Everyday chat works on your phone without a PhoneGPT account.</p>
          <p>It brings model choice, text-file questions, and English voice typing into one mobile app. You can begin with a small model and explore from there.</p>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="people-heading">
        <p className="eyebrow">Who it is for</p>
        <h2 className="section-heading" id="people-heading">A few familiar moments.</h2>
        <div className="grid-2">
          <article className="feature-card">
            <h3>When you need a starting point.</h3>
            <p>Writers, students, and everyday note-takers can explore an outline, rephrase a paragraph, or ask for a simpler explanation. Check facts before relying on the answer.</p>
          </article>
          <article className="feature-card">
            <h3>When the signal comes and goes.</h3>
            <p>Travellers and people with unreliable connectivity can prepare their models in advance and keep working with local chat.</p>
          </article>
          <article className="feature-card">
            <h3>When speaking is easier than typing.</h3>
            <p>Dictate a thought in English, read the local transcript, and make it yours before sending. Voice typing helps capture the draft; it never sends it automatically.</p>
          </article>
          <article className="feature-card">
            <h3>When you want to try different models.</h3>
            <p>Explore how downloadable models respond to the same question. Choose what to keep on your phone and remove what you no longer need.</p>
          </article>
        </div>
      </section>

      <section className="section wrap split" aria-labelledby="local-heading">
        <div>
          <p className="eyebrow">What local means here</p>
          <h2 className="section-heading" id="local-heading">Clear about where the work happens.</h2>
        </div>
        <div className="prose">
          <p>Chat replies and English voice typing are processed on your phone. Conversations, attached-file copies and settings are saved there. PhoneGPT does not upload chats to its own servers or use a remote analytics service.</p>
          <p>Android may back up app data depending on your device settings. PhoneGPT does not add its own encryption or offer its own cloud backup feature.</p>
          <p>You choose which models to download, when to stop a reply, and which conversations to delete. Model downloads need an internet connection.</p>
        </div>
      </section>

      <section className="section wrap callout" aria-labelledby="today-heading">
        <p className="eyebrow">Where things stand</p>
        <h2 className="section-heading" id="today-heading">An Android app, still growing.</h2>
        <p className="lead">PhoneGPT is available as an Android beta, version {APP_VERSION}. Google Play and iPhone releases are not available yet.</p>
        <p>Start with a small model and explore at your own pace. Speed and compatibility vary by phone.</p>
        <p>Today’s inputs are typed text, TXT files up to 32 KB, and English voice typing. Image chat, cloud backup, accounts, and spoken replies are not available. AI answers can be inaccurate, and speed and quality depend on the model and phone.</p>
        <Link className="text-link" href="/faq/">Read common questions →</Link>
      </section>

      <section className="section wrap" aria-labelledby="next-heading">
        <h2 className="section-heading" id="next-heading">Start with one useful question.</h2>
        <p className="lead">See what the app can do, or walk through the setup.</p>
        <Link className="button button-primary" href="/get-started/">Get started</Link>{' '}
        <Link className="button button-secondary" href="/features/">Explore the features</Link>
      </section>
    </>
  );
}
