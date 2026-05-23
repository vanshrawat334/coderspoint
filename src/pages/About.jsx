const team = [
  { name: 'Aryan Mehta', role: 'Founder & Instructor', bio: 'Full-stack engineer with 8 years building products. Taught over 5,000 students.' },
  { name: 'Priya Sharma', role: 'Curriculum Lead', bio: 'Ex-educator turned developer. Obsessed with making complex concepts easy to grasp.' },
  { name: 'Rohan Das', role: 'Backend Instructor', bio: 'Systems engineer who loves Node, databases, and clean API design.' },
];

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="border-b border-border pb-10 mb-14">
        <span className="font-mono text-xs text-muted uppercase tracking-widest">Our Story</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-ink tracking-tight">About CodersPoint</h1>
      </div>

      {/* Mission */}
      <section className="mb-16 max-w-2xl">
        <h2 className="text-sm text-muted uppercase tracking-widest font-mono mb-4">Mission</h2>
        <p className="text-ink text-lg leading-relaxed">
          We built CodersPoint because learning to code shouldn't require navigating a cluttered platform full of upsells and noise.
        </p>
        <p className="text-muted text-base leading-relaxed mt-4">
          Our goal is simple: give every aspiring developer a clear, focused path from their first line of code to their first deployed project. No subscriptions. No certificates that cost money. Just content that actually teaches.
        </p>
      </section>

      {/* Values */}
      <section className="mb-16 border-t border-border pt-12">
        <h2 className="text-sm text-muted uppercase tracking-widest font-mono mb-8">What we believe</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          {[
            { title: 'Learning should be free', desc: 'All our core courses are free. Quality education shouldn\'t sit behind a paywall.' },
            { title: 'Projects over theory', desc: 'The fastest way to learn is to build something. Every lesson ends with you making something.' },
            { title: 'Less is more', desc: 'We cut everything that doesn\'t directly help you learn. No dark patterns, no distractions.' },
            { title: 'Community matters', desc: 'Learning alone is hard. We\'re building a place where you can ask questions and grow together.' },
          ].map(({ title, desc }) => (
            <div key={title}>
              <h3 className="font-medium text-ink text-sm">{title}</h3>
              <p className="text-muted text-sm mt-1.5 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-border pt-12">
        <h2 className="text-sm text-muted uppercase tracking-widest font-mono mb-8">Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map(({ name, role, bio }) => (
            <div key={name}>
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center mb-3">
                <span className="font-mono text-sm text-muted">{name[0]}</span>
              </div>
              <h3 className="font-medium text-ink text-sm">{name}</h3>
              <p className="text-xs text-muted mt-0.5 mb-2">{role}</p>
              <p className="text-xs text-muted leading-relaxed">{bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
