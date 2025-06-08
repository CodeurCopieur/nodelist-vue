<script setup>
import { onMounted } from 'vue';
import NavBar from './components/Layout/NavBar.vue'
import { useNotesStore } from './stores/notesStore';
import { useAuthStore } from './stores/AuthStore';

const authStore = useAuthStore();

onMounted(() => {
  authStore.init();
});


</script>

<template>
  <NavBar/>
  <div class="container px-2">
    <RouterView />
  </div>
</template>