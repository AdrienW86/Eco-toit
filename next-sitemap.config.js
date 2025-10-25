/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.eco-toit.com', // Ton domaine
  generateRobotsTxt: true,              // Génère robots.txt automatiquement
  sitemapSize: 10000,                    // Taille max d'URL par sitemap (suffisant pour tout ton site)
  changefreq: 'weekly',                  // Fréquence par défaut
  priority: 0.7,                         // Priorité par défaut
  exclude: ['/admin/*', '/api/*'],       // Pages à exclure

  // Personnalisation du robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },  // Autorise toutes les pages
    ],
  },

  // Pages à inclure avec priorité et fréquence personnalisées
  transform: async (config, url) => {
    const pages = [
      { loc: '/', changefreq: 'weekly', priority: 1.0 },
      { loc: '/pictures', changefreq: 'monthly', priority: 0.8 },
      { loc: '/couverture', changefreq: 'weekly', priority: 0.9 },
      { loc: '/facades', changefreq: 'weekly', priority: 0.9 },
      { loc: '/zinguerie', changefreq: 'weekly', priority: 0.8 },
      { loc: '/maconnerie', changefreq: 'weekly', priority: 0.7 },
      { loc: '/peinture', changefreq: 'monthly', priority: 0.7 },
      { loc: '/nettoyage', changefreq: 'monthly', priority: 0.7 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.6 },
      { loc: '/mentions', changefreq: 'yearly', priority: 0.1 },
      { loc: '/conditions', changefreq: 'yearly', priority: 0.1 },
    ];

    const page = pages.find((p) => url === `${config.siteUrl}${p.loc}`);
    if (page) {
      return {
        loc: url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
      };
    }

    // Par défaut si non listée
    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
