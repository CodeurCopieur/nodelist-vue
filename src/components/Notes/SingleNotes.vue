<script setup>
import { computed } from 'vue';

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

  const emit = defineEmits(['onDeleteClicked'])

  const handleDeleteClick = ()=> {
    emit('onDeleteClicked', props.note.id)
  }
</script>

<template>

  <div class="card">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ nbCharactere }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClick">Delete</a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  
</style>