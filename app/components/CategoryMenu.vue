<template>
  <nav class="category-menu">
    <div class="category-menu__container">
      <ul class="category-menu__list">
        <li
          v-for="category in categories"
          :key="category.id"
          class="category-menu__item"
          :class="{ active: activeCategory === category.id }"
          @click="setActiveCategory(category.id)"
        >
          <a :href="`#${category.id}`" class="category-menu__link" @click.prevent="scrollToSection(category.id)">
            {{ category.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const categories = [
  { id: 'info', name: 'Wiadomości' },
  { id: 'sport', name: 'Sport' },
  { id: 'business', name: 'Biznes' },
  { id: 'fun', name: 'Rozrywka' },
  { id: 'woman', name: 'Kobieta' },
  { id: 'tech', name: 'Tech' },
  { id: 'car', name: 'Motoryzacja' },
  { id: 'travel', name: 'Podróże' },
  { id: 'lifestyle', name: 'Lifestyle' },
  { id: 'health', name: 'Zdrowie' }
]

const activeCategory = ref('info')

const setActiveCategory = (id: string) => {
  activeCategory.value = id
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

