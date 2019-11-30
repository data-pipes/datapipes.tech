const meta = {
  // Metadata
  siteTitle: 'Data pipes',
  siteDescription: 'Streamline your data pipes.',
  siteTitleAlt: 'Data pipes',
  siteShortName: 'Data pipes',
  siteUrl: 'https://datapipes.tech',
}

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@data_pipes',
}

const website = {
  ...meta,
  ...social,
  disqusShortName: 'datapipes',
  googleAnalyticsID: 'UA-153682653-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
}

module.exports = website