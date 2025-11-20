import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.overlay} />
      <div className="container">
        <div className={styles.content}>
          <h1>
            Graffiti Removal, Power Washing, and Glass Restoration – RGR Power Washing
          </h1>
          <p>
            We are the go-to experts for fast and thorough Graffiti Removal, Power Washing, Glass
            Restoration, and Anti-Graffiti services throughout Philadelphia and the Main Line.
          </p>
          <div className={styles.actions}>
            <a className={styles.cta} href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
