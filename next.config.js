
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})
 
module.exports = withNextra({
  i18n: {
    locales: ['ar-SD'],
    defaultLocale: 'ar-SD'
  }
})

// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.tsx',
// })

// module.exports = withNextra()
