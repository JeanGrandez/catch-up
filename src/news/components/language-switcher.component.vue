<script>
export default
{
  name: 'language-switcher',
  data(){
    return{
      language :[ 'en', 'es'],
      languages: 'en'
    }
  }
}
</script>

<template>
<pv-select-button
    v-model="$i18n.locale"
    :options="language"
     class = "uppercase"/>
</template>

<style scoped>

</style>