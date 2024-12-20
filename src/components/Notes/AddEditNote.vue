<script setup>
import { ref } from 'vue';
// import {useNotesStore} from '../../stores/notesStore';
// import { storeToRefs } from 'pinia';

// const notesStore = useNotesStore()
// const {notes} = storeToRefs(notesStore);

// const newNotes = ref('');

// const newNoteRef = ref(null);
//     const AddNotes = ()=> {
//    notesStore.addNotes(newNotes.value)
//     newNotes.value = '';
//     newNoteRef.value.focus();
//   };

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const textareaRef = ref(null)

const focusTextArea = () => {
  textareaRef.value.focus()
}

defineExpose({
  focusTextArea
});
</script>

<template>
   <div class="has-background-danger my-4 p-4 border-2">
    <div class="field">
      <label class="label">Note</label>
      <div class="control">
        <textarea class="textarea" 
          placeholder="Ajouter une note" 
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
          ref="textareaRef"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <!-- <button :disabled="!newNotes" class="button is-link" @click="AddNotes">Ajouter une nouvelle note</button> -->
         <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>