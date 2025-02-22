<script setup>
import { onMounted } from 'vue';
import NavBar from './components/Layout/NavBar.vue'
import { useNotesStore } from './stores/notesStore';

const notesStore = useNotesStore();

onMounted(() => {
  notesStore.getNotes();
});
</script>

<template>
  <NavBar/>
  <div class="container px-2">
    <RouterView />
  </div>
</template>