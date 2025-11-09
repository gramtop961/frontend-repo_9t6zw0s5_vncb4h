import { motion } from 'framer-motion';
import { Sparkles, Shield, Gauge, Leaf } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/Ti8p9C7lI0vG8gXS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20 grid md:grid-cols-2 gap-10">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 mb-4"
          >
            <Sparkles className="h-4 w-4" /> New: Gemini-powered Pest ID in under 3s
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-900"
          >
            AI‑powered pest protection for every field
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-emerald-900/70 text-lg"
          >
            Upload a photo or search by name. Get instant identification, treatment plans, and prevention strategies. Protect crops, maximize yield.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#classify" className="px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold shadow hover:shadow-lg transition inline-flex items-center gap-2">
              <Shield className="h-5 w-5" /> Start Classifying
            </a>
            <a href="#directory" className="px-5 py-3 rounded-full bg-emerald-100 text-emerald-800 font-semibold hover:bg-emerald-200 transition inline-flex items-center gap-2">
              <Leaf className="h-5 w-5" /> Explore Directory
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
            <Feature icon={<Shield className='h-5 w-5' />} title="95% accuracy"/>
            <Feature icon={<Gauge className='h-5 w-5' />} title="<3s results"/>
            <Feature icon={<Sparkles className='h-5 w-5' />} title="Gemini AI"/>
            <Feature icon={<Leaf className='h-5 w-5' />} title="Crop protection"/>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative h-[420px] md:h-auto"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-200/50 to-lime-200/50 backdrop-blur pointer-events-none" />
          <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl">
            <video
              className="h-full w-full object-cover"
              src="https://videos.pexels.com/video-files/854136/854136-hd_1280_720_24fps.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-2 bg-white/70 p-3 rounded-xl border border-emerald-100 shadow-sm">
      <div className="h-8 w-8 grid place-items-center rounded-lg bg-emerald-100 text-emerald-700">
        {icon}
      </div>
      <p className="text-emerald-900 font-semibold">{title}</p>
    </div>
  );
}
