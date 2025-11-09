import { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, Upload, PlayCircle, Search, Loader2, CheckCircle2, Info, Shield, Bug, Scan, Filter, List, Grid3X3, X, Sparkles } from 'lucide-react';

// Shared UI primitives
export function Pill({ children, color = 'emerald' }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-${color}-50 text-${color}-700 border border-${color}-200`}>{children}</span>
  );
}

export function Badge({ tone = 'emerald', children }) {
  const tones = {
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    red: 'bg-rose-50 text-rose-700 border-rose-200',
    sky: 'bg-sky-50 text-sky-700 border-sky-200',
  };
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${tones[tone]}`}>{children}</span>;
}

// How it works
export function HowItWorks() {
  const steps = [
    { icon: <Upload className="h-5 w-5" />, title: 'Upload', text: 'Drag & drop a field photo or paste a link.' },
    { icon: <Scan className="h-5 w-5" />, title: 'AI Analyze', text: 'Gemini inspects patterns, textures, and context.' },
    { icon: <CheckCircle2 className="h-5 w-5" />, title: 'Act', text: 'Get treatments and prevention tailored to your crop.' },
  ];
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">How it works</h2>
        <p className="text-emerald-900/70 mt-2">A delightful, 3‑step journey from uncertainty to action.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-white/70 border border-emerald-100 shadow-sm">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-100 text-emerald-700 mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-emerald-900">{s.title}</h3>
              <p className="text-emerald-900/70 mt-1">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Classifier
export function Classifier() {
  const inputRef = useRef(null);
  const [stage, setStage] = useState('upload'); // upload | preview | processing | result
  const [file, setFile] = useState(null);

  function onDrop(e) {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) {
      setFile(f);
      setStage('preview');
    }
  }

  function onPick(e) {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      setStage('preview');
    }
  }

  function classify() {
    setStage('processing');
    // Simulate processing
    setTimeout(() => setStage('result'), 1800);
  }

  function reset() {
    setFile(null);
    setStage('upload');
  }

  return (
    <section id="classify" className="py-16 bg-gradient-to-b from-white to-emerald-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">Classify a pest</h2>
            <p className="text-emerald-900/70 mt-2">Four smooth states designed for clarity and speed.</p>
          </div>
          <Badge tone="sky">95% accuracy</Badge>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* State panel */}
          <div className="rounded-2xl border border-emerald-100 bg-white/70 shadow-sm p-4 md:p-6">
            {stage === 'upload' && (
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                className="h-72 grid place-items-center border-2 border-dashed border-emerald-200 rounded-xl bg-emerald-50/50 text-emerald-700"
              >
                <div className="text-center">
                  <Images className="h-10 w-10 mx-auto mb-3" />
                  <p className="font-semibold">Drag & drop an image</p>
                  <p className="text-sm opacity-80">or click to browse</p>
                  <button onClick={() => inputRef.current?.click()} className="mt-4 px-4 py-2 rounded-full bg-emerald-600 text-white font-semibold shadow hover:shadow-md">Upload</button>
                  <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onPick} />
                </div>
              </div>
            )}

            {stage === 'preview' && (
              <div>
                <div className="aspect-video rounded-xl overflow-hidden border border-emerald-100">
                  <img src={URL.createObjectURL(file)} alt="preview" className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button onClick={classify} className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold shadow hover:shadow-lg inline-flex items-center gap-2">
                    <PlayCircle className="h-5 w-5" /> Classify
                  </button>
                  <button onClick={reset} className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-semibold">Reset</button>
                </div>
              </div>
            )}

            {stage === 'processing' && (
              <div className="h-72 grid place-items-center">
                <div className="text-center animate-pulse">
                  <Loader2 className="h-8 w-8 mx-auto mb-3 animate-spin text-emerald-700" />
                  <p className="font-semibold text-emerald-900">Analyzing with Gemini…</p>
                  <p className="text-sm text-emerald-900/70">Pattern matching • Leaf texture • Damage spread</p>
                </div>
              </div>
            )}

            {stage === 'result' && (
              <div>
                <div className="flex items-start gap-4">
                  <img src={URL.createObjectURL(file)} alt="classified" className="w-32 h-32 object-cover rounded-xl border" />
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-900">Aphid</h3>
                    <p className="text-emerald-900/70">Confidence: <span className="font-semibold text-emerald-800">94%</span></p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>Soft-bodied • Sap-sucking</Badge>
                      <Badge tone="amber">Moderate threat</Badge>
                    </div>
                    <p className="mt-3 text-emerald-900/80">Recommendations: introduce lady beetles, use neem oil for organic control, consider selective insecticide if infestation persists.</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <button onClick={reset} className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-semibold">Classify another</button>
                </div>
              </div>
            )}
          </div>

          {/* Tips & Story */}
          <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-lime-50 p-6">
            <h3 className="text-xl font-bold text-emerald-900">Why fast matters</h3>
            <p className="text-emerald-900/70 mt-2">Speed prevents spread. PestHub’s pipeline returns results in under 3 seconds without compromising accuracy.</p>
            <ul className="mt-4 space-y-2 text-emerald-900/80 list-disc list-inside">
              <li>Multi-view learning from millions of crop images</li>
              <li>Context-aware analysis (leaf veins, lesion edges, colony size)</li>
              <li>Localized treatment guidance for sustainable farming</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Directory
