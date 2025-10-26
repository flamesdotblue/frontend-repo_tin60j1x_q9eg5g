import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Contact Us
          </motion.h1>
          <p className="mt-3 text-slate-300">Tell us about your project. Our engineering team will get back within 24 hours.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/70 px-3 py-2 outline-none ring-blue-500 focus:ring-2" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/70 px-3 py-2 outline-none ring-blue-500 focus:ring-2" placeholder="name@email.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Phone</label>
                <input className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/70 px-3 py-2 outline-none ring-blue-500 focus:ring-2" placeholder="(+91) 98xxxxxxx" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Project details</label>
                <textarea rows={5} className="mt-1 w-full rounded-md border border-white/10 bg-slate-900/70 px-3 py-2 outline-none ring-blue-500 focus:ring-2" placeholder="Site location, scope, timeline, budget..." />
              </div>
            </div>
            <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 font-medium">Send inquiry</button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6"
          >
            <h3 className="text-xl font-semibold">Reach us</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <p>📍 Bengaluru, Karnataka</p>
              <p>✉️ hello@srivinayakaconstruction.com</p>
              <p>☎️ +91 98xx-xxx-xxx</p>
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-sm text-slate-300">Working hours</p>
              <p className="text-white">Mon–Sat • 9:00 AM – 6:00 PM IST</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
