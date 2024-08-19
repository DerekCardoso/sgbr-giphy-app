<template>
  <div class="bg-blue-900 w-60 h-screen p-5 text-white flex flex-col justify-between">
    <div>
      <div class="flex items-center justify-center mb-6">
        <!-- <img src="@/assets/logo.png" alt="Logo" class="h-8" /> Adicione o logo aqui -->
      </div>
      <nav>
        <ul>
          <li class="mb-4">
            <router-link to="/" class="flex items-center p-2 rounded hover:bg-blue-800">
              <i class="fas fa-home mr-2"></i> <!-- Icone de Home -->
              <span>Home</span>
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/favoritos" class="flex items-center p-2 rounded hover:bg-blue-800">
              <i class="fas fa-heart mr-2"></i> <!-- Icone de Favoritos -->
              <span>Favoritos</span>
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/categorias" class="flex items-center p-2 rounded hover:bg-blue-800">
              <i class="fas fa-th-list mr-2"></i> <!-- Icone de Categorias -->
              <span>Categorias</span>
            </router-link>
          </li>
          <li class="mb-4">
            <router-link to="/sobre" class="flex items-center p-2 rounded hover:bg-blue-800">
              <i class="fas fa-info-circle mr-2"></i> <!-- Icone de Sobre -->
              <span>Sobre</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="text-center mt-auto">
      <router-link to="/perfil" class="flex items-center p-2 rounded hover:bg-blue-800">
        <i class="fas fa-user-circle mr-2"></i> <!-- Icone de Perfil -->
        <span>Nome Programador</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
// Nenhuma lógica adicional necessária neste componente por enquanto
</script>

<style scoped>
/* Adicione estilos customizados aqui, se necessário */
</style>
