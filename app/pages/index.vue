<template>
  <main class="main">
    <!-- Top Ad Banner -->
    <div class="mb-6">
      <AdBanner height="100px" />
    </div>

    <!-- Hero Section -->
    <HeroSection />

    <!-- Middle Ad Banner -->
    <div class="my-8">
      <AdBanner height="250px" />
    </div>

    <!-- News Section: Najnowsze wiadomości -->
    <NewsGrid
      section-id="info"
      title="Najnowsze wiadomości"
      :articles="latestNews"
    />

    <!-- Ad Banner -->
    <div class="my-8">
      <AdBanner height="120px" />
    </div>

    <!-- News Section: Lifestyle -->
    <NewsGrid
      section-id="lifestyle"
      title="Lifestyle"
      :articles="lifestyleNews"
    />

    <!-- Ad Banner -->
    <div class="my-8">
      <AdBanner height="120px" />
    </div>

    <!-- News Section: Sport -->
    <NewsGrid
      section-id="sport"
      title="Sport"
      :articles="sportNews"
    />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Latest News
const latestNews = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1729954182940-d33c36559e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljcyUyMGdvdmVybm1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjE1OTExMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Polityka',
    time: '2 godz. temu',
    title: 'Nowe zmiany w rządzie. Kto straci stanowisko?',
    description: 'Ministerstwo przygotowuje się do największych zmian od lat. Poznaj szczegóły.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1618053238059-cc7761222f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc2MTU1NTQ1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Zdrowie',
    time: '3 godz. temu',
    title: 'Przełom w medycynie. Polscy naukowcy blisko sukcesu',
    description: 'Badania nad nowym lekiem wchodzą w kluczową fazę. To może uratować tysiące życ.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzYxNjEzMzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Gospodarka',
    time: '4 godz. temu',
    title: 'Giełda w szoku. Jakie będą konsekwencje?',
    description: 'Analitycy przewidują dalsze spadki. Inwestorzy w panice wyprzedają akcje.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc2MTYzODI1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Rozrywka',
    time: '5 godz. temu',
    title: 'Festiwal muzyczny odwołany. Znamy powody',
    description: 'Organizatorzy podjęli trudną decyzję. Fani będą mogli odzyskać pieniądze.'
  }
]

// Lifestyle News
const lifestyleNews = [
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1561375958-10610c9b9e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBmYXNoaW9uJTIwd29tYW58ZW58MXx8fHwxNzYxNjc1MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Moda',
    time: '1 godz. temu',
    title: 'Najmodniejsze trendy tej jesieni. Musisz to mieć',
    description: 'Projektanci ujawnili, co będzie hitem sezonu. Zobacz najgorętsze stylizacje.'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1636647511414-c9ec06da32bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzYxNjQyMzU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Kulinaria',
    time: '6 godz. temu',
    title: 'Przepis na idealny obiad. Szybko i smacznie',
    description: 'Ten prosty trik sprawi, że Twoje dania będą jak z najlepszej restauracji.'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1632752369128-c763fffbc924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGJlYWNofGVufDF8fHx8MTc2MTY1MDk4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Podróże',
    time: '7 godz. temu',
    title: 'Najpiękniejsze miejsca na wakacje 2025',
    description: 'Te destynacje musisz odwiedzić w tym roku. Polacy je uwielbiają.'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcHV0ZXIlMjBjb2Rpbmd8ZW58MXx8fHwxNzYxNjc1MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Technologia',
    time: '8 godz. temu',
    title: 'Nowy smartfon w Polsce. Cena zwala z nóg',
    description: 'Najnowszy flagowiec trafił do sprzedaży. Specyfikacja robi wrażenie.'
  }
]

// Sport News
const sportNews = [
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmb290YmFsbCUyMHN0YWRpdW18ZW58MXx8fHwxNzYxNjc1MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Piłka nożna',
    time: '30 min. temu',
    title: 'Reprezentacja Polski szykuje się do meczu sezonu',
    description: 'Trener ogłosił skład. Jedna zmiana zaskoczyła wszystkich kibiców.'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmb290YmFsbCUyMHN0YWRpdW18ZW58MXx8fHwxNzYxNjc1MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Transfery',
    time: '45 min. temu',
    title: 'Transfer stulecia? Wielkie pieniądze na stole',
    description: 'Europejskie kluby walczą o polskiego zawodnika. Kwota robi wrażenie.'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmb290YmFsbCUyMHN0YWRpdW18ZW58MXx8fHwxNzYxNjc1MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Ekstraklasa',
    time: '1 godz. temu',
    title: 'Ekstraklasa w ogniu. Nikt nie spodziewał się takiego wyniku',
    description: 'Sensacja w lidze! Outsider pokonał faworyta do mistrzostwa.'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1686947079063-f1e7a7dfc6a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmb290YmFsbCUyMHN0YWRpdW18ZW58MXx8fHwxNzYxNjc1MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Kontrowersje',
    time: '2 godz. temu',
    title: 'Skandal na boisku. Sędzia może stracić licencję',
    description: 'Kontrowersyjne decyzje arbitra rozwścieczyły kibiców i ekspertów.'
  }
]

// Add scroll animations
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement
        target.style.opacity = '1'
        target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)

  const articles = document.querySelectorAll('.news-article')
  articles.forEach((article, index) => {
    const el = article as HTMLElement
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
    observer.observe(article)
  })
})
</script>

