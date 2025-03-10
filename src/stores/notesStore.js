import { computed, ref } from 'vue';
import { defineStore } from "pinia";
import { getDocs, collection, onSnapshot, setDoc, doc } from 'firebase/firestore';
import { db } from '../js/firebase';

export const useNotesStore = defineStore('notesStore', ()=> {
  const notes = ref([]);

  const notesCollectionRef = collection(db, 'notes');

  const getNoteContentById = computed(()=> {
    return (id) => notes.value.find(note => note.id === id)?.content;
  })

  const getNotes = async ()=> {
    // const querySnapshot = await getDocs(collection(db, 'notes'));
    // querySnapshot.forEach(doc => {
    //   let note = {
    //     id: doc.id,
    //     content: doc.data().content
    //   }
    //   notes.value.push(note);
    // });
    onSnapshot(notesCollectionRef, (querySnapshot)=> {
        let notesData = [];
        querySnapshot.forEach(doc => {
        let note = {
          id: doc.id,
          content: doc.data().content
        }
        notesData.push(note);
      });

      notes.value = notesData;
    });
  };

  const addNotes = async (noteContent)=> {
    const currentDate = new Date().getTime().toString();
    // const note = {
    //   id: `id${currentDate}`,
    //   content: noteContent
    // }
    // // notes.value.push(note);
    // notes.value.unshift(note);

    await setDoc(doc(notesCollectionRef, currentDate), {
      content: noteContent
    });

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
    getNotes,
    addNotes,
    deleteNote,
    getNoteContentById,
    updateNote,
    totalNotesCount,
    totalCharactersCount
  }
})