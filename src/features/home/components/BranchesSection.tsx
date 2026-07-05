import { MapPin } from 'lucide-react';
import { SectionHeader } from '../../../shared/components/ui/SectionHeader';
import { gymInfo } from '../data/gymContent';

const branches = [
  {
    title: 'Main Branch',
    address: gymInfo.primaryAddress,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Suvarna+Plaza+Padmaraje+Girls+High+School+Mangalwar+Peth+Kolhapur',
  },
  {
    title: 'Apte Nagar Branch',
    address: gymInfo.secondaryAddress,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jetvan+Salokhe+Nagar+Road+Apte+Nagar+Kolhapur',
  },
];

export function BranchesSection() {
  return (
    <section id="branches" className="branches-section section-pad">
      <div className="container">
        <SectionHeader
          eyebrow="Branches"
          title="Two accessible fitness locations in Kolhapur."
          description="Prominent branch cards help users quickly find directions and contact the gym."
        />

        <div className="branch-grid">
          {branches.map((branch) => (
            <article className="branch-card" key={branch.title}>
              <MapPin size={26} />
              <h3>{branch.title}</h3>
              <p>{branch.address}</p>
              <a href={branch.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
