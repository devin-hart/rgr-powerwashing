import styles from './Page.module.css';
import About from '../components/About/About';

export default function AboutPage() {
  return (
    <>
      <section className={styles.section} id="about-page">
        <div className="container">
          <h1>About RGR Power Washing</h1>
          <p className={styles.lead}>
            Rapid Graffiti Removal and exterior cleaning specialists serving Philadelphia and the
            Main Line. Fast response, clear pricing, and surface-safe techniques across graffiti
            removal, glass restoration, and protective coatings.
          </p>
        </div>
      </section>
      <About />
    </>
  );
}
