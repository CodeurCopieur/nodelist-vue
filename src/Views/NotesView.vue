<script setup>
import { ref } from 'vue';

  const notes = ref([{ id: 'id1', content: 'First Notes'}, { id: 'id2', content: 'Second Notes'}]);
  const newNotes = ref('');

  const newNoteRef = ref(null);
  const AddNotes = ()=> {
    const currentDate = new Date().getTime();
    const note = {
      id: `id${currentDate}`,
      content: newNotes.value
    }
    // notes.value.push(note);
    notes.value.unshift(note);
    newNotes.value = '';
    newNoteRef.value.focus;
  }
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


  <div class="card" v-for="note in notes" :key="note.id">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>