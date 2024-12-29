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

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor : {
    type: String,
    default: 'danger'
  },
  label: {
    type: String
  },
  placeholder: {
    type: String,
    default: ''
  }
});
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
   <div class="my-4 p-4 border-2" :class="`has-background-${bgColor}`">
    <div class="field">
      <label class="label" v-if="label">{{ label }}</label>
      <div class="control">
        <textarea class="textarea" 
          :placeholder="placeholder" 
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
          ref="textareaRef"></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <!-- <button :disabled="!newNotes" class="button is-link" @click="AddNotes">Ajouter une nouvelle note</button> -->
         <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>