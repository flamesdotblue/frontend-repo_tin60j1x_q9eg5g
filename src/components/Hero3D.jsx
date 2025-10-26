import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay that doesn't block 3D interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.2),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-white via-blue-100 to-violet-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Building the Future with Precision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-slate-200/90 sm:text-lg"
        >
          Sri Vinayaka Construction delivers end-to-end construction engineering—
          from concept to commissioning—powered by technology and craftsmanship.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#/projects" className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-[1.02]">
            View Projects
          </a>
          <a href="#/contact" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur-md transition-colors hover:border-white/40">
            Request a Quote
          </a>
        </motion.div>

        {/* Floating stats */}
        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { k: 'Years', v: '15+' },
            { k: 'Projects', v: '250+' },
            { k: 'Clients', v: '120+' },
            { k: 'Cities', v: '20+' },
          ].map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i }}
              className="rounded-xl border border-white/10 bg-slate-900/70 p-4 text-left backdrop-blur-xl"
            >
              <div className="text-2xl font-bold text-white">{s.v}</div>
              <div className="text-xs uppercase tracking-wide text-slate-300/70">{s.k}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
