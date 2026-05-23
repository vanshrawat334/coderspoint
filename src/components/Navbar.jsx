import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''} border-b border-border`}>
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-mono font-semibold text-ink text-sm tracking-tight">
          coders<span className="text-muted">point</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-ink font-semibold' : 'text-muted hover:text-ink'}`}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/courses"
          className="hidden md:inline-flex items-center text-sm bg-ink text-white px-4 py-1.5 rounded-full hover:bg-zinc-800 transition-colors active:scale-95">
          Start Learning
        </Link>
        <button className="md:hidden text-ink p-1" onClick={() => setOpen(!open)}>
          <span className="font-mono text-xs">{open ? '[×]' : '[≡]'}</span>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-4 animate-fade-in">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm block py-1 ${isActive ? 'text-ink font-semibold' : 'text-muted'}`}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
