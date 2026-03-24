import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--slate-900)', borderTop: '1px solid var(--slate-700)', padding: '2.5rem 0 1.25rem', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '1.5rem' }}>
        <div>
          <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>OZE Kielce</h3>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'var(--slate-400)', lineHeight: 1.7 }}>// portal_oze_swietokrzyskie<br/>// aktualnosci + analizy</p>
        </div>
        <div>
          <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--blue)', marginBottom: '0.6rem', letterSpacing: '0.04em' }}>// nawigacja</h4>
          <Link to="/" style={{ display: 'block', color: 'var(--slate-400)', fontSize: '0.85rem', marginBottom: '0.35rem', textDecoration: 'none' }}>Strona główna</Link>
          <Link to="/blog" style={{ display: 'block', color: 'var(--slate-400)', fontSize: '0.85rem', textDecoration: 'none' }}>Artykuły</Link>
        </div>
        <div>
          <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--blue)', marginBottom: '0.6rem', letterSpacing: '0.04em' }}>// partner</h4>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>ecoaudyt.app →</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--slate-700)', paddingTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'var(--slate-600)' }}>© {year} OZE Kielce · MIT License</p>
      </div>
    </footer>
  );
};

export default Footer;
