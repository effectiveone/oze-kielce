import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ background: '#fff', border: '1px solid var(--border)', borderLeft: '3px solid var(--blue)', padding: '1.25rem 1.5rem', transition: 'border-left-color 0.2s' }}
    onMouseEnter={e => e.currentTarget.style.borderLeftColor = 'var(--blue-dark)'}
    onMouseLeave={e => e.currentTarget.style.borderLeftColor = 'var(--blue)'}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
      {tags && tags[0] && <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--blue)', background: 'var(--blue-pale)', padding: '0.1rem 0.4rem', letterSpacing: '0.04em' }}>[{tags[0]}]</span>}
      <time style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)' }}>{date}</time>
    </div>
    <h2 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
      <Link to={`/blog${slug}`} style={{ color: 'var(--text)', textDecoration: 'none' }}
        onMouseEnter={e => e.target.style.color = 'var(--blue)'}
        onMouseLeave={e => e.target.style.color = 'var(--text)'}>{title}</Link>
    </h2>
    {excerpt && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '0.75rem' }}>{excerpt}</p>}
    <Link to={`/blog${slug}`} style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--blue)', fontSize: '0.72rem' }}>read_more() →</Link>
  </article>
);

export default PostCard;
