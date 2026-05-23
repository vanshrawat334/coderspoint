import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="border-b border-border pb-10 mb-12">
        <span className="font-mono text-xs text-muted uppercase tracking-widest">Get in touch</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-ink tracking-tight">Contact</h1>
        <p className="mt-3 text-sm text-muted">We read every message and reply within 2 business days.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-3xl">
        {/* Form */}
        {!sent ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted font-mono uppercase tracking-widest">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="border-b border-border bg-transparent py-2 text-sm text-ink placeholder:text-zinc-300 outline-none focus:border-ink transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted font-mono uppercase tracking-widest">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="border-b border-border bg-transparent py-2 text-sm text-ink placeholder:text-zinc-300 outline-none focus:border-ink transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-muted font-mono uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                rows={4}
                required
                className="border-b border-border bg-transparent py-2 text-sm text-ink placeholder:text-zinc-300 outline-none focus:border-ink transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="self-start bg-ink text-white text-sm px-6 py-2.5 rounded-full hover:bg-zinc-800 transition-colors"
            >
              Send message
            </button>
          </form>
        ) : (
          <div className="flex flex-col justify-center gap-3">
            <span className="font-mono text-2xl">✓</span>
            <h2 className="text-xl font-medium text-ink">Message sent</h2>
            <p className="text-sm text-muted">Thanks, {form.name}. We'll get back to you at {form.email} soon.</p>
            <button
              onClick={() => { setForm({ name: '', email: '', message: '' }); setSent(false); }}
              className="self-start text-xs text-muted underline underline-offset-2 mt-2"
            >
              Send another
            </button>
          </div>
        )}

        {/* Info */}
        <div className="flex flex-col gap-8 text-sm">
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-2">Email</p>
            <p className="text-ink">hello@coderspoint.dev</p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-2">Based in</p>
            <p className="text-ink">India</p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-widest mb-2">Response time</p>
            <p className="text-ink">Within 2 business days</p>
          </div>
        </div>
      </div>
    </main>
  );
}
