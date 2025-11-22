<template>
  <div class="ad-banner" :style="{ width: '100%', height: height }">
    <span class="ad-banner__text">REKLAMA</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  height: string
}>()
</script>

