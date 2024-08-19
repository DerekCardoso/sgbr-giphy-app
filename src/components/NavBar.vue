<template>
  <div class="bg-blue-900 w-60 h-screen p-5 text-white flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-center mb-6">
      </div>
      <nav>
        <ul>
          <li class="mb-4">
            <router-link to="/" class="flex items-center p-2 rounded hover:bg-blue-800">
              <span>Home</span>
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/favoritos" class="flex items-center p-2 rounded hover:bg-blue-800">
              <span>Favoritos</span>
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/categorias" class="flex items-center p-2 rounded hover:bg-blue-800">
              <span>Categorias</span>
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/sobre" class="flex items-center p-2 rounded hover:bg-blue-800">
              <span>Sobre</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped></style>
