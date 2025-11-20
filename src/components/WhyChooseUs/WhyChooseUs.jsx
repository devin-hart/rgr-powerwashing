import styles from './WhyChooseUs.module.css';

const points = [
  {
    title: 'Estimates within 48 hours',
    description: 'Clear scope and pricing delivered quickly so you can schedule fast.',
    icon: 'calculator',
  },
  {
    title: 'Contract pricing available',
    description: 'Structured agreements for ongoing services and predictable budgets.',
    icon: 'contract',
  },
  {
    title: 'Multiple payment options',
    description: 'Streamlined billing for convenience with digital and traditional options.',
    icon: 'payment',
  },
  {
    title: 'Eco-responsible cleaning',
    description: 'Surface-safe, environmentally responsible products chosen for each job.',
    icon: 'eco',
  },
  {
    title: 'Anti-graffiti coatings',
    description: 'Optional coatings and films to make future graffiti removal easier.',
    icon: 'shield',
  },
  {
    title: 'Rapid response',
    description: 'Priority scheduling for urgent removals and after-hours calls.',
    icon: 'clock',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why Choose RGR</p>
          <h2>Responsive, transparent, and surface-safe</h2>
          <p className={styles.subhead}>
            We keep projects moving with quick estimates, clear pricing, environmentally mindful
            products, and options that protect your property long term.
          </p>
        </div>

        <div className={styles.grid}>
          {points.map((point) => (
            <article key={point.title} className={styles.card}>
              <div className={`${styles.icon} ${styles[`icon-${point.icon}`]}`} aria-hidden>
                {point.icon === 'calculator' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M10 7h4M10 11h4M10 15h.01M14 15h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {point.icon === 'contract' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M6 3h9l3 3v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 9h6M9 13h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {point.icon === 'payment' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 14h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {point.icon === 'eco' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 21c6 0 10-4 10-10 0-1.71-.43-3.32-1.19-4.73a1 1 0 0 0-1.57-.26L8 12l4 2-3 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {point.icon === 'shield' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 4 5 6v6c0 4.42 3.06 8.17 7 9 3.94-.83 7-4.58 7-9V6l-7-2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 12.5 11 14l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {point.icon === 'clock' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
