import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import PostList from '@/components/PostList'
import PostDetail from '@/components/PostDetail'
import CommentForm from '@/components/CommentForm'
import ReCommentForm from '@/components/ReCommentForm'
import TagTable from '@/components/TagTable'
import store from "../store"

Vue.use(Router)

const router =  new Router({
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

router.beforeEach((to, from, next) => {
  // console.log("start");
  // var store = this.a.app.$options.store;
  store.commit('start')
  setTimeout(()=>{next()},500)
})

router.afterEach((to, from) => {
  // console.log("end");
  // var store = this.a.app.$options.store;
  store.commit('end')
})

export default router;