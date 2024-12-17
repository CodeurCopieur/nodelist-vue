<script setup>
import { ref } from 'vue';
import SingleNotes from '../components/Notes/SingleNotes.vue';
import AddEditNote from '../components/Notes/AddEditNote.vue';
import {useNotesStore} from '../stores/notesStore';
import { storeToRefs } from 'pinia';

  const notesStore = useNotesStore()
  const {notes} = storeToRefs(notesStore);



</script>

<template>
  <AddEditNote />
  <SingleNotes v-for="note in notes" :key="note.id" :note="note" />
</template>