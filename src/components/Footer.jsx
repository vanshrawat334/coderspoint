import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <span className="font-mono text-sm font-medium text-ink">
            coders<span className="text-muted">point</span>
          </span>
          <p className="text-xs text-muted mt-1.5 max-w-xs">
            A minimal platform for developers who want to learn without the noise.
          </p>
        </div>
        <div className="flex gap-10 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted uppercase tracking-widest font-medium">Learn</span>
            <Link to="/courses" className="text-ink hover:text-muted transition-colors">Courses</Link>
            <Link to="/blog" className="text-ink hover:text-muted transition-colors">Blog</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted uppercase tracking-widest font-medium">Company</span>
            <Link to="/about" className="text-ink hover:text-muted transition-colors">About</Link>
            <Link to="/contact" className="text-ink hover:text-muted transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xs text-muted">© 2025 CodersPoint</span>
          <span className="font-mono text-xs text-muted">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
