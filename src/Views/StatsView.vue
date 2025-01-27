<script setup>
import { ref } from 'vue';

import {useNotesStore} from '../stores/notesStore';
import { vAutofocus } from "../directives/vAutofocus";

import { useCharactersLimit } from '../composables/useCharactersLimit';

const notesStore = useNotesStore()
const totalNotesCount = notesStore.totalNotesCount;
const totalCharactersCount = notesStore.totalCharactersCount;
const feedback = ref('');

useCharactersLimit(feedback, 50);

</script>

<template>
<div class="mt-3">
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Stats</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total Notes Count</td>
        <td>{{totalNotesCount}}</td>
      </tr>
      <tr>
        <td>Total Characters Count</td>
        <td>{{totalCharactersCount}}</td>
      </tr>
    </tbody>
  </table>

  <input 
    type="text" 
    class="input" 
    placeholder="Entrer le Feedback..."
    v-autofocus
    maxlength="50"
    v-model="feedback">
</div>
</template>
