<script setup>
import { ref } from 'vue';
import SingleNotes from '../components/Notes/SingleNotes.vue';
import {useNotesStore} from '../stores/notesStore';
import { storeToRefs } from 'pinia';

  const notesStore = useNotesStore()
  const {notes} = storeToRefs(notesStore)

  const newNotes = ref('');

  const newNoteRef = ref(null);
  const AddNotes = ()=> {
   notesStore.addNotes(newNotes.value)
    newNotes.value = '';
    newNoteRef.value.focus();
  };

  const deleteNote = (idToDelete)=> {
    notes.value = notes.value.filter(note => note.id !== idToDelete)
    
  };
</script>

<template>

  <div class="has-background-danger my-4 p-4 border-2">
    <div class="field">
      <label class="label">Note</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea" 
          v-model="newNotes"
          ref="newNoteRef"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button :disabled="!newNotes" class="button is-link" @click="AddNotes">Ajouter une nouvelle note</button>
      </div>
    </div>
  </div>

  <SingleNotes v-for="note in notes" :key="note.id" :note="note" @onDeleteClicked="deleteNote" />
</template>