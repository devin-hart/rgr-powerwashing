import styles from './Page.module.css';

export default function Faq() {
  return (
    <section className={styles.section} id="faq-page">
      <div className="container">
        <h1>FAQ</h1>
        <p className={styles.lead}>
          Answers to common questions about graffiti removal, coatings, scheduling, and safety.
          We’ll populate this with specifics—contact us if you need details right away.
        </p>
      </div>
    </section>
  );
}
