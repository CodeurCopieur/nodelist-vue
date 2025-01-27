import { watch } from 'vue';

export function useCharactersLimit(value, limit = 100) {
  watch(value, (newValue, oldValue) => {
    if(newValue.length === limit) {
      alert(`Vous avez atteint la limite de caractères : ${limit} caractères !`)
    }
  })
}