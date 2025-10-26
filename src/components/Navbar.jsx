import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#/' },
  { label: 'Projects', href: '#/projects' },
  { label: 'About', href: '#/about' },
  { label: 'Blog', href: '#/blog' },
  { label: 'Contact', href: '#/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            onClick={() => onClick?.()}
            className="text-sm font-medium text-slate-200/90 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-slate-900/60 shadow-lg shadow-blue-500/5' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 py-4 md:py-5 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-violet-500 ring-2 ring-white/10" />
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-wide">Sri Vinayaka Construction</p>
            <p className="text-xs text-slate-300/80">Engineering • Excellence • Trust</p>
          </div>
        </a>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <button
          className="md:hidden grid place-items-center h-10 w-10 rounded-md border border-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
