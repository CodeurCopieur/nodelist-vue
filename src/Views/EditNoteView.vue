<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useNotesStore} from '../stores/notesStore'
const route = useRoute()
const router = useRouter()

import AddEditNote from '../components/Notes/AddEditNote.vue';

const noteContent = ref('');

const notesStore = useNotesStore()

noteContent.value = notesStore.getNoteContentById(route.params.id)

const onNoteSave = () => {
  notesStore.updateNote(route.params.id, noteContent)
  // router.back()
  router.push({name: 'notes'})
};
</script>

<template>
<!--  <h1>EditNoteView {{  $route.params.id }}</h1> -->

<AddEditNote 
    v-model="noteContent"
    ref="addEditNoteRef"
    bgColor="link"
    label="Modifier la note"
    placeholder="Modifier la note">
    <template #button>
      <!-- <button class="button is-link" @click="$router.push({name: 'notes'})">Annuler</button> -->
      <!-- <button class="button is-link" @click="$router.back()">Annuler</button> -->
      <router-link :to="{ name: 'notes' }" class="button is-link">Annuler</router-link>
      <button :disabled="!noteContent" class="button is-link" @click.prevent="onNoteSave">Save note</button>
    </template>
  </AddEditNote>
</template>

<style lang="scss" scoped>
  
</style>