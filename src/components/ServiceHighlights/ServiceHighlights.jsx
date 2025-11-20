import styles from './ServiceHighlights.module.css';

const services = [
  {
    title: 'Graffiti Removal',
    description:
      'Fast, eco-friendly graffiti removal for brick, stone, concrete, metal and more—restoring surfaces without damage.',
    icon: 'chain',
  },
  {
    title: 'Acid Etch & Scratch Removal',
    description:
      'We restore clarity to vandalized glass—removing acid etch haze or deep scratches so you avoid costly replacements.',
    icon: 'refresh',
  },
  {
    title: 'Anti-Graffiti Films & Coatings',
    description:
      'Protective films and coatings make future graffiti easier to remove and keep your property looking clean longer.',
    icon: 'shield',
  },
];

export default function ServiceHighlights() {
  return (
    <section id="service-highlights" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Philadelphia Graffiti Removal Services</p>
          <h2>
            Graffiti Removal, Scratch Repair, and Protective Films for Philadelphia and the Main Line
          </h2>
          <div className={styles.hotline}>
            <span>Emergency service request line — monitored 24/7:</span>
            <a href="tel:484-592-4232">484-592-4232</a>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <div className={`${styles.icon} ${styles[`icon-${service.icon}`]}`} aria-hidden>
                {service.icon === 'chain' && (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.17 14.83 14.83 9.17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7.05 11.64a3 3 0 0 1 0-4.24l1.35-1.35a3 3 0 0 1 4.24 0l.14.14m-3.11 9.95-.14.14a3 3 0 0 0 0 4.24l1.35 1.35a3 3 0 0 0 4.24 0l1.35-1.35a3 3 0 0 0 0-4.24l-.14-.14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                {service.icon === 'refresh' && (
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
                {service.icon === 'shield' && (
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
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
