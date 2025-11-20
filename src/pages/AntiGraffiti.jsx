import styles from './Page.module.css';

export default function AntiGraffiti() {
  return (
    <section className={styles.section} id="anti-graffiti-page">
      <div className="container">
        <h1>Anti-Graffiti Coatings & Films</h1>
        <p className={styles.lead}>
          Protect building surfaces and glass with sacrificial coatings and window films that make
          future graffiti cleanup fast and affordable. Ideal for transit areas, storefronts, and
          repeat targets.
        </p>
      </div>
    </section>
  );
}
