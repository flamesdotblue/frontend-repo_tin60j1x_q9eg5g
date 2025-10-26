import { motion } from 'framer-motion';

export default function About() {
  const values = [
    { k: 'Safety First', d: 'Zero-compromise safety culture across people, site, and processes.' },
    { k: 'Engineering Rigor', d: 'Peer reviews, QA/QC checklists, and traceable documentation.' },
    { k: 'Client Centric', d: 'Transparent communication and predictable delivery.' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            About Sri Vinayaka Construction
          </motion.h1>
          <p className="mt-3 text-slate-300">We are a construction engineering company specializing in high-quality builds powered by technology, skilled teams, and accountable processes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{v.k}</h3>
              <p className="mt-2 text-slate-300">{v.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-slate-300">
              To design and deliver safe, sustainable, and aesthetically compelling spaces that stand the test of time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ul className="space-y-4">
              {["ISO-aligned processes", 'Certified engineers and supervisors', 'Transparent billing and BoQs', 'Dedicated post-handover support'].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs">✓</span>
                  <span className="text-slate-300">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
