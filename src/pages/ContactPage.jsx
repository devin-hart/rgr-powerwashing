import styles from './Page.module.css';

export default function ContactPage() {
  return (
    <>
      <section className={styles.section} id="contact-page">
        <div className="container">
          <h1>Contact</h1>
          <p className={styles.lead}>
            Tell us about your graffiti removal or exterior cleaning needs. We’ll provide a quick,
            clear estimate and schedule at your convenience.
          </p>
        </div>
      </section>
    </>
  );
}
