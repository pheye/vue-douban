import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layouts/Default'
import Home from '@/pages/Home'
import Book from '@/pages/Book'
import Movie from '@/pages/Movie'
import Group from '@/pages/Group'
import Broadcast from '@/pages/Broadcast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'books',
          component: Book
        },
        {
          path: 'movies',
          component: Movie
        },
        {
          path: 'groups',
          component: Group
        },
        {
          path: 'broadcasts',
          component: Broadcast
        }
      ]
    },
    {
      path: '/plain',
      component: Home
    }
  ]
})
