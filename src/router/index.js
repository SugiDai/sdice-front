import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import PostList from '@/components/PostList'
import PostDetail from '@/components/PostDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
          {
              path: '',
              component: PostList
          },
          {
              name: "post",
              path: 'post/:id',
              component: PostDetail
          }
      ]
    }
  ]
})
