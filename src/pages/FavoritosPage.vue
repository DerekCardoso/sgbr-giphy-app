<template>
  <div class="page-container">
    <h4 class="page-title">Favoritos</h4>
    <q-page class="q-pa-md">
      <q-card class="bg-white q-pa-md">
        <div v-if="favorites.length"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <div v-for="gif in favorites" :key="gif.id" class="gif-item">
            <img :src="gif.images.fixed_height.url" :alt="gif.title" class="gif-image" />
            <q-btn @click="toggleFavorite(gif)" label="Remove from Favorites" class="mt-2" />
          </div>
        </div>
      </q-card>
    </q-page>
  </div>
</template>

<script setup>
import { useGiphyStore } from 'src/stores/giphyStore'

const store = useGiphyStore()

const favorites = store.favorites

const toggleFavorite = (gif) => {
  store.toggleFavorite(gif)
}
</script>

<style scoped>
.page-container {
  background-color: #f0f0f0;
  padding: 20px;
  min-height: 100vh;
}

.page-title {
  color: #525659;
  font-size: 25px;
  margin-bottom: 20px;
  margin-left: 20px;
}

.q-card {
  width: 100%;
}

.gif-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gif-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
