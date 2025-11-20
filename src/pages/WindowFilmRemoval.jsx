import styles from './Page.module.css';

export default function WindowFilmRemoval() {
  return (
    <section className={styles.section} id="window-film-removal-page">
      <div className="container">
        <h1>Window Film Removal</h1>
        <p className={styles.lead}>
          Safe removal of aged or damaged window films without scratching glass. We prep surfaces
          for fresh films or leave them clean and clear for a polished storefront look.
        </p>
      </div>
    </section>
  );
}
