// src/components/Header.jsx
import React from 'react';
import SearchIcon from './SearchIcon';
import styles from './Header.module.css'; // Import CSS Module

function Header({ searchTerm, onSearchChange }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logoTitle}>POSTER CHAMPION</h1>
      <div className={styles.searchContainer}>
        <SearchIcon className={styles.searchIcon} aria-hidden="true" />
        <input
          type="search"
          id="searchBar"
          placeholder="Search posters..."
          value={searchTerm}
          onChange={onSearchChange}
          className={styles.searchInput}
        />
      </div>
    </header>
  );
}
export default Header;