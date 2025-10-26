export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Sri Vinayaka Construction. All rights reserved.</p>
        <div className="text-sm">
          <a href="#/about" className="hover:text-white">About</a>
          <span className="mx-3 opacity-50">•</span>
          <a href="#/projects" className="hover:text-white">Projects</a>
          <span className="mx-3 opacity-50">•</span>
          <a href="#/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
