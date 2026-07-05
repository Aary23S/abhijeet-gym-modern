import { motion } from 'framer-motion';
import { fadeUp, sectionViewport, staggerContainer } from '../../../shared/animations/motion';
import { SectionHeader } from '../../../shared/components/ui/SectionHeader';
import { services } from '../data/services';

export function ServicesSection() {
  return (
    <section id="services" className="services-section section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Training programs for strength, fat loss, mobility, and confidence."
          description="Choose structured programs designed around consistency, fitness fundamentals, and sustainable progress."
        />

        <motion.div className="services-grid" initial="hidden" whileInView="visible" viewport={sectionViewport} variants={staggerContainer}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article className="service-card" key={service.title} variants={fadeUp} whileHover={{ y: -8, scale: 1.01 }}>
                <div className="service-icon"><Icon size={24} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
