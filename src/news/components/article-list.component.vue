<script>
export default {
  name:"article-list",
  components: {
    ArticleItem
  },
  props:{
    articles: {type: Array, required: true}
  }
}

</script>

<template>
<div>
  <article-item v-for="article in articles" :key="article.title" :article="article"/>
</div>
</template>

<style scoped>

</style>