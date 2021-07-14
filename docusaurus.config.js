module.exports = {
  title: '笑笑的程式人生',
  tagline: '記錄各種程式學習、專案筆記。',
  url: 'https://bell881122.github.io',
  baseUrl: '/docusaurus-blog/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bell881122', // Usually your GitHub org/user name.
  projectName: 'docusaurus-blog', // Usually your repo name.
  themeConfig: {
    colorMode:{
      defaultMode: 'dark',// "light" | "dark"
    },
    navbar: {
      title: '笑笑的程式人生',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          // to: 'blog', 
          to: '/',
          label: '部落格',
          position: 'left'
        },
        {
          // to: 'blog', 
          to: '/profile',
          label: '關於我',
          position: 'left'
        },
        
        //  {
        //    to: 'docs/',
        //    activeBasePath: 'docs',
        //    label: '文件',
        //    position: 'left',
        //  },
        {
          href: 'https://github.com/bell881122',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `版權所有 © ${new Date().getFullYear()} Xiaoxiao Emi　|　建置工具 Docusaurus2.0`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          path: './blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  // stylesheets: [
    // "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",
  // ],
};
