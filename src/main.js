// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios';
import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'github-markdown-css/github-markdown.css'

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    title:'',
    header_text:'',
    color:'',
    sitedetail: {},
    listtitle: '一覧',
  },
  mutations: {
    // メッセージの書き換え
    setTitle(state, payload) {
      state.title = payload
    },
    // メッセージの書き換え
    setHeaderText(state, payload) {
      state.header_text = payload
    },
    // メッセージの書き換え
    setColor(state, payload) {
      state.color = payload
    },

    // メッセージの書き換え
    setSiteDetail(state, payload) {
      state.sitedetail = payload
    },

    // 一覧タイトルの書き換え
    setListTitle(state, payload) {
      state.listtitle = payload
    },

  },

  actions: {
    // メッセージを API からGET
    getSiteDetail({dispatch}) {
        return axios.get('http://localhost:8000/api/sitedetaile/',{})
        // .then(function(res){
        //   store.commit('setSitedetail', res.data )
        // }).catch(function(res){
        //   console.log(res)
        // })
    },
    // saveMessage({commit, state}) {
    //   axios.put('/api/message', { message: state.message })
    // },
  },
  getters: {
    // message をそのまま使用
    sitedetail(state) { return state.sitedetail },

    // message をそのまま使用
    sitecolor(state) { return state.color },

    // message をそのまま使用
    listtitle(state) { return state.listtitle },
  }

})

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
