import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Artykuły" description="Artykuły o OZE w Kielcach" siteName="OZE Kielce" />
      <div className="container" style={{ padding: '2.5rem 1.5rem 4rem' }}>
        <p style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--blue)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{'// articles.filter(region => "swietokrzyskie")'}</p>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>Artykuły</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.88rem' }}>{posts.length} wyników</p>
        {posts.length > 0
          ? <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>{posts.map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}</div>
          : <p style={{ color: 'var(--text-muted)', padding: '3rem 0' }}>Artykuły pojawią się wkrótce.</p>}
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

export default BlogPage;
