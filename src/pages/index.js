import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="OZE Kielce — Portal energetyczny" description="Energia odnawialna w Kielcach i Świętokrzyskim" siteName="OZE Kielce" />
      <section style={{ background: 'linear-gradient(180deg, var(--slate-900) 0%, var(--slate-800) 100%)', padding: '4.5rem 0', borderBottom: '1px solid var(--slate-700)' }}>
        <div className="container">
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--blue)', fontSize: '0.8rem', marginBottom: '1rem' }}>{'// portal_oze_kielce v1.0 — initialized'}</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Energia odnawialna<br/>w Kielcach
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--slate-400)', maxWidth: '500px', marginBottom: '2rem', lineHeight: 1.7 }}>
            Portal analityczny o OZE w województwie świętokrzyskim. Dane, aktualności, inwestycje.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/blog" style={{ background: 'var(--blue)', color: '#fff', padding: '0.65rem 1.5rem', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-block' }}>Artykuły →</Link>
            <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ border: '1px solid var(--slate-600)', color: 'var(--slate-400)', padding: '0.65rem 1.5rem', fontWeight: 500, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-block' }}>ecoaudyt.app</a>
          </div>
        </div>
      </section>
      <div className="container" style={{ padding: '2.5rem 1.5rem 4rem' }}>
        {posts.length > 0 ? (
          <>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text)', letterSpacing: '-0.01em' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--blue)', fontSize: '0.8rem', marginRight: '0.5rem' }}>const</span>latestArticles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {posts.slice(0, 6).map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}
            </div>
            {posts.length > 6 && <div style={{ textAlign: 'center', marginTop: '2rem' }}><Link to="/blog" style={{ border: '1px solid var(--border)', color: 'var(--text-muted)', padding: '0.5rem 1.5rem', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', textDecoration: 'none', display: 'inline-block' }}>load_more({posts.length}) →</Link></div>}
          </>
        ) : (
          <div style={{ padding: '4rem 0' }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--blue)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>// status: initializing...</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Artykuły wkrótce</h2>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes { fields { slug } excerpt(pruneLength: 160) frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags } }
    }
  }
`;

export default IndexPage;
