import React from 'react';
import { Link } from 'gatsby';
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '6rem 2rem', background: 'var(--slate-900)', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <p style={{ fontFamily: "'JetBrains Mono', monospace", color: '#3b82f6', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Error 404: page_not_found</p>
    <h1 style={{ fontSize: '5rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.05em' }}>404</h1>
    <Link to="/" style={{ marginTop: '1.5rem', color: '#3b82f6', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem' }}>goto('/')</Link>
  </div>
);
export default NotFound;
