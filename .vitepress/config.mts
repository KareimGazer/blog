import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "I hope you enjoy what I find interesting enough to write.",
  base: '/blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://kareimgazer.github.io/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KareimGazer' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/kareimgazer/' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/kareimgazer.bsky.social' },
      { icon: 'x', link: 'https://twitter.com/KareimGazer' },
      { icon: 'medium', link: 'https://medium.com/@kareimtarek1972' },
      { icon: 'youtube', link: 'https://www.youtube.com/@KareimGazer' }
    ]
  }
})
