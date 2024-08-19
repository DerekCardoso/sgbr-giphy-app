<template>
  <q-layout view="hHh lpR fFf" class="bg-gray-100 text-gray-900">
    <q-header elevated class="bg-blue-900 text-white">
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleLeftDrawer"></q-btn>
        <q-toolbar-title class="q-mx-md">
          <img src="https://via.placeholder.com/40" alt="Logo" class="logo h-8" />
        </q-toolbar-title>
        <div class="q-gutter-md flex items-center ml-auto">
          <div class="text-h6 q-mr-md">NOME DESENVOLVEDOR</div>
          <q-avatar>
            <img src="https://via.placeholder.com/40" alt="Profile Picture" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-blue-900 text-black">
      <Navbar />
    </q-drawer>

    <q-page-container class="container mx-auto p-4 bg-white shadow-md rounded-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from 'components/NavBar.vue'

defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.logo {
  border-radius: 50%;
}
</style>
