import { Mail, MessageCircle, Phone } from 'lucide-react';
import { gymInfo } from '../data/gymContent';

export function ContactSection() {
  return (
    <section id="contact" className="contact-section section-pad">
      <div className="container contact-card">
        <div>
          <span className="eyebrow">Contact</span>
          <h2>Ready to start your transformation?</h2>
          <p>Call, WhatsApp, or visit Abhijeet Gym And Fitness to explore memberships and training options.</p>
        </div>

        <div className="contact-actions">
          <a href={gymInfo.phoneHref}><Phone size={18} /> {gymInfo.phone}</a>
          <a href={gymInfo.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
          <a href={gymInfo.emailHref}><Mail size={18} /> Email</a>
        </div>
      </div>
    </section>
  );
}
