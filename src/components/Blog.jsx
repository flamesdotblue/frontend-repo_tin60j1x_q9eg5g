import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Choosing the Right Foundation System',
    date: 'Sep 10, 2025',
    excerpt: 'Soil testing insights and how they influence raft, pile, and isolated footings.',
  },
  {
    title: 'Budgeting a Mid-rise Project',
    date: 'Aug 28, 2025',
    excerpt: 'Breaking down costs across structure, MEP, finishes, and contingencies.',
  },
  {
    title: 'Sustainability in Urban Housing',
    date: 'Aug 05, 2025',
    excerpt: 'Practical steps to reduce lifecycle costs with greener choices.',
  },
];

export default function Blog() {
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
            Insights & Updates
          </motion.h1>
          <p className="mt-3 text-slate-300">Engineering insights, best practices, and company news.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs text-slate-400">{p.date}</p>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300">{p.excerpt}</p>
              <a href="#/contact" className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300">Work with us →</a>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