const DEFAULT_PESTS = [
  { id: 1, name: 'Aphid', category: 'Insect', threat: 'Medium', img: 'https://images.pexels.com/photos/1095866/pexels-photo-1095866.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, name: 'Whitefly', category: 'Insect', threat: 'High', img: 'https://images.pexels.com/photos/1621605/pexels-photo-1621605.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, name: 'Cutworm', category: 'Larvae', threat: 'High', img: 'https://images.pexels.com/photos/42262/caterpillar-larva-insect-butterfly-42262.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, name: 'Leaf Miner', category: 'Larvae', threat: 'Low', img: 'https://images.pexels.com/photos/2437251/pexels-photo-2437251.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, name: 'Armyworm', category: 'Larvae', threat: 'High', img: 'https://images.pexels.com/photos/56882/caterpillar-insect-close-up-56882.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, name: 'Spider Mite', category: 'Mite', threat: 'Medium', img: 'https://images.pexels.com/photos/161568/insect-tick-macro-acarus-161568.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7, name: 'Thrips', category: 'Insect', threat: 'Medium', img: 'https://images.pexels.com/photos/51416/aphid-plant-louse-green-louse-51416.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8, name: 'Corn Borer', category: 'Larvae', threat: 'High', img: 'https://images.pexels.com/photos/68687/cob-maize-corn-68687.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 9, name: 'Potato Beetle', category: 'Insect', threat: 'High', img: 'https://images.pexels.com/photos/1869800/pexels-photo-1869800.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 10, name: 'Rice Weevil', category: 'Beetle', threat: 'Medium', img: 'https://images.pexels.com/photos/3227765/pexels-photo-3227765.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 11, name: 'Root-Knot Nematode', category: 'Nematode', threat: 'High', img: 'https://images.pexels.com/photos/88512/pexels-photo-88512.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 12, name: 'Fusarium Wilt', category: 'Disease', threat: 'Medium', img: 'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export function Directory() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [threat, setThreat] = useState('All');
  const [view, setView] = useState('grid');
  const [modal, setModal] = useState(null);

  const filtered = useMemo(() => {
    return DEFAULT_PESTS.filter((p) =>
      (category === 'All' || p.category === category) &&
      (threat === 'All' || p.threat === threat) &&
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, category, threat]);

  return (
    <section id="directory" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">Pest directory</h2>
            <p className="text-emerald-900/70 mt-2">Browse 12 common threats. Use AI custom search for anything else.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setModal('ai')} className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold inline-flex items-center gap-2 shadow">
              <Sparkles className="h-5 w-5" /> Custom Search
            </button>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <input
            className="col-span-2 lg:col-span-2 px-4 py-3 rounded-xl border border-emerald-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            placeholder="Search pests by name…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-4 py-3 rounded-xl border border-emerald-200 bg-white/80">
            {['All', 'Insect', 'Larvae', 'Mite', 'Beetle', 'Nematode', 'Disease'].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <select value={threat} onChange={(e) => setThreat(e.target.value)} className="px-4 py-3 rounded-xl border border-emerald-200 bg-white/80 w-full">
              {['All', 'Low', 'Medium', 'High'].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <button onClick={() => setView('grid')} className={`p-3 rounded-xl border ${view==='grid'?'bg-emerald-100 border-emerald-300':'border-emerald-200'} text-emerald-800`} aria-label="Grid view">
              <Grid3X3 className="h-5 w-5" />
            </button>
            <button onClick={() => setView('list')} className={`p-3 rounded-xl border ${view==='list'?'bg-emerald-100 border-emerald-300':'border-emerald-200'} text-emerald-800`} aria-label="List view">
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className={`mt-6 ${view==='grid' ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {filtered.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -4 }} className="rounded-2xl overflow-hidden border border-emerald-100 bg-white/70 shadow-sm">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-emerald-900">{p.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge tone="sky">{p.category}</Badge>
                    <Badge tone={p.threat === 'High' ? 'red' : p.threat === 'Low' ? 'emerald' : 'amber'}>{p.threat} threat</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a href={`#pest-${p.id}`} className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">Preview</a>
                  <a href={`#detail-${p.id}`} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold">Details</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {modal === 'ai' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 grid place-items-center bg-black/40 backdrop-blur-sm p-4">
              <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }} className="w-full max-w-lg rounded-2xl bg-white shadow-xl border border-emerald-100 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-emerald-900">AI Custom Search</h3>
                  <button onClick={() => setModal(null)} className="p-2 text-emerald-700 hover:bg-emerald-50 rounded-lg"><X /></button>
                </div>
                <p className="text-emerald-900/70 mt-1">Describe any pest and we’ll fetch validated insights.</p>
                <div className="mt-4 space-y-3">
                  <input className="w-full px-4 py-3 rounded-xl border border-emerald-200 bg-emerald-50/50" placeholder="e.g., tiny green insect on tomato leaves" />
                  <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-semibold inline-flex items-center justify-center gap-2">
                    <Sparkles className="h-5 w-5" /> Search with AI
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Detail page (static demo section)
export function PestDetail() {
  return (
    <section id="detail-1" className="py-16 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl overflow-hidden border border-emerald-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1522325636832-5dbc1440f793?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcGhpZHxlbnwwfDB8fHwxNzYyNjQ5NjM0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Aphid" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 tracking-tight">Aphid</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge tone="sky">Insect</Badge>
              <Badge tone="amber">Moderate threat</Badge>
            </div>
            <div className="mt-6 space-y-6">
              <Section title="Description & symptoms">
                Soft-bodied, sap-sucking insects that cluster on new growth. Symptoms include curling leaves, honeydew, and sooty mold.
              </Section>
              <Section title="Treatment options">
                <ul className="list-disc list-inside space-y-1">
                  <li><span className="font-semibold">Organic:</span> Neem oil, insecticidal soap, introduce lady beetles.</li>
                  <li><span className="font-semibold">Chemical:</span> Use selective systemic insecticides; avoid harming pollinators.</li>
                </ul>
              </Section>
              <Section title="Prevention">
                Encourage beneficial insects, remove infested leaves, avoid excess nitrogen, use reflective mulches in susceptible crops.
              </Section>
              <Section title="Common variants">
                Green peach aphid, cotton aphid, potato aphid.
              </Section>
              <Section title="Related pests">
                Whiteflies, thrips, spider mites.
              </Section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-emerald-900">{title}</h3>
      <p className="text-emerald-900/80 mt-1">{children}</p>
    </div>
  );
}
