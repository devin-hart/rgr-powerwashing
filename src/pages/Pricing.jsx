import styles from './Page.module.css';

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing-page">
      <div className="container">
        <h1>Pricing</h1>
        <p className={styles.lead}>
          Transparent estimates provided quickly. Pricing varies by surface type, access, and
          service frequency. Contact us for a no-obligation quote tailored to your property.
        </p>
      </div>
    </section>
  );
}
