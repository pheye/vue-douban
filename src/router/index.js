import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/layouts/Default'
import Home from '@/pages/Home'
import Book from '@/pages/Book'
import Movie from '@/pages/Movie'
import Group from '@/pages/Group'
import Broadcast from '@/pages/Broadcast'
import ActivityDetail from '@/pages/ActivityDetail'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'books',
          name: 'Book',
          component: Book
        },
        {
          path: 'movies',
          name: 'Movie',
          component: Movie
        },
        {
          path: 'groups',
          name: 'Group',
          component: Group
        },
        {
          path: 'broadcasts',
          name: 'Broadcast',
          component: Broadcast
        },
        {
          path: 'activities/:id',
          name: 'ActivityDetail',
          component: ActivityDetail
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
