module.exports = {
  siteMetadata: {
    title: 'OZE Kielce',
    description: 'Portal o odnawialnych źródłach energii w Kielcach i Świętokrzyskim',
    siteUrl: 'https://oze-kielce.pages.dev',
    author: 'Redakcja OZE Kielce',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
