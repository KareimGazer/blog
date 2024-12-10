<script setup lang="ts">
import { useData } from 'vitepress';
const { frontmatter } = useData()
import { formatDate } from './utils';
</script>

<template>
    <header>
        <div> {{ formatDate(frontmatter.date).string }} BY <a aria-label="read more" :href="String('https://x.com/' + frontmatter.author)">{{ frontmatter.author }}</a></div>
        <h1>{{ frontmatter.title }}</h1>
        <p> {{ frontmatter.subtitle }} </p>
    </header>
</template>

<style scoped>
    p {
        padding: 1rem 0;
        margin-bottom: 1rem;
    }
    h1 {
        border-top: 0;
        margin-top: 0;
        padding-top: 0;
        font-size: 2rem;
        line-height: 2.8rem;
        font-weight: bold;
    }

    a {
        text-decoration: underline;
        text-underline-offset: 2px;
        /* twitter */
        text-decoration-color: #1DA1F2;
        color: #009bfb;
    }
</style>