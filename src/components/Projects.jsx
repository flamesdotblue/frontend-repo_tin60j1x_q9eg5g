import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Skyline Residences',
    location: 'Bengaluru',
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Tech Park Annex',
    location: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Riverside Villas',
    location: 'Mysuru',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Metro Station Upgrade',
    location: 'Chennai',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
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
            Signature Projects
          </motion.h1>
          <p className="mt-3 text-slate-300">A selection of our recent work across residential, commercial, and infrastructure.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.location}</p>
                <a href="#/contact" className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm">Request details</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
