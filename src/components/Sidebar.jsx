// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { categories } from '../data/posters';
import styles from './Sidebar.module.css'; // Import CSS Module

function Sidebar({ isCollapsed, selectedCategory, onSelectCategory }) {
  return (
    <aside className={clsx(styles.sidebar, isCollapsed && styles.collapsed)}>
      <div className={clsx(styles.sidebarContent, isCollapsed && styles.contentCollapsed)}>
        <div>
          <h2 className={styles.categoryTitle}>Categories</h2>
          <ul className={styles.categoryList}>
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => onSelectCategory(category)}
                  className={clsx(
                    styles.categoryItem,
                    selectedCategory === category && styles.active // Apply active style
                  )}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.aboutLinkContainer}>
          <Link to="/about" className={styles.aboutLink}>
            About Poster Champion
          </Link>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;