import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Phone, Mail, MapPin, User, ChevronRight } from 'lucide-react';

const DOCTOLIB = "https://www.doctolib.de/zahnarztpraxis/unterschleissheim/zahnarztpraxis-isabella-von-bukowski";

// --- Components ---

const Nav = () => (
  <nav className="fixed w-full z-50 bg-cream/80 backdrop-blur-md border-b border-sage/20">
    <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
      <Link to="/" className="serif text-2xl text-charcoal font-medium tracking-wide">
        Isabella <span className="text-sage italic">von Bukowski</span>
      </Link>
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-bold text-gray-500">
        <Link to="/team" className="hover:text-sage transition">Team</Link>
        <Link to="/services" className="hover:text-sage transition">Leistungen</Link>
        <a href={DOCTOLIB} target="_blank" className="bg-sage text-white px-6 py-3 rounded-full hover:bg-gold transition shadow-md">
          Termin Buchen
        </a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-white py-16 px-6 border-t border-sage/10">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <h4 className="serif text-xl mb-6">Kontakt</h4>
        <div className="space-y-4 text-gray-600">
          <p className="flex items-center gap-3"><Phone size={16} /> 089 / 37006972</p>
          <p className="flex items-center gap-3"><Mail size={16} /> isabella@von-bukowski.de</p>
          <p className="flex items-center gap-3"><MapPin size={16} /> Unterschleißheim</p>
        </div>
      </div>
      <div>
        <h4 className="serif text-xl mb-6">Sprechzeiten</h4>
        <p className="text-gray-600 leading-loose">
          Mo - Fr: 08:00 - 18:00 <br/>
          Termine nach Vereinbarung
        </p>
      </div>
      <div>
        <h4 className="serif text-xl mb-6">Rechtliches</h4>
        <div className="flex flex-col gap-2 text-gray-500 text-sm">
          <a href="#" className="hover:text-sage">Impressum</a>
          <a href="#" className="hover:text-sage">Datenschutz</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const Home = () => (
  <div className="pt-20">
    {/* Hero */}
    <header className="relative min-h-[80vh] flex items-center px-6 bg-[#F4F1EA]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity: 0, x: -30}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}}>
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Zahnarztpraxis München</span>
          <h1 className="serif text-5xl md:text-7xl mb-8 leading-tight text-charcoal">
            Ihre persönliche <br/> <span className="italic text-sage">Wohlfühlpraxis.</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
            Kompetenz trifft auf Herzlichkeit. Wir nehmen uns Zeit für Sie und Ihre Zahngesundheit.
            In entspannter Atmosphäre.
          </p>
          <div className="flex gap-4">
            <a href={DOCTOLIB} className="bg-charcoal text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold transition shadow-lg">
              Termin Online
            </a>
            <Link to="/services" className="px-8 py-4 border border-charcoal rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition">
              Leistungen
            </Link>
          </div>
        </motion.div>
        
        <div className="relative h-[600px] hidden md:block">
          <div className="absolute inset-0 bg-sage/20 rounded-t-full transform rotate-3"></div>
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" 
            className="absolute inset-0 w-full h-full object-cover rounded-t-full shadow-2xl"
            alt="Praxis"
          />
        </div>
      </div>
    </header>

    {/* Philosophy */}
    <section className="py-32 px-6 text-center max-w-3xl mx-auto">
      <Sparkles className="w-8 h-8 text-gold mx-auto mb-6" />
      <h2 className="serif text-4xl mb-8">Unsere Philosophie</h2>
      <p className="text-xl text-gray-500 leading-loose">
        "Mein kompetentes und freundliches Team erwartet Sie, um in entspannter Atmosphäre Ihre Zähne zu schützen."
        <br/><br/>
        <span className="serif text-charcoal italic">— Isabella von Bukowski</span>
      </p>
    </section>
  </div>
);

const Services = () => (
  <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
    <h1 className="serif text-5xl mb-16 text-center">Leistungen</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Ästhetik", desc: "Bleaching, Veneers und unsichtbare Korrekturen." },
        { title: "Prophylaxe", desc: "Professionelle Zahnreinigung für dauerhafte Gesundheit." },
        { title: "Implantologie", desc: "Fester Biss durch hochwertige Implantate." },
        { title: "Parodontologie", desc: "Behandlung von Zahnfleischerkrankungen." },
        { title: "Endodontie", desc: "Wurzelbehandlungen mit modernster Technik." },
        { title: "Kinder", desc: "Einfühlsame Behandlung für die Kleinsten." }
      ].map((s, i) => (
        <motion.div 
          key={i} 
          initial={{opacity: 0, y: 20}} 
          whileInView={{opacity: 1, y: 0}} 
          viewport={{once: true}}
          className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-sage/10 group"
        >
          <h3 className="serif text-2xl mb-4 group-hover:text-gold transition-colors">{s.title}</h3>
          <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
          <div className="w-12 h-1 bg-sage/20 group-hover:w-full transition-all duration-500"></div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Team = () => (
  <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
    <h1 className="serif text-5xl mb-16 text-center">Das Team</h1>
    <div className="grid md:grid-cols-2 gap-16">
      <div className="text-center">
        <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden shadow-xl border-4 border-white">
          <img src="https://zahnarztpraxis-von-bukowski.de/wp-content/uploads/2021/01/1-ivb-personal_600x800px.png" className="w-full h-full object-cover" alt="Isabella" />
        </div>
        <h3 className="serif text-2xl mb-2">Isabella von Bukowski</h3>
        <p className="text-gold font-bold text-xs uppercase tracking-widest mb-4">Zahnärztin</p>
        <p className="text-gray-500">Mitglied der DGOI & ICOI. Expertin für Implantologie.</p>
      </div>
      <div className="text-center">
        <div className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden shadow-xl border-4 border-white">
          <img src="https://zahnarztpraxis-von-bukowski.de/wp-content/uploads/2021/01/2-ivb-personal_600x800px.png" className="w-full h-full object-cover" alt="Jennifer" />
        </div>
        <h3 className="serif text-2xl mb-2">Jennifer Kellerer</h3>
        <p className="text-gold font-bold text-xs uppercase tracking-widest mb-4">Praxismanagement</p>
        <p className="text-gray-500">ZFA, Verwaltung & QM-Beauftragte. Die gute Seele der Praxis.</p>
      </div>
    </div>
  </div>
);

// --- App ---

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
