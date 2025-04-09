// src/pages/AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutPage.module.css'; // Add a CSS module for page-specific layout/styling

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <h1 className={styles.mainHeading}>About Poster Champion</h1>

        <section className={styles.section}>
          <h2 className={styles.subHeading}>How It Works</h2>
          <p>
            Welcome! Poster Champion brings you a curated stream of posters. Use the categories or search to find something specific.
          </p>
          <p>
            Clicking a poster takes you to our partner's site via an affiliate link, where you can view details or purchase. We add new finds regularly!
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subHeading}>Contact Us</h2>
          <p>
            Questions or suggestions? Email us at:{' '}
            <a href="mailto:contact@posterchampion.example.com" className={styles.emailLink}>
              contact@posterchampion.example.com
            </a>
          </p>
        </section>

        <Link to="/" className={styles.backLink}>
          &larr; Back to Posters
        </Link>
      </div>
    </div>
  );
}
export default AboutPage;