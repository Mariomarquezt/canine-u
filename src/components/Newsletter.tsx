import { useState } from 'react';
import type { FormEvent } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="newsletter" style={{ background: 'var(--cu-gold)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container-wide" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div style={{ font: '800 12px var(--font-sans)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cu-navy)', marginBottom: 16, opacity: 0.8 }}>
              The Syllabus · Free weekly
            </div>
            <h3 style={{ margin: 0, font: '900 clamp(32px, 4vw, 48px) var(--font-display)', color: 'var(--cu-navy)', letterSpacing: '-0.02em', lineHeight: 1, textTransform: 'uppercase' }}>
              One short note,<br /> one trainable moment,<br /> every Sunday.
            </h3>
          </div>
          <div>
            {done ? (
              <div style={{
                background: 'var(--cu-navy)', color: '#fff', borderRadius: 24,
                padding: '24px 28px', display: 'flex', gap: 16, alignItems: 'center',
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: '50%',
                  background: 'var(--cu-gold)', color: 'var(--cu-navy)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Check size={24} />
                </div>
                <div>
                  <div style={{ font: '800 16px var(--font-sans)' }}>You're in. Welcome to the class.</div>
                  <div style={{ font: '500 13px var(--font-sans)', opacity: 0.7, marginTop: 2 }}>First note hits your inbox this Sunday.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, background: '#fff', padding: 8, borderRadius: 9999, boxShadow: 'var(--shadow-md)' }}>
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    flex: 1, border: 'none', outline: 'none', background: 'transparent',
                    padding: '0 18px', font: '500 16px var(--font-sans)', color: 'var(--cu-navy)',
                    minWidth: 0,
                  }}
                />
                <button type="submit" className="btn btn-navy" style={{ padding: '14px 24px' }}>
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
            <div style={{ marginTop: 14, font: '500 13px var(--font-sans)', color: 'var(--cu-navy)', opacity: 0.7, paddingLeft: 14 }}>
              No spam. One note, one tip. Unsubscribe in two clicks.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
