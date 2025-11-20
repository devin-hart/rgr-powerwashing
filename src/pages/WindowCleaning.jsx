import styles from './Page.module.css';

export default function WindowCleaning() {
  return (
    <section className={styles.section} id="window-cleaning-page">
      <div className="container">
        <h1>Window Cleaning</h1>
        <p className={styles.lead}>
          Spotless commercial window cleaning that boosts visibility and curb appeal. Streak-free
          finishes, reliable scheduling, and careful work around frames and landscaping.
        </p>
      </div>
    </section>
  );
}
