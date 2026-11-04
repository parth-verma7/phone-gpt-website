import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/PageIntro';
import { ModelExplorer } from '@/components/ModelExplorer';

export const metadata = pageMetadata('Model library', 'Explore PhoneGPT’s model library, compare download sizes and find a model for chat or English voice typing.', '/models/');

export default function ModelsPage() {
  return (
    <div className="detail-page models-page">
      <PageIntro eyebrow="The model library" title="Find a model that fits your phone.">
        <p>Explore the chat models in PhoneGPT. Start small, compare families, and choose what works for your device.</p>
        <Link className="button button-primary" href="/downloads/">Get PhoneGPT</Link>
      </PageIntro>

      <section className="section wrap" aria-labelledby="starting-point">
        <div className="callout">
          <p className="eyebrow">A starting point</p>
          <h2 id="starting-point">Qwen 3.5 0.8B, marked Preferred.</h2>
          <p className="lead">The app’s preferred chat model has an approximately 0.59 GB file. It is a suggested place to start. Speed and compatibility vary by phone.</p>
          <p>Choose a model here, then <Link className="text-link" href="/#download">get the app</Link> to download and load it on your phone.</p>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="chat-catalog">
        <p className="eyebrow">Five families. Your choice.</p>
        <h2 className="section-heading" id="chat-catalog">Browse chat models</h2>
        <p className="lead">Filter by family and search together to narrow the catalog.</p>
        <p className="muted">Standard and Community uncensored are model labels; they do not guarantee particular answers. Preferred suggests a starting model. Models listed here still need downloading in the app.</p>
        <ModelExplorer />
      </section>

      <section className="section wrap" aria-labelledby="before-you-choose">
        <p className="eyebrow">Before you choose</p>
        <h2 className="section-heading" id="before-you-choose">Know what your phone will run.</h2>
        <div className="grid-2">
          <article className="feature-card">
            <h3>Text chat, with TXT attachments</h3>
            <p>PhoneGPT currently supports text input and text responses, including plain-text (.txt) attachments. Image chat is not available yet.</p>
          </article>
          <article className="feature-card">
            <h3>Download size is only part of the story</h3>
            <p>Sizes shown are approximate downloads. Running a model needs additional phone memory. Longer conversations, voice typing and other open apps also use memory. Performance varies by device.</p>
          </article>
        </div>
      </section>

      <section className="section wrap" aria-labelledby="voice-models">
        <div className="callout">
          <p className="eyebrow">A separate voice model</p>
          <h2 className="section-heading" id="voice-models">Speak English. Edit the text. Send when ready.</h2>
          <p>English voice typing uses Whisper models, selected separately from your chat model in the app’s Models → Voice section. The available choices are Tiny English (≈ 78 MB), Base English (≈ 148 MB), Small English Q5_1 (≈ 190 MB), and Small English (≈ 488 MB).</p>
          <p className="muted">Start with Tiny or Base on a phone. These are approximate download sizes, not the memory needed to run them. Voice typing transcribes speech into an editable text draft; it does not add image chat or spoken replies.</p>
          <Link className="button button-secondary" href="/downloads/">Get the app to choose a model</Link>
        </div>
      </section>
    </div>
  );
}
