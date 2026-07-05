import { gymInfo } from '../data/gymContent';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>{gymInfo.name}</h3>
          <p>Modern fitness center in Kolhapur for strength, fat loss, yoga, diet guidance, and group workouts.</p>
        </div>
        <div>
          <h4>Services</h4>
          <a href="#services">Personal Training</a>
          <a href="#services">Fitness Training</a>
          <a href="#services">Muscle Building</a>
          <a href="#services">Weight Loss / Gain</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={gymInfo.phoneHref}>{gymInfo.phone}</a>
          <a href={gymInfo.emailHref}>{gymInfo.email}</a>
          <span>{gymInfo.city}, {gymInfo.state}</span>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {gymInfo.name}. All rights reserved.</div>
    </footer>
  );
}
