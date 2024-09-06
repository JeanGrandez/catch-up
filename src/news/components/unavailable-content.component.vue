<script setup>
export default {
  name: 'UnavailableContent',
  props: {
    errors: null
  }
}
</script>

<template>

</template>
<div><h4>{{$t('unavailable-news')}}</h4></div>
<div v-for= "error in errors" :key="error">
<h6>{{error}}</h6>
</div>
<style scoped>
</style>