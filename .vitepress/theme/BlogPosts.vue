<script setup>
import { data as posts } from './posts.data'
</script>

<template>
    <div class="post" v-for="{ title, url, date, excerpt } of posts">
      <div class="date">{{ date.string }}</div>
      <div class="title"><a :href="url" class="link">{{ title }}</a></div>
      <div v-if="excerpt" v-html="excerpt" class="excerpt"></div>
      <div>
        <a class="link" aria-label="read more" :href="url">Read more →</a>
      </div>
    </div>
</template>

<style scoped>
.post {
  padding: 2rem 0;
}

.title {
  border-top: 0;
  margin-top: 0.2rem;
  font-size: 1.8rem;
  line-height: 2rem;
  padding-bottom: 0.2rem;
  background: linear-gradient(90deg, #0ad1c7  0%, #3374e4 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.date {
  margin: 0;
  font-weight: bold;
}

a {
  text-decoration: none;
  padding: 0;
  margin: 0;
}

.excerpt {
  padding: 0;
  margin: 0;
}

</style>