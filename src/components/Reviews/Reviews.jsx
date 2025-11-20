import styles from './Reviews.module.css';

const reviews = [
  {
    name: 'Nicole B.',
    title: 'Saved our storefront mirror',
    body:
      'We hired RGR to fix scratches on a storefront mirror. They restored clarity and saved us from replacing an expensive piece of glass.',
    date: '22 days ago',
    rating: 5,
  },
  {
    name: 'Sam S.',
    title: 'Quick, affordable, easy',
    body:
      'Graffiti was gone in a single visit. Pricing was clear and they were on-site within a day. Highly recommend for fast cleanups.',
    date: '1 month ago',
    rating: 5,
  },
  {
    name: 'Serena Z.',
    title: 'House looks brand new',
    body:
      'Power washed our brick home after landscaping. The red brick popped again and they were meticulous around windows and trim.',
    date: '1 month ago',
    rating: 5,
  },
  {
    name: 'Danny M.',
    title: 'Film removal made easy',
    body:
      'Removed old window film and scratches on our shopfront. Friendly, thorough, and they left everything spotless after finishing.',
    date: '2 months ago',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Client feedback</p>
          <h2>Consistent five-star results across graffiti removal and cleaning</h2>
          <p className={styles.subhead}>
            Real experiences from neighbors in Philadelphia and the Main Line. Quick response, clear
            pricing, careful work.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <article key={review.name} className={styles.card}>
              <div className={styles.headerRow}>
                <div className={styles.avatar}>{review.name.charAt(0)}</div>
                <div>
                  <div className={styles.name}>{review.name}</div>
                  <div className={styles.date}>{review.date}</div>
                </div>
                <div className={styles.rating}>
                  {'★'.repeat(review.rating)}
                  <span className={styles.ratingValue}>{review.rating.toFixed(1)}</span>
                  <span className="sr-only">{`Rated ${review.rating} out of 5`}</span>
                </div>
              </div>
              <h3>{review.title}</h3>
              <p>{review.body}</p>
              <div className={styles.response}>
                <div className={styles.responseLabel}>Owner response</div>
                <p>Thanks so much for trusting us. We aim for quick scheduling and spotless results every time.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
