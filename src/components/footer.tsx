// src/components/Footer.tsx
import styles from '@/styles/components/footer.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerContainer}>
        {/* Connect Section */}
        <div className={styles.box}>
          <p>Connect with me and get the best for your firm</p>
          <div className={styles.socialIcons}>
            <i className="fab fa-facebook-f" aria-label="Facebook"></i>
            <i className="fab fa-instagram" aria-label="Instagram"></i>
            <i className="fab fa-twitter" aria-label="Twitter"></i>
            <i className="fab fa-youtube" aria-label="YouTube"></i>
            <i className="fab fa-pinterest" aria-label="Pinterest"></i>
            <i className="fab fa-dribbble" aria-label="Dribbble"></i>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className={styles.box}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>News</li>
            <li>Contact</li>
            <li>FAQ&apos;s</li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className={styles.box}>
          <h3>Recent Posts</h3>
          <div>
            <p>Why Bill Gates Visits Kenya</p>
            <span>28 Feb 2022</span>
          </div>
          <div>
            <p>Why Bill Gates Visits Kenya</p>
            <span>28 Feb 2022</span>
          </div>
          <div>
            <p>Why Bill Gates Visits Kenya</p>
            <span>28 Feb 2022</span>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div className={styles.box}>
          <h3>Get in Touch</h3>
          <div className={styles.icon}>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <label>Location: 87 Division, Kikuyu Sub, Kiambu County, Nairobi, Kenya</label>
          </div>
          <div className={styles.icon}>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <label>+254702035351</label>
          </div>
          <div className={styles.icon}>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <label>Email: Essayacademy@gmail.com</label>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className={styles.legal}>
        <p>&copy; 2023. All rights reserved.</p>
        <label>
          Designed and Developed by <span>MelvinDev</span>
        </label>
      </section>
    </footer>
  );
}
