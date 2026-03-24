import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Kielce" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 5rem', maxWidth: '800px' }}>
        <Link to="/blog" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2rem' }}>← back_to_articles()</Link>
        {tags && <div style={{ marginBottom: '0.6rem' }}>{tags.map(t => <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", display: 'inline-block', background: 'var(--blue-pale)', color: 'var(--blue-dark)', fontSize: '0.65rem', padding: '0.15rem 0.5rem', marginRight: '0.4rem', letterSpacing: '0.04em' }}>[{t}]</span>)}</div>}
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.15, marginBottom: '0.6rem' }}>{title}</h1>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{date} · {author}</p>
        {description && <div style={{ background: 'var(--slate-900)', borderLeft: '3px solid var(--blue)', padding: '1rem 1.25rem', marginBottom: '2.5rem' }}><p style={{ fontSize: '0.95rem', color: 'var(--slate-400)', lineHeight: 1.65 }}>{description}</p></div>}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
