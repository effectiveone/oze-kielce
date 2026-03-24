import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header style={{ background: 'var(--slate-900)', borderBottom: '1px solid var(--slate-700)', padding: '1rem 0' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--blue)', fontSize: '0.9rem', letterSpacing: '0.02em' }}>
          {'> '}
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', letterSpacing: '-0.02em' }}>OZE Kielce</span>
        <span style={{ display: 'block', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'var(--slate-400)', marginTop: '0.1rem' }}>// energia_swietokrzyskie.pl</span>
      </Link>
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--slate-400)', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>Główna</Link>
        <Link to="/blog" style={{ color: 'var(--slate-400)', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none' }}>Artykuły</Link>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
          style={{ background: 'var(--blue)', color: '#fff', padding: '0.4rem 1rem', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.01em' }}>
          ecoaudyt.app →
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
