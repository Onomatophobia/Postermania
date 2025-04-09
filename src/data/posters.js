// src/data/posters.js
export const postersData = [
    // ... (same poster objects as before) ...
    { id: 1, imageUrl: '/images/poster1.jpg', affiliateUrl: 'https://example.com/affiliate-link-1', category: 'movies', keywords: ['sci-fi', 'adventure', 'space', 'classic film'] },
    { id: 2, imageUrl: '/images/poster2.jpg', affiliateUrl: 'https://example.com/affiliate-link-2', category: 'music', keywords: ['rock', 'band', 'concert', 'album art', 'vintage'] },
    // ... etc ... include all your poster objects
];

export const categories = [
    'all',
    ...new Set(postersData.map(p => p.category))
];