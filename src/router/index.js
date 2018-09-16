import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import PostList from '@/components/PostList'
import PostDetail from '@/components/PostDetail'
import CommentForm from '@/components/CommentForm'

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
          },
          {
            name: "commentform",
            path: 'commentform/:id',
            component: CommentForm
        }
      ]
    }
  ]
})
