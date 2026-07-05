import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { fadeUp } from '../../../shared/animations/motion';
import { gymInfo, trustStats } from '../data/gymContent';
import { FitnessScene } from './FitnessScene';

export function HeroSection() {
  return (
    <section id="hero" className="hero-section section-pad">
      <div className="hero-bg-orb hero-bg-orb-one" />
      <div className="hero-bg-orb hero-bg-orb-two" />

      <div className="container hero-grid">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <span className="hero-kicker">Premium fitness center in Kolhapur</span>
          <h1>{gymInfo.tagline}</h1>
          <p>
            Build strength, lose fat, improve mobility, and train with experienced guidance at {gymInfo.name}.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href={gymInfo.whatsappHref} target="_blank" rel="noreferrer">
              Book a Visit <ArrowRight size={18} />
            </a>
            <a className="secondary-btn" href={gymInfo.phoneHref}>
              <Phone size={18} /> {gymInfo.phone}
            </a>
          </div>

          <div className="location-pill">
            <MapPin size={18} />
            <span>{gymInfo.city}, {gymInfo.state}</span>
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <FitnessScene />
          <div className="hero-card floating-card-one">
            <strong>{gymInfo.hours}</strong>
            <span>Open daily</span>
          </div>
          <div className="hero-card floating-card-two">
            <strong>2 Branches</strong>
            <span>Mangalwar Peth & Apte Nagar</span>
          </div>
        </motion.div>
      </div>

      <div className="container stats-strip">
        {trustStats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
