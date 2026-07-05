import { motion } from "framer-motion";
import { galleryImages } from "../data/gallery";

export function GallerySection() {
  return (
    <section id="gallery" className="section-pad">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Gallery</span>
          <h2>Inside Abhijeet Gym</h2>
          <p>
            A glimpse of the training environment, equipment, and workout space.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              className={`gallery-tile tile-${(index % 6) + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>{image.alt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}