<script setup>
import {useNotesStore} from '../stores/notesStore';

const notesStore = useNotesStore()
const totalNotesCount = notesStore.totalNotesCount;
const totalCharactersCount = notesStore.totalCharactersCount;

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
</div>
</template>
