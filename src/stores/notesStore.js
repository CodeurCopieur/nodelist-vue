import { computed, ref } from 'vue';
import { defineStore } from "pinia";
import { getDocs, addDoc, orderBy, query, collection, onSnapshot, setDoc, doc, updateDoc, deleteDoc, limit } from 'firebase/firestore';
import { db } from '../js/firebase';

export const useNotesStore = defineStore('notesStore', ()=> {
  const notes = ref([]);

  const notesCollectionRef = collection(db, 'notes');
  const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'), limit(3));

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
    onSnapshot(notesCollectionQuery, (querySnapshot)=> {
        let notesData = [];
        querySnapshot.forEach(doc => {
        let note = {
          id: doc.id,
          content: doc.data().content,
          date: doc.data().date
        }
        notesData.push(note);
      });

      notes.value = notesData;
    });
  };

  const addNotes = async (noteContent) => {
    const currentDate = new Date().getTime().toString();
    const rawContent = typeof noteContent === 'object' && noteContent.value !== undefined ? noteContent.value : noteContent;
  
    await addDoc(notesCollectionRef, { content: rawContent, date: currentDate });
  };

  const updateNote = async(id, content) => {
    // const index = notes.value.findIndex(note => note.id === id)
    // notes.value[index].content = content;

      // Vérifiez si "content" est un objet réactif et récupérez sa valeur brute
  const rawContent = typeof content === 'object' && content.value !== undefined ? content.value : content;

  await updateDoc(doc(notesCollectionRef, id), {
    content: rawContent // Passez la valeur brute ici
  });
  }

  const deleteNote = async(noteId)=> {
    // notes.value = notes.value.filter(note => note.id !== noteId)
    await deleteDoc(doc(notesCollectionRef, noteId));

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