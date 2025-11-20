import styles from './ServiceAreas.module.css';

const areas = [
  'Philadelphia',
  'Chester County',
  'Montgomery County',
  'Delaware County',
  'Bucks County',
  'Southern New Jersey',
  'Lower Merion Township',
  'Radnor Township',
  'Newtown Township',
  'Haverford Township',
  'Easttown Township',
  'Tredyffrin Township',
  'Conshohocken',
  'Upper Darby Township',
  'Marple Township',
  'Middletown Township',
  'Upper Merion Township',
  'Wynnewood',
  'Ardmore',
  'Penn Valley',
  'Havertown',
  'Narberth',
  'Haverford',
  'Newtown Square',
  'Bryn Mawr',
  'Gladwyne',
  'Wayne',
  'Berwyn',
  'Devon',
  'Paoli',
  'Broomall',
  'West Chester',
  'Media',
  'King of Prussia',
  'Villanova',
  'Radnor',
  'Springfield',
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Service Areas</p>
          <h2>Serving Philadelphia, the Main Line, and surrounding suburbs</h2>
          <p className={styles.subhead}>
            Priority response across Philadelphia, Montgomery, Delaware, and Chester counties—and
            select areas of Southern New Jersey.
          </p>
        </div>
        <ul className={styles.tagGrid} aria-label="Service areas">
          {areas.map((area) => (
            <li key={area} className={styles.tag}>
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
