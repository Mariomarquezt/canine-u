import { useState } from 'react';

type Transformation = {
  id: string;
  name: string;
  breed: string;
  issue: string;
  program: string;
  quote: string;
  owner: string;
  img: string;
  weeks: number;
};

const TRANSFORMATIONS: Transformation[] = [
  {
    id: 'milo',
    name: 'Milo',
    breed: 'Goldendoodle · 14mo',
    issue: 'Leash reactivity, jumping on guests',
    program: 'Board & Train · 3 weeks',
    quote: "Milo can finally walk past another dog without losing his mind. Worth every dollar.",
    owner: 'The Park family · Davie',
    img: 'hero-trainer.png',
    weeks: 3,
  },
  {
    id: 'luna',
    name: 'Luna',
    breed: 'Rescue mix · 4yr',
    issue: 'Severe fear, would not leave the house',
    program: 'Behavior Mod · 12 weeks',
    quote: "I cried the first time Luna walked to the mailbox without shaking. We have a different dog.",
    owner: 'Maya R. · Plantation',
    img: 'agility.png',
    weeks: 12,
  },
  {
    id: 'biscuit',
    name: 'Biscuit',
    breed: 'Lab puppy · 5mo',
    issue: 'Mouthing, no recall, potty accidents',
    program: 'Puppy Foundations · 6 weeks',
    quote: "Brianna gave us a plan. We followed it. Biscuit is honestly easier to live with than our toddler now.",
    owner: 'The Diaz family · Weston',
    img: 'board-train.png',
    weeks: 6,
  },
];

export default function Transformations() {
  const [active, setActive] = useState(0);
  const t = TRANSFORMATIONS[active]!;

  return (
    <section id="transformations" style={{ background: 'var(--cu-cream)', position: 'relative', padding: '110px 0' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end', marginBottom: 56 }}>
          <div>
            <div className="eyebrow"><span className="tick"></span>Transformations · Real graduates</div>
            <h2 className="section-title">Real dogs. <span style={{ color: 'var(--cu-gold)' }}>Real results.</span></h2>
          </div>
          <p className="section-lead" style={{ marginLeft: 'auto' }}>
            I'd rather show you what we did than tell you what we promise.
            Pick a graduate to read their story.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'flex-start' }}>
          <div className="ba-wrap">
            <img src={`/assets/${t.img}`} alt={`${t.name} — ${t.breed}`} />
          </div>

          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
              {TRANSFORMATIONS.map((x, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={x.id}
                    onClick={() => setActive(i)}
                    style={{
                      textAlign: 'left',
                      cursor: 'pointer',
                      background: isActive ? 'var(--cu-navy)' : '#fff',
                      color: isActive ? '#fff' : 'var(--cu-navy)',
                      border: '1px solid ' + (isActive ? 'var(--cu-navy)' : 'var(--border)'),
                      borderRadius: 18,
                      padding: '14px 18px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 14,
                      transition: 'all 200ms',
                    }}
                  >
                    <div>
                      <div style={{ font: '900 18px var(--font-display)', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>{x.name}</div>
                      <div style={{ font: '500 12px var(--font-sans)', opacity: 0.75, marginTop: 2 }}>{x.breed}</div>
                    </div>
                    <div style={{
                      font: '800 11px var(--font-sans)',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--cu-gold)' : 'var(--fg3)',
                    }}>
                      {x.weeks} wks
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="side-rule" style={{ padding: '4px 0 4px 22px' }}>
              <div style={{ font: '800 12px var(--font-sans)', color: 'var(--cu-navy)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>
                What we worked on
              </div>
              <div style={{ font: '500 15px var(--font-sans)', color: 'var(--fg2)', marginBottom: 18, lineHeight: 1.55 }}>{t.issue}</div>
              <div style={{ font: '800 12px var(--font-sans)', color: 'var(--cu-navy)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>
                Program
              </div>
              <div style={{ font: '700 15px var(--font-sans)', color: 'var(--cu-navy)', marginBottom: 22 }}>{t.program}</div>

              <blockquote style={{
                margin: 0,
                padding: '18px 22px',
                background: '#fff',
                borderRadius: 18,
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ font: '500 16px var(--font-sans)', color: 'var(--cu-navy)', lineHeight: 1.55, fontStyle: 'italic', marginBottom: 10 }}>
                  "{t.quote}"
                </div>
                <div style={{ font: '700 12px var(--font-sans)', color: 'var(--fg3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  — {t.owner}
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
