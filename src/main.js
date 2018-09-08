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
    domain:'',
    name:'',
    title:'',
    header_text:'',
    color:'',
    author:'',
    author_mail:'',
    sitedetail: {},
    listtitle: '一覧',
  },
  mutations: {
    setDomain(state, payload) {
      state.domain = payload
    },
    setName(state, payload) {
      state.name = payload
    },




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
    setAuthor(state, payload) {
      state.author = payload
    },

    // メッセージの書き換え
    setAuthorMail(state, payload) {
      state.author_mail = payload
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
    getSite({dispatch}) {
      return axios.get('http://localhost:8000/api/site',{})
     },

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
    domain(state) { return state.domain },
    name(state) { return state.name },

    // message をそのまま使用
    sitedetail(state) { return state.sitedetail },
    sitecolor(state) { return state.color },
    listtitle(state) { return state.listtitle },
    author(state) { return state.author },
    authormail(state) { return state.author_mail },

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
