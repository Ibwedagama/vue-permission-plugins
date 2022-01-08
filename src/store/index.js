import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    permissions: []
  },
  mutations: {
    SET_PERMISSIONS(state, payload) {
      state.permissions = payload
    }
  },
  actions: {
    getPermissions({dispatch}) {

      // emulate fetching data from API 
      // which will take some time to complete
      setTimeout(() => {
        const response = ['can-read', 'can-edit', 'can-delete', 'can-create']

        dispatch('setPermissions', response)
      }, 2000)
    },
    setPermissions({commit}, payload) {
      commit('SET_PERMISSIONS', payload)
    }
  },
  modules: {
  }
})
