<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { onClickOutside } from '@vueuse/core'
  import { ref } from 'vue'

  const props = defineProps({
    modelValue: Boolean,
    required: true
  });

  const emits = defineEmits(['update:modelValue']);
  const closeModal = () =>{
    emits('update:modelValue', false);
  };
  const handleClose = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  const deleteModalRef = ref(null)

  onClickOutside(deleteModalRef, closeModal)

  onMounted( ()=> {
    addEventListener('keyup', handleClose)
  });
  onUnmounted( ()=> {
    addEventListener('keyup', handleClose)
  });
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" ref="deleteModalRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Supprimer la note ?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body"><p>Êtes-vous sure de vouloir supprimer ?</p></section>
      <footer class="modal-card-foot">
        <div class="buttons">
          <button class="button is-danger">Supprimer</button>
          <button class="button" @click="closeModal">Cancel</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>