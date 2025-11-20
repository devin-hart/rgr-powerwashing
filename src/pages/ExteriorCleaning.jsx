import styles from './Page.module.css';
import ServicesDetail from '../components/ServicesDetail/ServicesDetail';

export default function ExteriorCleaning() {
  return (
    <>
      <section className={styles.section} id="exterior-cleaning-page">
        <div className="container">
          <h1>Exterior Cleaning</h1>
          <p className={styles.lead}>
            Pressure washing, power washing, and soft washing tailored to each surface—keeping
            siding, masonry, concrete, and storefronts clean without damage.
          </p>
        </div>
      </section>
      <ServicesDetail />
    </>
  );
}
