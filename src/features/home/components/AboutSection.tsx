import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeUp, sectionViewport, staggerContainer } from '../../../shared/animations/motion';
import { SectionHeader } from '../../../shared/components/ui/SectionHeader';
import { gymInfo, gymLogo } from '../data/gymContent';

const points = [
  'Experienced trainers focused on practical results',
  'Quality strength and fitness equipment',
  'Central Kolhapur location with accessible branches',
  'Programs for beginners, fat loss, muscle gain, and group training',
];

export function AboutSection() {
  return (
    <section id="about" className="about-section section-pad">
      <div className="container about-grid">
        <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={fadeUp} className="about-media">
          <div className="about-image-card">
             <a href="#hero" className="brand" aria-label="Abhijeet Gym And Fitness">
                      <img
                        src={gymLogo}
                        alt="Abhijeet Gym And Fitness"
                        className="brand-logo"
                      />
                      <span>{gymInfo.shortName}</span>
                    </a>
            <h3>Fitness with discipline, consistency, and guidance.</h3>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={sectionViewport} variants={staggerContainer} className="about-content">
          <motion.div variants={fadeUp}>
            <SectionHeader
              eyebrow="About Us"
              title="A modern fitness experience built for real transformation."
              description="Abhijeet Gym And Fitness is one of the popular gyms in Kolhapur, focused on service quality, member results, and continuous improvement."
            />
          </motion.div>

          <div className="check-list">
            {points.map((point) => (
              <motion.div key={point} className="check-item" variants={fadeUp}>
                <CheckCircle2 size={20} />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
