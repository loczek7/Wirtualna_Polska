<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__sections">
        <div
          v-for="section in sections"
          :key="section.id"
          class="footer__section"
          :class="{ active: activeSection === section.id }"
          @click="setActiveSection(section.id)"
        >
          <h3 class="footer__section-title">
            <a
              :href="`#${section.id}`"
              class="footer__section-link"
              @click.prevent="scrollToSection(section.id)"
            >
              {{ section.title }}
            </a>
          </h3>
          <ul class="footer__list">
            <li
              v-for="item in section.items"
              :key="item.id"
              class="footer__list-item"
            >
              <a :href="`#${item.id}`" class="footer__link" @click.prevent="scrollToSection(item.id)">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>&copy; 2025 NewsPortal. Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sections = [
  {
    id: 'info',
    title: 'Informacje',
    items: [
      { id: 'about', name: 'O nas' },
      { id: 'contact', name: 'Kontakt' },
      { id: 'advertising', name: 'Reklama' },
      { id: 'privacy', name: 'Polityka prywatności' },
      { id: 'terms', name: 'Regulamin' }
    ]
  },
  {
    id: 'categories',
    title: 'Kategorie',
    items: [
      { id: 'info', name: 'Wiadomości' },
      { id: 'sport', name: 'Sport' },
      { id: 'business', name: 'Biznes' },
      { id: 'fun', name: 'Rozrywka' },
      { id: 'tech', name: 'Tech' },
      { id: 'travel', name: 'Podróże' },
      { id: 'lifestyle', name: 'Lifestyle' }
    ]
  },
  {
    id: 'services',
    title: 'Serwisy',
    items: [
      { id: 'mail', name: 'Poczta' },
      { id: 'weather', name: 'Pogoda' },
      { id: 'horoscope', name: 'Horoskop' },
      { id: 'tv', name: 'Program TV' },
      { id: 'finance', name: 'Finanse' }
    ]
  },
  {
    id: 'social',
    title: 'Obserwuj nas',
    items: [
      { id: 'facebook', name: 'Facebook' },
      { id: 'twitter', name: 'Twitter' },
      { id: 'instagram', name: 'Instagram' },
      { id: 'youtube', name: 'YouTube' },
      { id: 'rss', name: 'RSS' }
    ]
  }
]

const activeSection = ref('info')

const setActiveSection = (id: string) => {
  activeSection.value = id
}

const scrollToSection = (id: string) => {
  const target = document.querySelector(`#${id}`)
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>

