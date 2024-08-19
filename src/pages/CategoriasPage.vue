<template>
  <div class="page-container">
    <h4 class="page-title">Categorias</h4>
    <q-page class="q-pa-md">
      <q-card class="bg-white q-pa-md">
        <!-- Botões de Categorias -->
        <div v-if="categories.length"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-6">
          <q-btn v-for="category in categories" :key="category.name" @click="fetchCategoryGifs(category.name)"
            :label="category.name" class="w-full" />
        </div>

        <!-- Grid de GIFs -->
        <div v-if="gifs.length"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 page-grid">
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
const categories = ref([])

const fetchCategoryGifs = async (category) => {
  console.log('Fetching GIFs for category:', category);
  await store.fetchCategoryGifs(category)
  gifs.value = store.trendingGifs
  console.log('GIFs fetched:', gifs.value);
}

const toggleFavorite = (gif) => {
  store.toggleFavorite(gif)
}

const isFavorite = (gif) => {
  return store.isFavorite(gif)
}

onMounted(async () => {
  await store.fetchCategories()
  categories.value = store.categories
  console.log('Categories fetched:', categories.value);
})
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
  /* Título preto */
  font-size: 25px;
  margin-bottom: 20px;
  margin-left: 20px;
}

.q-card {
  width: 100%;
  /* Certifique-se de que o card ocupa toda a largura disponível */
}

.gif-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gif-image {
  width: 100%;
  /* Ajusta a largura da imagem ao tamanho do container */
  height: 200px;
  /* Define uma altura fixa para a imagem */
  object-fit: cover;
  /* Mantém a proporção da imagem e cobre o container */
}

.page-grid {
  margin-top: 5em;
}
</style>
