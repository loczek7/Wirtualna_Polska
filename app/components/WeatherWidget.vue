<template>
  <div class="wp-weather" @click="toggleForm">
    <img v-if="icon" :src="icon" :alt="description" class="wp-weather__icon" />
    <div v-else class="wp-weather__icon-placeholder">🌤️</div>
    <div class="wp-weather__content">
      <div class="wp-weather__city" aria-live="polite">{{ city }}</div>
      <div class="wp-weather__chev">▾</div>
      <div class="wp-weather__temp"><span class="wpw-temp">{{ temperature }}</span>°</div>
    </div>
    <div class="wp-weather__form" :class="{ open: isFormOpen }" role="dialog" aria-label="Wybierz miasto" @click.stop>
      <input
        v-model="inputCity"
        class="wp-weather__input"
        type="text"
        placeholder="Miasto w Polsce"
        @keydown.enter="submitCity"
      />
      <button class="wp-weather__submit" title="Szukaj" aria-label="Szukaj" @click="submitCity">🔍</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// @ts-expect-error - Nuxt auto-imports composables from composables/ folder
const { city, temperature, icon, description, loadCity } = useWeather()
const isFormOpen = ref(false)
const inputCity = ref('')

const toggleForm = () => {
  isFormOpen.value = !isFormOpen.value
}

const submitCity = () => {
  const q = inputCity.value.trim()
  if (q) {
    loadCity(q)
    inputCity.value = ''
  }
}

const handleClickOutside = (e: Event) => {
  if (!(e.target as HTMLElement).closest('.wp-weather')) {
    isFormOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

