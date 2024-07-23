const sitemap = require('nextjs-sitemap-generator');
const path = require('path');

sitemap({
    baseUrl: 'https://www.woodshowglobal.com',
    ignoredPaths: ['404', 'favicon','assets', 'index'],
    ignoredExtentions: ['js', 'map', 'json', 'xml', 'png', 'jpg', 'svg', 'css', 'scss', 'jpeg', 'icon'],
    pagesDirectory: path.resolve(__dirname,"../pages"),
    targetDirectory: path.resolve(__dirname,"../public"),
    sitemapFilename: 'sitemap.xml',
});
