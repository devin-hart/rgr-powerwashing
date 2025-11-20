import styles from './ServicesDetail.module.css';

const offerings = [
  {
    title: 'Glass Restoration',
    description:
      'We bring clarity back to weathered and damaged glass—removing stains, mineral buildup, and surface damage without compromising integrity.',
    icon: 'refresh',
  },
  {
    title: 'Pressure, Power & Soft Washing',
    description:
      'From concrete to siding, we tailor high-pressure or soft-wash techniques to each surface—erasing grime while protecting finishes.',
    icon: 'building',
  },
  {
    title: 'Window Cleaning',
    description:
      'Spotless commercial window cleaning that enhances visibility and curb appeal. Currently accepting Philadelphia commercial clients.',
    icon: 'grid',
  },
];

export default function ServicesDetail() {
  return (
    <section id="services-detail" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Comprehensive exterior cleaning</p>
          <h2>Exterior cleaning and restoration with a surface-safe approach</h2>
        </div>

        <div className={styles.grid}>
          {offerings.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={`${styles.icon} ${styles[`icon-${item.icon}`]}`} aria-hidden>
                {item.icon === 'refresh' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12a8 8 0 0 1 13.66-5.66L20 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 12a8 8 0 0 1-13.66 5.66L4 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {item.icon === 'building' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M9 7h2M9 11h2M9 15h2M13 7h2M13 11h2M13 15h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {item.icon === 'grid' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 10h16M10 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
