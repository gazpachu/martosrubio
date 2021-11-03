require('babel-register');

require.extensions['.css'] = () => {};

const router = require('./router').default;
const Sitemap = require('react-router-sitemap').default;
 
(
    new Sitemap(router)
        .build('http://martosrubio.com')
        .save('./public/sitemap.xml')
);