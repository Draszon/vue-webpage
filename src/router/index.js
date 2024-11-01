import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TicTacToeView from '../views/TicTacToeView.vue'
import KoPapirOlloView from '../views/KoPapirOlloView.vue'
import AkasztofaView from '../views/AkasztofaView.vue'
import BlackJackView from '../views/BlackJackView.vue'
import MillionaireView from '../views/MillionaireView.vue'
import DartsView from '../views/DartsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tictactoe',
      name: 'tictactoe',
      component: TicTacToeView
    },
    {
      path: '/kopapirollo',
      name: 'kopapirollo',
      component: KoPapirOlloView
    },
    {
      path: '/akasztofa',
      name: 'akasztofa',
      component: AkasztofaView
    },
    {
      path: '/blackjack',
      name: 'blackjack',
      component: BlackJackView
    },
    {
      path: '/millionaire',
      name: 'millionaire',
      component: MillionaireView
    },
    {
      path: '/darts',
      name: 'darts',
      component: DartsView
    }
  ]
})

export default router
