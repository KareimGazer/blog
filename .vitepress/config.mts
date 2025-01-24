import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed'
import { loadEnv } from 'vitepress'

const env = loadEnv('', process.cwd())

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Blog",
  titleTemplate: false, // ":title"
  description: "I hope you enjoy what I find interesting enough to write.", // This will render as a <meta> tag in the page HTML.
  base: '/blog/',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  // Whether to get the last updated timestamp for each page using Git.
  // The timestamp will be included in each page's page data, accessible via useData.
  lastUpdated: true, 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    siteTitle: "Kareim's Blog",
    nav: [
      { text: 'Home', link: 'https://kareimgazer.github.io/', target: '_self', noIcon: true },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KareimGazer' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kareimgazer/' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/kareimgazer.bsky.social' },
      { icon: 'x', link: 'https://twitter.com/KareimGazer' },
      { icon: 'medium', link: 'https://medium.com/@kareimtarek1972' },
      { icon: 'youtube', link: 'https://www.youtube.com/@KareemKreates' }
    ],
    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'full',
      }
    },
    editLink: {
      pattern: 'https://github.com/KareimGazer/blog/edit/main/:path',
      text: 'Found a typo? edit this page on GitHub'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: env.VITE_ALGOLIA_APP_ID,
        apiKey: env.VITE_ALGOLIA_SEARCH_API_KEY,
        indexName: env.VITE_ALGOLIA_INDEX_NAME
      }
    }
  },
  sitemap: {
    hostname: 'https://kareimgazer.github.io/blog'
  },
  cleanUrls: true,
  buildEnd: genFeed
})
