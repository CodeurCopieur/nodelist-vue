<script setup>
import { useRoute } from 'vue-router';

  const route = useRoute()
</script>

<template>
 <h1>EditNoteView {{  $route.params.id }}</h1>
</template>

<style lang="scss" scoped>
  
</style>