import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import PostList from '@/components/PostList'
import PostDetail from '@/components/PostDetail'
import CommentForm from '@/components/CommentForm'
import ReCommentForm from '@/components/ReCommentForm'
import TagTable from '@/components/TagTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: PostList,
        },

        {
          name: "top",
          path: 'top',
          query: 'keyword=:keyword',
          component: PostList,
        },
        {
          name: "post",
          path: 'post/:id',
          component: PostDetail
        },
        {
          name: "tagtable",
          path: 'tagtable',
          component: TagTable
        },
        {
          name: "commentform",
          path: 'commentform/:id',
          component: CommentForm
        },
        {
          name: "recommentform",
          path: 'recommentform',
          query: 'postid=:postid&commendid=:commendid',
          component: ReCommentForm
        },
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 200 }
  }  
})
