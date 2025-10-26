import { useEffect, useState } from 'react';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';

function getPath() {
  const hash = window.location.hash.replace('#', '');
  const path = hash || '/';
  return path;
}

export default function Router() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const onHash = () => setPath(getPath());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  switch (path) {
    case '/projects':
      return <Projects />;
    case '/about':
      return <About />;
    case '/blog':
      return <Blog />;
    case '/contact':
      return <Contact />;
    case '/':
    default:
      return <Home />;
  }
}
