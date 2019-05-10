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
    styles: {
      // Overwrite docz-theme-default global body styles (specifically, line-height)
      body: `
        font-family: "Source Sans Pro", sans-serif;
        font-size: 16px;
        line-height: 1;
        p, a, h1, h2, h3, h4, table {
          line-height: 1.6;
        },
        .jaFFjD, .laeQwj {
          align-items: center;
        }
      `
    },
    colors: {
      primary: 'lightsalmon'
    },
    logo: {
      src: '/public/iconfinder_12-Computer_3213278.png',
      width: 70
    },
    showPlaygroundEditor: true
  }
};
