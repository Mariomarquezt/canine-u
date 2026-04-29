import { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  { q: "Do you use e-collars or prong collars?", a: "No. I work force-free, with food, play, and clear handling. The science doesn't support aversive tools — and after ten years I haven't needed them." },
  { q: "How fast will I see results?", a: "Most clients feel a real shift inside the first two sessions. Real, durable change usually takes 4–8 weeks of consistent practice. Anyone promising a one-week miracle is selling you something." },
  { q: "What's a Meet & Greet?", a: "A free 20-minute call (phone or video) where you tell me what's going on, I ask a lot of questions, and we figure out which program — if any — is right. No pressure to book." },
  { q: "Do you take aggressive dogs?", a: "Sometimes. Behavior Modification is by application — I want to talk to you, see videos, and maybe loop in your vet first. If a board-certified veterinary behaviorist needs to be involved, I'll tell you so." },
  { q: "What does Board & Train actually look like?", a: "Your dog moves into my home in Sunrise — not a kennel — for 2 or 3 weeks. They learn alongside my own dogs and get 4–6 short training sessions a day. You get daily video updates, two transfer-day lessons, and two follow-up visits." },
  { q: "Where are you located? Do you travel?", a: "Home base is Sunrise, FL. I do private lessons throughout Broward County (Plantation, Davie, Weston, Fort Lauderdale) and will go further for the right fit. Add a small travel fee outside that radius." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" style={{ background: 'var(--cu-cream)', padding: '110px 0' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 80, alignItems: 'flex-start' }}>
          <div style={{ position: 'sticky', top: 110 }}>
            <div className="eyebrow"><span className="tick"></span>Office Hours · Q&amp;A</div>
            <h2 className="section-title">Things people ask before booking.</h2>
            <p className="section-lead" style={{ marginBottom: 32 }}>
              Don't see your question? Text me at 954-268-8899 or drop it in the form below — I read everything.
            </p>
            <div style={{
              padding: '24px 26px',
              background: '#fff',
              borderRadius: 24,
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
            }}>
              <div style={{
                width: 54, height: 54, borderRadius: '50%', overflow: 'hidden',
                border: '3px solid var(--cu-gold)', flexShrink: 0,
              }}>
                <img src="/assets/brianna.jpg" alt="Brianna" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ font: '800 14px var(--font-sans)', color: 'var(--cu-navy)' }}>Got a tougher question?</div>
                <div style={{ font: '500 13px var(--font-sans)', color: 'var(--fg2)', marginTop: 3 }}>I usually text back same day.</div>
              </div>
            </div>
          </div>

          <div>
            {FAQS.map((f, i) => {
              const isOpen = i === open;
              return (
                <div key={i} className="accordion-item">
                  <button
                    className="accordion-btn"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span style={{ paddingRight: 24 }}>{f.q}</span>
                    <span className="plus">
                      <Plus size={18} color="var(--cu-navy)" />
                    </span>
                  </button>
                  <div className="accordion-content" style={{ maxHeight: isOpen ? 400 : 0 }}>
                    <div className="accordion-content-inner">{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
