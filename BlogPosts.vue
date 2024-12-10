<script setup>
import { data as posts } from './.vitepress/theme/posts.data'
</script>

<template>
    <div class="post" v-for="{ title, url, date, excerpt } of posts">
      {{ console.log(url) }}
      <div class="date">{{ date.string }}</div>
      <h2><a :href="url">{{ title }}</a></h2>
      <div v-if="excerpt" v-html="excerpt"></div>
      <div class="text-base leading-6 font-medium">
        <a class="link" aria-label="read more" :href="url">Read more →</a>
      </div>
    </div>
</template>

<style scoped>
h2 {
  border-top: 0;
  margin-top: 0;
  padding-top: 0;
}

.date {
  margin: 0;
  font-weight: bold;
}

.post {
  padding: 1rem 0;
}

a {
  text-decoration: none;
}
</style>