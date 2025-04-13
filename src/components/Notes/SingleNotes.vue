<script setup>
import { computed, reactive } from 'vue';
import {useNotesStore} from '../../stores/notesStore'
import { useDateFormat } from '@vueuse/core'
import { RouterLink } from 'vue-router';
import DeleteNoteModal  from './DeleteNoteModal.vue';

  const props = defineProps({
    note:{
      type: Object,
      required: true
    }
  });

  const nbCharactere = computed(() => {
    const contentLength = props.note.content.length;
    const textDesc = contentLength > 1 ? ' charactères' : ' charactère' 
    return `${contentLength} ${textDesc}`
  });

  // const emit = defineEmits(['onDeleteClicked'])

  const notesStore = useNotesStore();

  const handleDeleteClick = ()=> {
    // emit('onDeleteClicked', props.note.id)
    // notesStore.deleteNote(props.note.id)
    modals.deleteModal = true;
  };

  const modals = reactive({
    deleteModal: false
  });

  
  const formattedDate = computed(() => {
    const date = new Date(+props.note.date);
    const formatDate = useDateFormat(date, 'DD-MM-YYYY à HH:mm:ss');
    return formatDate.value
  })
  
</script>

<template>

  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="columns has-text-grey-light mt-2">
          <small class="column">{{ formattedDate }}</small>
          <small class="column">{{ nbCharactere }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="{name: 'edit-note', params: { id: note.id}}" class="card-footer-item">Edit</RouterLink>
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClick">Delete</a>
    </footer>
    <DeleteNoteModal v-if="modals.deleteModal" v-model="modals.deleteModal" :noteId="note.id"/>
  </div>
</template>

<style lang="scss" scoped>
  
</style>