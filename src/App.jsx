import Navbar from './components/Navbar';
import Router from './components/Router';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Navbar />
      <main className="pt-20">
        <Router />
      </main>
      <Footer />
    </div>
  );
}
