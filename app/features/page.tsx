import { WebSearchSection } from '@/components/WebSearchSection';
import { pageMetadata } from '@/lib/seo';
import Link from 'next/link';
import { PageIntro } from '@/components/PageIntro';

export const metadata = pageMetadata('Features', 'Explore on-device chat, optional web search, English voice typing, TXT questions and local conversation history in PhoneGPT.', '/features/');

export default function FeaturesPage() {
  return (
    <div className="detail-page features-page">
      <PageIntro eyebrow="What you can do" title="A little help. Right on your phone.">
        <p>Write a first draft. Untangle an idea. Ask a follow-up. PhoneGPT runs downloaded AI models on your phone, with tools that keep you in control of the conversation.</p>
        <Link className="text-link" href="/get-started/">Find your first steps →</Link>
      </PageIntro>

      <section className="section wrap split" aria-labelledby="chat-heading">
        <div>
          <p className="eyebrow">01 / Make room for ideas</p>
          <h2 className="section-heading" id="chat-heading">A conversation you can keep building.</h2>
        </div>
        <div className="prose">
          <p className="lead">Ask for an explanation, try a different wording, or turn a rough thought into a plan.</p>
          <p>Replies appear as the model generates them. You can stop a reply and type your next draft while it works. Follow-up questions use the current conversation, within your chosen model’s limits.</p>
          <p className="muted">Saving a chat does not give the model unlimited memory. Separate chats do not share personal memory.</p>
        </div>
      </section>

      <WebSearchSection />

      <section className="section wrap" aria-labelledby="everyday-heading">
        <p className="eyebrow">Small tools, everyday uses</p>
        <h2 className="section-heading" id="everyday-heading">Bring your words. Choose your way in.</h2>
        <div className="grid-2">
          <article className="feature-card">
            <p className="tag">English voice typing</p>
            <h3>Say the rough version.</h3>
            <p>Download a separate Whisper voice model, then dictate into the message box. Transcription runs locally and updates as you speak. Review and edit the words before you send them.</p>
            <p className="muted">English only. Transcription speed varies by phone and model. Replies are text; spoken replies are not available.</p>
          </article>
          <article className="feature-card">
            <p className="tag">TXT questions</p>
            <h3>Give your notes a second read.</h3>
            <p>Attach a plain-text .txt file up to 32 KB. Ask for a summary, pull out action items, or discuss a passage, as long as the text fits within the model’s conversation limit.</p>
            <p className="muted">Attachments currently support TXT only. Images, PDFs, Word documents, and scanned pages are not supported.</p>
          </article>
        </div>
      </section>

      <section className="section wrap split" aria-labelledby="models-heading">
        <div>
          <p className="eyebrow">02 / Pick what works for you</p>
          <h2 className="section-heading" id="models-heading">Your phone. Your model choice.</h2>
        </div>
        <div className="prose">
          <p>Browse models from Qwen, LLaMA, SmolLM, DeepSeek, and Gemma. Download one, load it, and switch between installed chat models without clearing your conversation.</p>
          <p>Pause, resume, cancel, or delete model downloads. Chat and voice use separate models, so you only need a voice model if you want to dictate.</p>
          <div className="callout">
            <h3>Start small.</h3>
            <p>Download size tells you how much storage a model needs, not how much working memory it uses. Larger models and using more conversation history for each reply can exceed your phone’s available memory.</p>
          </div>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="controls-heading">
        <p className="eyebrow">03 / Keep a comfortable rhythm</p>
        <h2 className="section-heading" id="controls-heading">Come back to your work.</h2>
        <div className="grid-3">
          <article className="feature-card">
            <h3>Find an earlier thought.</h3>
            <p>Reopen locally saved conversations and search their titles and messages. Delete an individual chat with a confirmation step.</p>
          </article>
          <article className="feature-card">
            <h3>Make it easier to read.</h3>
            <p>Choose a light or dark theme and adjust text size across the app. Select and copy text from formatted replies.</p>
          </article>
          <article className="feature-card">
            <h3>Shape the response.</h3>
            <p>Save instructions for new chats, adjust reply length and how much conversation the model uses, and choose how much it reasons before answering where supported. Options depend on the model and your phone’s memory.</p>
          </article>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="offline-heading"><div className="callout offline-callout">
        <p className="eyebrow">A useful distinction</p>
        <h2 className="section-heading" id="offline-heading">Download online. Use models locally.</h2>
        <p className="lead">After installing the app and downloading your models, chat and English voice typing work on your phone without internet.</p>
        <p>New downloads and optional web search need internet. Turn Web on when you need online information, or keep it off for offline conversations. Answers and search results can be wrong. Cloud backup and accounts are not available in the current app.</p>
        <div className="button-row"><Link className="button button-primary" href="/#get-started">Set up PhoneGPT</Link><Link className="button button-secondary" href="/about/">Why PhoneGPT exists</Link></div>
      </div></section>
    </div>
  );
}
