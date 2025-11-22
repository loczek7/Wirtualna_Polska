<template>
  <div class="hero-section">
    <!-- Main Article -->
    <div class="hero-main">
      <div class="hero-main__image-wrapper">
        <img
          :src="mainArticle.image"
          :alt="mainArticle.title"
          class="hero-main__image"
        />
        <div class="hero-main__overlay"></div>
        <div class="hero-main__content">
          <span class="hero-main__category">{{ mainArticle.category }}</span>
          <h1 class="hero-main__title">{{ mainArticle.title }}</h1>
        </div>
      </div>
    </div>

    <!-- Side News -->
    <div class="hero-side">
      <div
        v-for="article in sideArticles"
        :key="article.id"
        class="hero-side-item"
      >
        <div class="hero-side-item__image-wrapper">
          <img
            :src="article.image"
            :alt="article.title"
            class="hero-side-item__image"
          />
          <div class="hero-side-item__overlay"></div>
          <div class="hero-side-item__content">
            <span class="hero-side-item__category">{{ article.category }}</span>
            <h3 class="hero-side-item__title">{{ article.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mainArticle = {
  id: 1,
  image: 'https://images.unsplash.com/photo-1650984661525-7e6b1b874e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2luZyUyMG5ld3MlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzYxNjQ1MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  category: 'Nauka',
  title: 'Szokujące odkrycie naukowców z Polski. To zmieni wszystko'
}

const sideArticles = [
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmb290YmFsbCUyMHN0YWRpdW18ZW58MXx8fHwxNzYxNjc1MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Sport',
    title: 'Nowy rekord Lewandowskiego. Kibice oszaleli'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzYxNjEzMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Biznes',
    title: 'Co się dzieje z cenami paliw? Eksperci ostrzegają'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcHV0ZXIlMjBjb2Rpbmd8ZW58MXx8fHwxNzYxNjc1MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tech',
    title: 'Rewolucja w technologii. Nowy wynalazek podbija świat'
  }
]
</script>

