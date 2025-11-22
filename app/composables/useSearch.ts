import { ref } from 'vue'

export const useSearch = () => {
  const searchTerm = ref('')

  const handleSearch = (term: string) => {
    if (term.trim()) {
      // TODO: Implement actual search functionality
      alert(`Szukanie: "${term}"`)
      searchTerm.value = term
    }
  }

  return {
    searchTerm,
    handleSearch
  }
}

