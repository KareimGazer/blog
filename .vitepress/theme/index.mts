// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './Layout.vue'

export default {
    extends: DefaultTheme,
    // override the Layout with a wrapper component that
    // injects the slots
    Layout: Layout
}