<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <!-- Logo -->
        <div class="header__logo">
          <a href="#top" class="header__logo-link" aria-label="Przejdź na górę" @click.prevent="scrollToTop">
            <svg class="header__logo-svg" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="35" height="40" fill="#D91E18"/>
              <text x="5" y="28" fill="white" font-size="24" font-weight="900" font-family="Arial, sans-serif">WP</text>
              <text x="42" y="20" fill="#D91E18" font-size="13" font-weight="800" font-family="Arial, sans-serif">Wirtualna</text>
              <text x="42" y="33" fill="#D91E18" font-size="13" font-weight="800" font-family="Arial, sans-serif">Polska</text>
            </svg>
          </a>
        </div>

        <!-- Weather Widget -->
        <WeatherWidget />

        <!-- Search Bar -->
        <div class="header__search">
          <div class="header__search-wrapper">
            <input
              v-model="searchTerm"
              type="text"
              placeholder="Szukaj wiadomości..."
              class="header__search-input"
              @keypress.enter="handleSearch"
            />
            <svg class="header__search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>

        <!-- Right Icons -->
        <div class="header__actions">
          <button class="header__action-btn" @click="handleAction('Poczta')">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>Poczta</span>
          </button>
          <button class="header__action-btn" @click="handleAction('Zaloguj')">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Zaloguj</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// @ts-expect-error - Nuxt auto-imports composables from composables/ folder
const { searchTerm, handleSearch: search } = useSearch()

const handleSearch = () => {
  search(searchTerm.value)
}

const handleAction = (text: string) => {
  alert(`Funkcja "${text}" - wkrótce dostępna!`)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

