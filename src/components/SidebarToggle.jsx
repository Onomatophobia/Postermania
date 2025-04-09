// src/components/SidebarToggle.jsx
import React from 'react';
import clsx from 'clsx';
import styles from './SidebarToggle.module.css'; // Import CSS Module

// Simple SVG Chevron Icon component
function ChevronLeftIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
}

function SidebarToggle({ isCollapsed, onToggle }) {
  const sidebarWidth = 224; // 14rem = 224px
  const buttonOffset = 12; // How far from the edge

  return (
    <button
      onClick={onToggle}
      aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      aria-expanded={!isCollapsed}
      className={styles.toggleButton}
      // Inline style for dynamic left position and rotation
      style={{
        left: isCollapsed ? `${buttonOffset}px` : `${sidebarWidth - buttonOffset}px`,
        transform: `translateY(-50%) rotate(${isCollapsed ? '180deg' : '0deg'})`,
      }}
    >
      <ChevronLeftIcon className={styles.toggleIcon} aria-hidden="true" />
    </button>
  );
}
export default SidebarToggle;