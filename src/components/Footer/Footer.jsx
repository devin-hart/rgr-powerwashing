import styles from './Footer.module.css';

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/rgrpowerwashing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/RGR-Power-Washing/61565353464510/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 4h-2.2C10.1 4 9 5.06 9 7.2V9H7v3h2v8h3v-8h2.2L14 9h-2V7.4c0-.6.16-1 .98-1H15V4Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@rgr.power.washing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 7.7C15.7 7.3 14.7 6.4 14.3 5H12v9.4c0 1.1-.9 2-2 2a2 2 0 1 1 0-4c.23 0 .45.04.66.12V10a5 5 0 1 0 3.34 9.36C15.87 18.68 17 17 17 15V9.9c.7.55 1.57.9 2.5 1V9c-.58-.02-1.15-.1-1.7-.3-.33-.12-.64-.28-.93-.46l-.87-.54Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@RGRPowerWashing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M21.5 7.5s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.8C15.2 4.5 12 4.5 12 4.5h-.1s-3.2 0-6.6.2c-.4 0-1.3 0-2.1.8-.6.6-.8 2-.8 2S2.2 9.1 2 10.7v1.5c.2 1.6.4 3.1.4 3.1s.2 1.4.8 2c.8.8 1.9.8 2.4.8 1.7.2 7.1.2 7.1.2s3.2 0 6.6-.2c.4 0 1.3 0 2.1-.8.6-.6.8-2 .8-2s.2-1.6.4-3.1v-1.5c-.2-1.6-.4-3.2-.4-3.2Zm-11 6.1V8.4l5.6 2.6-5.6 2.6Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay} />
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.section}>
            <h2>Contact Us</h2>
            <p>
              Get in touch with us to discuss your needs. All estimates are free of charge and no
              obligation.
            </p>
            <div className={styles.contactList}>
              <a href="tel:484-779-9515">Call: 484-779-9515</a>
              <a href="mailto:info@rgrpowerwashing.com">Email: info@rgrpowerwashing.com</a>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Follow</h3>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">{social.icon}</span>
                  {social.label}
                </a>
              ))}
            </div>
            <a className={styles.terms} href="/terms-and-conditions">
              Terms &amp; Conditions
            </a>
          </div>

          <div className={styles.section}>
            <div className={styles.actions}>
              <a className={styles.cta} href="/contact">
                Request Estimate
              </a>
            </div>
            <div className={styles.hours}>
              <div>Open Monday through Saturday</div>
              <div>7am – 6pm</div>
            </div>
            <div className={styles.emergency}>
              <div>Emergency service request</div>
              <div>(monitored 24/7) 484-592-4232</div>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <span>© {new Date().getFullYear()} RGR Power Washing</span>
          <span>Philadelphia · Main Line</span>
        </div>
      </div>
    </footer>
  );
}
