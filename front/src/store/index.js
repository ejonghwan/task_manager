import Vue from 'vue'
import Vuex from 'vuex'
import { singup } from '@/api/signup.js'
import { login } from '@/api/signup.js'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    userInfo: '',
  },
  mutations: {
    isLogin(state, data) {
      state.userInfo = data
    },

    isLogout(state) {
      state.userInfo = ''
    }
    
  },
  actions: {
    async signupUser({ commit }, data) {
      try {
        await console.log('actions', data);
        singup(data)
      } catch(err) { err => console.log(err) }

    },

    async isLogged({commit}, data) {
      try {
        const user = await login(data)
        commit('isLogin', user)
        
      } catch(err) {
        console.log(err)
      }
    },
  },



  modules: {
  }
})
