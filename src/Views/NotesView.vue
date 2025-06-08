<script setup>
import { ref, onMounted } from 'vue';
import SingleNotes from '../components/Notes/SingleNotes.vue';
import AddEditNote from '../components/Notes/AddEditNote.vue';

import { useCharactersLimit } from '../composables/useCharactersLimit';

import {useNotesStore} from '../stores/notesStore';
import { storeToRefs } from 'pinia';

const notesStore = useNotesStore()

onMounted(() => {
  notesStore.getNotes();
});
const {notes} = storeToRefs(notesStore);

const newNotes = ref('');

const addEditNoteRef = ref(null);
const AddNotes = ()=> {
  notesStore.addNotes(newNotes.value)
  newNotes.value = '';
  addEditNoteRef.value.focusTextArea();
};

useCharactersLimit(newNotes, 100);

</script>

<template>
  <AddEditNote 
    v-model="newNotes"
    ref="addEditNoteRef"
    bgColor="danger"
    label="Ajouter une note"
    placeholder="Saisie la note">
    <template #button>
      <button :disabled="!newNotes" class="button is-link" @click="AddNotes">Ajouter une nouvelle note</button>
    </template>
  </AddEditNote>
   
  <progress class="progress is-large is-info" max="100" v-if="!notesStore.notesLoaded"/>

  <template v-else>
    <SingleNotes v-for="note in notes" :key="note.id" :note="note" />
  </template>

  <div class="has-text-centered py-6 is-size-4 has-text-grey-light is-family-monospace" v-if="!notes.length">Aucune note ajoutée ici pour le moment !!!</div>

</template>