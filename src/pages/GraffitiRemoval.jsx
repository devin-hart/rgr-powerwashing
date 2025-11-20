import styles from './Page.module.css';
import ServiceHighlights from '../components/ServiceHighlights/ServiceHighlights';

export default function GraffitiRemoval() {
  return (
    <>
      <section className={styles.section} id="graffiti-removal-page">
        <div className="container">
          <h1>Graffiti Removal</h1>
          <p className={styles.lead}>
            Rapid, surface-safe graffiti removal across Philadelphia and the Main Line. We combine
            eco-responsible products with the right pressure and technique for brick, stone, glass,
            metal, and painted surfaces.
          </p>
        </div>
      </section>
      <ServiceHighlights />
    </>
  );
}
