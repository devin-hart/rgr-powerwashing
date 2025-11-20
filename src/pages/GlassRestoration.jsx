import styles from './Page.module.css';

export default function GlassRestoration() {
  return (
    <section className={styles.section} id="glass-restoration-page">
      <div className="container">
        <h1>Glass Restoration</h1>
        <p className={styles.lead}>
          We remove scratches, acid etch haze, and mineral buildup to restore clarity without
          replacing glass. Storefronts, doors, and architectural glass get a second life with
          careful polishing and protective options.
        </p>
      </div>
    </section>
  );
}
