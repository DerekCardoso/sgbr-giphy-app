import HomePage from 'pages/HomePage.vue'
import FavoritosPage from 'pages/FavoritosPage.vue'
import CategoriasPage from 'pages/CategoriasPage.vue'
import SobrePage from 'pages/SobrePage.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: HomePage },
      { path: 'favoritos', component: FavoritosPage },
      { path: 'categorias', component: CategoriasPage },
      { path: 'sobre', component: SobrePage },
    ]
  }
]

export default routes
