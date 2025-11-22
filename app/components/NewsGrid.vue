<template>
  <section :id="sectionId" class="news-grid">
    <div class="news-grid__header">
      <h2 class="news-grid__title">{{ title }}</h2>
    </div>

    <div class="news-grid__grid">
      <article
        v-for="article in articles"
        :key="article.id"
        class="news-article"
        @click="handleArticleClick(article)"
      >
        <div class="news-article__image-wrapper">
          <img
            :src="article.image"
            :alt="article.title"
            class="news-article__image"
            loading="lazy"
          />
        </div>
        <div class="news-article__content">
          <div class="news-article__meta">
            <span class="news-article__category">{{ article.category }}</span>
            <span class="news-article__time">{{ article.time }}</span>
          </div>
          <h3 class="news-article__title">{{ article.title }}</h3>
          <p class="news-article__description">{{ article.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Article {
  id: number
  image: string
  category: string
  time: string
  title: string
  description: string
}

defineProps<{
  sectionId: string
  title: string
  articles: Article[]
}>()

const handleArticleClick = (article: Article) => {
  // TODO: Navigate to article page
  console.log('Article clicked:', article)
}
</script>

