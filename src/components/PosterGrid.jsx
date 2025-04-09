// src/components/PosterGrid.jsx
import React, { useRef, useCallback } from 'react';
import PosterItem from './PosterItem';
import styles from './PosterGrid.module.css'; // Import CSS Module

function PosterGrid({ posters, hasMore, loadMore }) {
  const observer = useRef();

  const lastPosterElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore, loadMore]);

  return (
    // Apply grid styles from CSS Module
    <div className={styles.posterGrid}>
      {posters.map((poster, index) => (
        <div
          ref={posters.length === index + 1 ? lastPosterElementRef : null}
          key={`<span class="math-inline">\{poster\.id\}\-</span>{index}`} // Use index for key uniqueness if IDs aren't stable across filters
         >
          <PosterItem poster={poster} />
        </div>
      ))}
    </div>
  );
}
export default PosterGrid;