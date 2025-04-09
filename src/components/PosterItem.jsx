// src/components/PosterItem.jsx
import React from 'react';
import styles from './PosterItem.module.css'; // Import CSS Module

function PosterItem({ poster }) {
  return (
    <a
      href={poster.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.posterLink}
    >
      <img
        src={poster.imageUrl}
        alt={`Poster for ${poster.category}`}
        className={styles.posterImage}
        loading="lazy"
      />
    </a>
  );
}
export default PosterItem;