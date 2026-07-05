import { gymInfo, gymLogo } from "../data/gymContent";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="navbar-shell">
      <nav className="navbar container">
        <a href="#hero" className="brand" aria-label="Abhijeet Gym And Fitness">
          <img
            src={gymLogo}
            alt="Abhijeet Gym And Fitness"
            className="brand-logo"
          />
          <span>{gymInfo.shortName}</span>
        </a>

        <div className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href={gymInfo.phoneHref}>
          Call Now
        </a>
      </nav>
    </header>
  );
}