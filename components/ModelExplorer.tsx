'use client';

import { useRef, useState } from 'react';
import catalog from '@/lib/chat-models.json';

const families = ['All', 'Qwen', 'LLaMA', 'SmolLM', 'DeepSeek', 'Gemma'] as const;
type Family = (typeof families)[number];
type Model = (typeof catalog)[number];

function familyOf(model: Model): Exclude<Family, 'All'> {
  switch (model.provider) {
    case 'Qwen': return 'Qwen';
    case 'Meta Llama': return 'LLaMA';
    case 'Hugging Face': return 'SmolLM';
    case 'DeepSeek': return 'DeepSeek';
    case 'Google': return 'Gemma';
    default: throw new Error(`Unknown catalog provider: ${model.provider}`);
  }
}

function fileSize(bytes: number) {
  return (bytes / 1_000_000_000).toFixed(2);
}

export function ModelExplorer() {
  const [family, setFamily] = useState<Family>('All');
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = catalog.filter((model) => {
    const modelFamily = familyOf(model);
    const label = model.censorship === 'uncensored' ? 'Community uncensored' : 'Standard';
    const searchable = `${model.displayName} ${modelFamily} ${model.provider} ${model.fileName} ${label} ${model.status} ${model.preferred ? 'Preferred' : ''}`.toLowerCase();
    return (family === 'All' || family === modelFamily) && terms.every((term) => searchable.includes(term));
  });

  function resetFilters() {
    setFamily('All');
    setQuery('');
    searchRef.current?.focus();
  }

  return (
    <div>
      <div className="model-toolbar">
        <div className="filter-row" role="group" aria-label="Filter models by family">
          {families.map((option) => (
            <button
              key={option}
              type="button"
              className={`filter-button${family === option ? ' is-active' : ''}`}
              aria-pressed={family === option}
              aria-controls="model-results"
              onClick={() => setFamily(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="model-search">
          <label htmlFor="model-search">Search the catalog</label>
          <input
            ref={searchRef}
            id="model-search"
            type="search"
            value={query}
            placeholder="Search model names or families…"
            aria-controls="model-results"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>

      <p className="muted" role="status" aria-live="polite" aria-atomic="true">
        Showing {filtered.length} of {catalog.length} chat models
        {family !== 'All' ? ` · ${family}` : ''}
        {query.trim() ? ` · Search: “${query.trim()}”` : ''}
      </p>
      {(family !== 'All' || query.length > 0) && (
        <button className="filter-button" type="button" onClick={resetFilters}>Reset filters</button>
      )}

      <div id="model-results">
        {filtered.length === 0 ? (
          <div className="empty-state">
            <h3>No models match these filters.</h3>
            <p className="muted">Try a different name, or reset the family and search to browse the full catalog.</p>
            <button className="button button-secondary" type="button" onClick={resetFilters}>Show all models</button>
          </div>
        ) : (
          <div className="model-grid">
            {filtered.map((model) => (
              <article className="model-card" key={model.id} aria-labelledby={`title-${model.id}`}>
                <div className="model-card-top">
                  <span className="eyebrow">{familyOf(model)}</span>
                  {model.preferred && <span className="tag">Preferred</span>}
                </div>
                <h3 id={`title-${model.id}`}>{model.displayName}</h3>
                <p className="muted">{model.provider}</p>
                <div className="model-meta">
                  <span className="tag">{model.censorship === 'uncensored' ? 'Community uncensored' : 'Standard'}</span>
                  <span className="tag">{model.status === 'available' ? 'In the app library' : model.status}</span>
                  <span className="tag">Text chat</span>
                </div>
                <p><strong>≈ {fileSize(model.sizeBytes)} GB</strong> <span className="muted">model file</span></p>
                {model.capabilities.includes('Image → Text') && (
                  <p className="muted">Image chat is not available in PhoneGPT.</p>
                )}
                <div className="model-foot">
                  <a
                    className="text-link"
                    href={model.hfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${model.displayName} on Hugging Face (opens in a new tab)`}
                  >
                    Model details on Hugging Face <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
