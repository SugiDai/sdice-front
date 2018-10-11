import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const initialState = {
    domain: '',
    name: '',
    title: '',
    header_text: '',
    color: '',
    author: '',
    author_mail: '',
    sitedetail: {},
    listtitle: '一覧',
    loading: false,
  }
  
  const store = new Vuex.Store({
    state: initialState,
    mutations: {
      setDomain(state, payload) {
        state.domain = payload
      },
      setName(state, payload) {
        state.name = payload
      },
      setTitle(state, payload) {
        state.title = payload
      },
      setHeaderText(state, payload) {
        state.header_text = payload
      },
      setColor(state, payload) {
        state.color = payload
      },
      setAuthor(state, payload) {
        state.author = payload
      },
      setAuthorMail(state, payload) {
        state.author_mail = payload
      },
      setSiteDetail(state, payload) {
        state.sitedetail = payload
      },
      setListTitle(state, payload) {
        state.listtitle = payload
      },
      start(state) { state.loading = true },
      end(state) { state.loading = false }
    },
  
    actions: {
      getSite({ dispatch }) {
        return axios.get('http://localhost:8000/api/site', {})
      },
  
      // メッセージを API からGET
      getSiteDetail({ dispatch }) {
        return axios.get('http://localhost:8000/api/sitedetaile/', {})
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
      sitedetail(state) { return state.sitedetail },
      sitecolor(state) { return state.color },
      listtitle(state) { return state.listtitle },
      author(state) { return state.author },
      authormail(state) { return state.author_mail },
      bgcolor(state) { return "bg-" + state.color },
      badgecolor(state) { return "badge-" + state.color },
    },
    plugins: [createPersistedState({ key: 'sdice-front' })]
  })

  export default store;