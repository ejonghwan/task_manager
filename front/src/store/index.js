import Vue from 'vue'
import Vuex from 'vuex'
import { singup } from '@/api/signup.js'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    async signupUser({ commit }, data) {
      try {
        await console.log('actions', data);
        singup(data)
      } catch(err) { err => console.log(err) }

    }
  },
  modules: {
  }
})
