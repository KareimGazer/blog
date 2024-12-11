<script setup lang="ts">
import { useData } from 'vitepress';
const { frontmatter } = useData()
import { formatDate } from './utils';
</script>

<template>
    <header>
        <div> <b> {{ formatDate(frontmatter.date).string }} </b> by <a aria-label="read more" :href="String('https://x.com/' + frontmatter.author)">{{ frontmatter.author }}</a></div>
        <h1>{{ frontmatter.title }}</h1>
        <p> {{ frontmatter.subtitle }} </p>
    </header>
</template>

<style scoped>
    p {
        padding: 1rem 0;
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    h1 {
        border-top: 0;
        margin-top: 0.4rem;
        padding-top: 0;
        font-size: 2.2rem;
        line-height: 2.8rem;
        font-weight: bold;
        background: linear-gradient(90deg, rgba(1,100,244,1) 0%, rgba(9,129,238,1) 20%, rgba(6,163,244,1) 50%, rgba(0,212,255,1) 100%);
        background-clip: text;
        color: transparent;
    }

    a {
        text-decoration: underline;
        text-underline-offset: 2px;
        /* twitter */
        text-decoration-color: #1DA1F2;
        color: #009bfb;
    }
</style>