// src/pages/HomePage.jsx
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import clsx from 'clsx';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SidebarToggle from '../components/SidebarToggle';
import PosterGrid from '../components/PosterGrid';
import { postersData } from '../data/posters';
import styles from './HomePage.module.css'; // Import CSS Module for HomePage layout

const POSTERS_PER_LOAD = 18;

function HomePage() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visiblePosterIds, setVisiblePosterIds] = useState([]);
  const [allFilteredIds, setAllFilteredIds] = useState([]);

  // Filter logic (same as before)
  useEffect(() => {
    const filtered = postersData.filter(poster => {
      const categoryMatch = selectedCategory === 'all' || poster.category === selectedCategory;
      const searchMatch = searchTerm === '' ||
                          poster.keywords.some(keyword =>
                            keyword.toLowerCase().includes(searchTerm.toLowerCase())
                          );
      return categoryMatch && searchMatch;
    }).map(p => p.id);
    setAllFilteredIds(filtered);
    setVisiblePosterIds(filtered.slice(0, POSTERS_PER_LOAD));
  }, [selectedCategory, searchTerm]);

  // Map visible IDs to poster objects (same as before)
  const postersToDisplay = useMemo(() => {
    const posterMap = new Map(postersData.map(p => [p.id, p]));
    return visiblePosterIds.map(id => posterMap.get(id)).filter(Boolean);
  }, [visiblePosterIds]);

  // Check if more posters exist (same as before)
  const hasMorePosters = useMemo(() => {
    return visiblePosterIds.length < allFilteredIds.length;
  }, [visiblePosterIds, allFilteredIds]);

  // Load more function (same as before)
  const loadMorePosters = useCallback(() => {
    if (hasMorePosters) {
      const currentLength = visiblePosterIds.length;
      const nextIds = allFilteredIds.slice(currentLength, currentLength + POSTERS_PER_LOAD);
      setVisiblePosterIds(prevIds => [...prevIds, ...nextIds]);
    }
  }, [hasMorePosters, allFilteredIds, visiblePosterIds]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={styles.pageContainer}>
      <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      {/* Apply layout styles */}
      <div className={styles.contentContainer}>
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <SidebarToggle isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
        {/* Apply main content area styles */}
        <main className={clsx(styles.mainContent, isSidebarCollapsed && styles.mainContentShifted)}>
          <PosterGrid
            posters={postersToDisplay}
            hasMore={hasMorePosters}
            loadMore={loadMorePosters}
          />
        </main>
      </div>
    </div>
  );
}

export default HomePage;