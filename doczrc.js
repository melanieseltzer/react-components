import doczPluginNetlify from 'docz-plugin-netlify';

export default {
  title: 'React Components',
  theme: 'docz-theme-default',
  codeSandbox: true,
  typescript: true,
  plugins: [doczPluginNetlify()],
  public: './public',
  menu: ['Getting Started', 'Components'],
  themeConfig: {
    colors: {
      primary: '#49AAEE'
    },
    logo: {
      src: '/public/iconfinder_12-Computer_3213278.png',
      width: 70
    },
    showPlaygroundEditor: true
  }
};
