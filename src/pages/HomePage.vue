<template>
  <div class="page-container">
    <h4 class="page-title">Home</h4>
    <q-page class="q-pa-md">
      <q-card class="bg-white q-pa-md">
        <!-- Conteúdo da API -->
        <div v-if="gifs.length"
          class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <div v-for="gif in gifs" :key="gif.id" class="gif-item">
            <img :src="gif.images.fixed_height.url" :alt="gif.title" class="gif-image" />
            <q-btn @click="toggleFavorite(gif)" :label="isFavorite(gif) ? 'Unfavorite' : 'Favorite'" class="mt-2" />
          </div>
        </div>
      </q-card>
    </q-page>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useGiphyStore } from 'src/stores/giphyStore'

const store = useGiphyStore()
const gifs = ref([])

const fetchGifs = async () => {
  await store.fetchTrendingGifs()
  gifs.value = store.trendingGifs
}

const toggleFavorite = (gif) => {
  store.toggleFavorite(gif)
}

const isFavorite = (gif) => {
  return store.isFavorite(gif)
}

onMounted(fetchGifs)
</script>

<style scoped>
.page-container {
  background-color: #f0f0f0;
  /* Fundo cinza */
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
  max-width: 100%;
  height: auto;
  width: 100%;
  /* Ajusta a largura da imagem ao tamanho do container */
  height: 200px;
  object-fit: cover;
}
</style>
