import styles from './Page.module.css';

export default function Blog() {
  return (
    <section className={styles.section} id="blog-page">
      <div className="container">
        <h1>Blog</h1>
        <p className={styles.lead}>
          Tips on graffiti prevention, exterior cleaning, and property care. Blog content coming
          soon—check back for guides and project highlights.
        </p>
      </div>
    </section>
  );
}
