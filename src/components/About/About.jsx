import { useState } from 'react';
import styles from './About.module.css';

const statements = [
  {
    title: 'Experienced and reliable',
    body:
      'We love what we do and it shows. Our team answers your questions, guides you through our process, and avoids surprises.',
  },
  {
    title: 'If it is outside, we can clean it',
    body:
      'Mold, mildew, algae, rust, efflorescence, grime, graffiti, and more. We support recurring needs with ongoing agreements, window cleaning, anti-graffiti coatings, post-construction cleaning, and parking area maintenance.',
  },
  {
    title: 'Serving Philadelphia & the Main Line',
    body:
      'Founded in Philadelphia and expanded to the Main Line. Serving Philadelphia, Montgomery, Chester, and Delaware Counties.',
  },
];

export default function About() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>About RGR Power Washing</p>
            <h2>Rapid Graffiti Removal, exterior cleaning, and glass restoration</h2>
            <p className={styles.lead}>
              We provide efficient graffiti removal, exterior cleaning, window cleaning, and glass
              restoration. From storefront glass to whole-building washes, we restore surfaces with
              eco-responsible products and careful technique.
            </p>
            <div className={styles.list}>
              {statements.map((item) => (
                <div key={item.title} className={styles.item}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sliderWrap}>
            <div className={styles.sliderFrame}>
              <img src="/rgr-after.webp" alt="Cleaned surface after service" className={styles.image} />
              <div
                className={styles.afterOverlay}
                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
                aria-hidden="true"
              >
                <img src="/rgr-before.webp" alt="" className={styles.image} />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className={styles.range}
                aria-label="Slide to compare before and after"
              />
              <div className={styles.handle} aria-hidden="true" style={{ left: `${sliderValue}%` }}>
                <span className={styles.handleLine} />
                <span className={styles.handleDot}>↔</span>
                <span className={styles.handleLine} />
              </div>
              <div className={styles.labels}>
                <span>Before</span>
                <span>After</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
