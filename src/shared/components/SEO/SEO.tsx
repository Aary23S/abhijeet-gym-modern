import { Helmet } from 'react-helmet-async';
import { gymInfo } from '../../../features/home/data/gymContent';

type SEOProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
};

export function SEO({
  title = 'Abhijeet Gym And Fitness | Best Gym in Kolhapur',
  description = 'Abhijeet Gym And Fitness is a modern gym in Kolhapur offering strength training, personal training, weight loss, yoga, diet guidance, and group workouts.',
  canonicalUrl = 'https://www.abhijeetgym.com/',
}: SEOProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ExerciseGym',
    name: gymInfo.name,
    url: canonicalUrl,
    telephone: gymInfo.phone,
    email: gymInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Suvarna Plaza, Near Padmaraje Girls High School, Sangar Galli, Mangalwar Peth',
      addressLocality: 'Kolhapur',
      addressRegion: 'Maharashtra',
      postalCode: '416012',
      addressCountry: 'IN',
    },
    openingHours: 'Mo-Su 05:30-21:00',
    areaServed: ['Kolhapur', 'Mangalwar Peth', 'Apte Nagar', 'Salokhe Nagar'],
    sameAs: [],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
