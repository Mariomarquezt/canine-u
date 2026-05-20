import { useState } from 'react';
import type { FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Check, ArrowRight } from './icons';

const programs = ['Private Lessons', 'Board & Train', 'Behavior Mod', 'Puppy Foundations', 'Day School', 'Not sure yet'];

const rows = [
  { Icon: Phone, l: 'Call or Text', v: '954-268-8899', href: 'tel:9542688899' },
  { Icon: Mail, l: 'Email', v: 'hello@canine-u.com', href: 'mailto:hello@canine-u.com' },
  { Icon: MapPin, l: 'Home base', v: 'Sunrise, FL · Broward County', href: '' },
  { Icon: Clock, l: 'Office hours', v: 'Mon–Sat · 8a–7p', href: '' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [program, setProgram] = useState('Not sure yet');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ background: 'var(--cu-navy)', color: '#fff', position: 'relative', overflow: 'hidden', padding: '110px 0' }}>
      <div className="paws on-dark"></div>
      <div className="container-wide" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <div className="eyebrow on-dark"><span className="tick" style={{ background: 'var(--cu-gold)' }}></span>Office Hours · Tell me about your dog</div>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: 24 }}>
              Let's start with a <span style={{ color: 'var(--cu-gold)' }}>conversation.</span>
            </h2>
            <p style={{ font: '500 17px var(--font-sans)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, maxWidth: 480, marginBottom: 36 }}>
              Fill this out and I'll text you back within a day to set up a free 20-minute Meet &amp; Greet.
              No pitch, no pressure — I just need to hear what's going on.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginBottom: 40 }}>
              {rows.map(({ Icon, l, v, href }, i) => (
                <a
                  key={i}
                  href={href || '#'}
                  style={{ display: 'flex', gap: 16, alignItems: 'center', textDecoration: 'none', color: '#fff' }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={20} color="var(--cu-gold)" />
                  </div>
                  <div>
                    <div style={{ font: '800 11px var(--font-sans)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>{l}</div>
                    <div style={{ font: '700 17px var(--font-sans)', marginTop: 3, color: '#fff' }}>{v}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="hairline on-dark"></div>
            <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 12, font: '500 14px var(--font-sans)', color: 'rgba(255,255,255,0.7)' }}>
              <ShieldCheck size={18} color="var(--cu-gold)" />
              I never share your info. Pinky promise.
            </div>
          </div>

          <div style={{
            background: '#fff', borderRadius: 32, padding: 44,
            color: 'var(--cu-navy)', boxShadow: 'var(--shadow-xl)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{
                  width: 80, height: 80, margin: '0 auto 20px', borderRadius: '50%',
                  background: 'rgba(98,213,138,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Check size={40} color="#3f8a5c" />
                </div>
                <h3 style={{ margin: '0 0 12px', font: '900 28px var(--font-display)', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>Got it — talk soon!</h3>
                <p style={{ margin: '0 auto 28px', font: '500 16px var(--font-sans)', color: 'var(--fg2)', maxWidth: 380, lineHeight: 1.6 }}>
                  I'll text you within 24 hours to set up a free Meet &amp; Greet. In the meantime, give the field notes a read or check out our Instagram.
                </p>
                <button className="btn btn-navy" onClick={() => setSubmitted(false)}>
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h3 style={{ margin: '0 0 8px', font: '900 28px var(--font-display)', letterSpacing: '-0.01em', textTransform: 'uppercase', color: 'var(--cu-navy)' }}>
                  The intake form
                </h3>
                <p style={{ margin: '0 0 28px', font: '500 14px var(--font-sans)', color: 'var(--fg2)' }}>
                  About 60 seconds. Fields marked * are required.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
                  <div>
                    <label className="field-label">Your name *</label>
                    <input className="field-input" required placeholder="Brianna Alamo" />
                  </div>
                  <div>
                    <label className="field-label">Phone *</label>
                    <input className="field-input" required type="tel" placeholder="(954) 555-0199" />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 18 }}>
                  <div>
                    <label className="field-label">Email *</label>
                    <input className="field-input" required type="email" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="field-label">Dog's name</label>
                    <input className="field-input" placeholder="Buddy" />
                  </div>
                </div>

                <div style={{ marginBottom: 22 }}>
                  <label className="field-label">Which program sounds right?</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {programs.map((p) => (
                      <button key={p} type="button" onClick={() => setProgram(p)} style={{
                        padding: '10px 16px',
                        borderRadius: 9999,
                        border: '1.5px solid ' + (program === p ? 'var(--cu-navy)' : 'var(--border-strong)'),
                        background: program === p ? 'var(--cu-navy)' : '#fff',
                        color: program === p ? '#fff' : 'var(--cu-navy)',
                        font: '700 13px var(--font-sans)',
                        cursor: 'pointer',
                        transition: 'all 180ms',
                      }}>{p}</button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label className="field-label">Tell me about your dog *</label>
                  <textarea className="field-input" required rows={4} placeholder="Breed, age, what's going well, what's driving you up the wall." />
                </div>

                <button type="submit" className="btn btn-gold btn-lg" style={{ width: '100%' }}>
                  Send my inquiry
                  <ArrowRight size={18} />
                </button>
                <div style={{ marginTop: 14, font: '500 12px var(--font-sans)', color: 'var(--fg3)', textAlign: 'center' }}>
                  Or just <a href="tel:9542688899" style={{ color: 'var(--cu-navy)', borderBottom: '1px solid var(--cu-navy)' }}>call 954-268-8899</a> — I'm probably with a dog, but I'll text back fast.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
