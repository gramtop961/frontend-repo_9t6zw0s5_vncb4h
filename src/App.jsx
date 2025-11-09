import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { HowItWorks, Classifier, Directory, PestDetail } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-lime-50 text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Classifier />
        <Directory />
        <PestDetail />
        <About />
      </main>
      <Footer />
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">Why PestHub</h2>
        <p className="text-emerald-900/70 mt-2 max-w-3xl">Built on Google Gemini’s multimodal capabilities, PestHub reads images and text to identify pests with precision. Our pipeline blends computer vision with agronomy knowledge to produce trustworthy, actionable guidance.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card title="Multimodal AI" text="Analyzes leaf texture, lesion edges, colony density, and context for robust identification."/>
          <Card title="Speed & Accuracy" text="Optimized for sub‑3s results with ~95% accuracy across 12 common categories."/>
          <Card title="Sustainable focus" text="Recommendations prioritize IPM and beneficial insects before chemicals."/>
        </div>
        <div className="mt-8 p-6 rounded-2xl border border-emerald-100 bg-white/70 shadow-sm">
          <h3 className="text-xl font-bold">How it compares</h3>
          <ul className="mt-3 grid md:grid-cols-2 gap-2 text-emerald-900/80">
            <li>Traditional ID: slow manual lookup → PestHub: instant, guided.</li>
            <li>Generic models: low agri-context → PestHub: agronomy-tuned signals.</li>
            <li>One-size advice → PestHub: balanced organic/chemical options.</li>
            <li>Static lists → PestHub: AI custom search for long-tail pests.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Card({ title, text }) {
  return (
    <div className="p-6 rounded-2xl bg-white/70 border border-emerald-100 shadow-sm">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-emerald-900/80 mt-1">{text}</p>
    </div>
  );
}

export default App;
