import { computed, ref } from 'vue';
import { defineStore } from "pinia";

export const useNotesStore = defineStore('notesStore', ()=> {
  const notes = ref([
    { id: 'id1', content: 'First Notes'}, { id: 'id2', content: 'Second Notes'}
  ]);

  const getNoteContentById = computed(()=> {
    return (id) => notes.value.find(note => note.id === id)?.content;
  })

  const addNotes = (noteContent)=> {
    const currentDate = new Date().getTime().toString();
    const note = {
      id: `id${currentDate}`,
      content: noteContent
    }
    // notes.value.push(note);
    notes.value.unshift(note);
  };

  const updateNote = (id, content) => {
    const index = notes.value.findIndex(note => note.id === id)
    notes.value[index].content = content;
  }

  const deleteNote = (noteId)=> {
    notes.value = notes.value.filter(note => note.id !== noteId)
  };

  const totalNotesCount = computed(()=> {
    return notes.value.length;
  });

  const totalCharactersCount = computed(()=> {
    let count = 0;
    for (let note of notes.value) {
      count += note.content.length;
    }

    return count;
  })

  return {
    notes,
    addNotes,
    deleteNote,
    getNoteContentById,
    updateNote,
    totalNotesCount,
    totalCharactersCount
  }
})