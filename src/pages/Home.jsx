import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Placement Rate', value: '97%', suffix: '' },
  { label: 'Students Placed', value: '12,000', suffix: '+' },
  { label: 'Courses', value: '40', suffix: '+' },
  { label: 'Hiring Partners', value: '80', suffix: '+' },
];

const companies = [
  { name: 'Amazon', logo: '🟠' },
  { name: 'Deloitte', logo: '🟢' },
  { name: 'HCL', logo: '🔵' },
  { name: 'TCS', logo: '🔷' },
  { name: 'Infosys', logo: '🟣' },
  { name: 'Wipro', logo: '⚫' },
  { name: 'Accenture', logo: '🔴' },
  { name: 'Cognizant', logo: '🔵' },
  { name: 'IBM', logo: '🔵' },
  { name: 'Capgemini', logo: '🟤' },
  { name: 'Tech Mahindra', logo: '🟦' },
  { name: 'LTI Mindtree', logo: '🟩' },
];

const features = [
  { icon: '◈', title: 'Structured Learning', desc: 'Every course follows a clear path so you always know what to learn next.' },
  { icon: '◎', title: 'Project-First', desc: 'Every concept is paired with a real project you can add to your portfolio.' },
  { icon: '◇', title: '100% Free', desc: 'All core courses are free. Quality education should never be behind a paywall.' },
];

const testimonials = [
  { name: 'Ritika S.', role: 'Placed at TCS', text: 'CodersPoint gave me the confidence and skills to crack my first tech interview. The structured path made everything so clear.' },
  { name: 'Aman K.', role: 'Placed at HCL', text: 'From zero coding knowledge to a full-time job in 8 months. The DSA course was a game changer for me.' },
  { name: 'Sneha P.', role: 'Placed at Deloitte', text: 'The projects in each course helped me build a strong portfolio. Got multiple interview calls within weeks.' },
];

function useCountUp(target, duration = 1800, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/[^0-9]/g, ''));
    let start = 0;
    const step = num / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return count;
}

function StatCard({ label, value, suffix }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const count = useCountUp(value, 1800, inView);
  const display = value.includes('%') ? count + '%' : count.toLocaleString() + suffix;
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-ink tracking-tight">{display}</div>
      <div className="text-xs text-muted mt-1.5">{label}</div>
    </div>
  );
}

export default function Home() {
  const [activeTest, setActiveTest] = useState(0);
  const doubled = [...companies, ...companies];

  useEffect(() => {
    const t = setInterval(() => setActiveTest(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32 border-b border-border">
        <div className="max-w-2xl opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-widest">
            <span className="relative w-2 h-2 pulse-ring bg-green-400 rounded-full inline-block"></span>
            97% Placement Rate
          </span>
          <h1 className="mt-5 text-5xl md:text-7xl font-bold text-ink leading-[1.05] tracking-tight">
            Learn to code.<br />
            <span className="text-muted font-light">Get hired.</span>
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl opacity-0 animate-fade-up delay-200" style={{ animationFillMode: 'forwards' }}>
            CodersPoint is a focused, free learning platform. From your first line of code to your first tech job — we've got the path.
          </p>
          <div className="mt-8 flex items-center gap-4 opacity-0 animate-fade-up delay-300" style={{ animationFillMode: 'forwards' }}>
            <Link to="/courses"
              className="bg-ink text-white text-sm px-7 py-3 rounded-full hover:bg-zinc-800 transition-all active:scale-95 font-medium">
              Browse Courses →
            </Link>
            <Link to="/about" className="text-sm text-muted hover:text-ink transition-colors underline underline-offset-4">
              Our story
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>
      </section>

      {/* Companies marquee */}
      <section className="border-b border-border py-10 overflow-hidden">
        <p className="text-center text-xs text-muted font-mono uppercase tracking-widest mb-8">Our students are placed at</p>
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {doubled.map((c, i) => (
            <div key={i} className="inline-flex items-center gap-2.5 mx-8 shrink-0">
              <span className="text-base">{c.logo}</span>
              <span className="text-sm font-medium text-ink">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-border">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-12 tracking-tight">Why CodersPoint?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="card-hover border border-border rounded-xl p-6 cursor-default">
              <span className="text-2xl text-muted">{icon}</span>
              <h3 className="mt-4 font-semibold text-ink text-base">{title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placement highlight */}
      <section className="border-b border-border bg-ink text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Placement</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">97% of our<br />students get hired.</h2>
            <p className="mt-4 text-white/60 text-sm max-w-md leading-relaxed">
              Our curriculum is built around real interview patterns and industry projects. Every student leaves with a portfolio and the skills to back it up.
            </p>
            <Link to="/courses"
              className="mt-7 inline-flex bg-white text-ink text-sm px-6 py-2.5 rounded-full hover:bg-zinc-100 transition-colors font-medium active:scale-95">
              Start for free →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3 shrink-0">
            {companies.slice(0, 9).map(c => (
              <div key={c.name}
                className="bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-center hover:bg-white/20 transition-colors cursor-default">
                <span className="text-xl">{c.logo}</span>
                <p className="text-xs text-white/70 mt-1 font-medium">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-border">
        <h2 className="text-2xl md:text-3xl font-bold text-ink mb-10 tracking-tight">Student Stories</h2>
        <div className="relative overflow-hidden">
          {testimonials.map((t, i) => (
            <div key={i}
              className={`transition-all duration-500 ${i === activeTest ? 'opacity-100 translate-y-0' : 'opacity-0 absolute top-0 translate-y-4 pointer-events-none'}`}>
              <div className="border border-border rounded-2xl p-8 max-w-2xl">
                <p className="text-base text-ink leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center font-mono text-xs">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveTest(i)}
              className={`w-6 h-1.5 rounded-full transition-all ${i === activeTest ? 'bg-ink' : 'bg-border hover:bg-muted'}`} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-ink tracking-tight">Ready to start?</h2>
        <p className="mt-4 text-muted max-w-md mx-auto text-sm leading-relaxed">
          Pick a course, build projects, get placed. It's that simple.
        </p>
        <Link to="/courses"
          className="mt-8 inline-flex bg-ink text-white text-sm px-10 py-3.5 rounded-full hover:bg-zinc-800 transition-all active:scale-95 font-medium">
          See All Courses →
        </Link>
      </section>
    </main>
  );
}
