import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

export default function Home() {
  const featuresRef = useRef(null);

  // Load GSAP via CDN and run a subtle scroll animation when available
  useEffect(() => {
    const addScript = (src) =>
      new Promise((resolve) => {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        document.body.appendChild(s);
      });

    (async () => {
      if (!window.gsap) {
        await addScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js');
      }
      if (!window.ScrollTrigger) {
        await addScript('https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js');
      }

      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        const cards = featuresRef.current?.querySelectorAll('[data-feature-card]');
        if (cards) {
          window.gsap.from(cards, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 80%',
            },
          });
        }
      }
    })();
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero3D />

      <section
        ref={featuresRef}
        className="mx-auto max-w-7xl px-4 py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Full-cycle construction engineering
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-slate-300"
          >
            From design and structural analysis to execution and delivery, we use modern technology and a rigorous QA process to deliver safe, efficient, and beautiful spaces.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Structural Expertise',
              desc: 'Advanced RCC and steel design, seismic compliance, and peer-reviewed drawings.',
              icon: '🏗️',
            },
            {
              title: 'Project Management',
              desc: 'Transparent schedules, quality checkpoints, and budget adherence.',
              icon: '📊',
            },
            {
              title: 'Sustainable Builds',
              desc: 'Materials optimization, water harvesting, and energy-efficient solutions.',
              icon: '🌿',
            },
          ].map((f) => (
            <div
              key={f.title}
              data-feature-card
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-xl transition-colors hover:border-white/20"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
              <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-60 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold sm:text-3xl">Quality without compromise</h3>
              <p className="mt-3 text-slate-300">
                Every site follows a strict inspection checklist, material tests, and digital progress logs. Expect predictable outcomes with a premium finish.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#/projects" className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/20">Explore our work</a>
                <a href="#/contact" className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white">Talk to an engineer</a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/30 to-violet-500/30 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {['Foundation', 'Structure', 'MEP', 'Finishes'].map((s) => (
                    <div key={s} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-sm text-slate-300">Stage</p>
                      <p className="mt-1 text-lg font-semibold text-white">{s}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-sm text-slate-300">Digitally tracked milestones</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
