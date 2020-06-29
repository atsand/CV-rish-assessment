import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    riskScore: null
  },
  mutations: { // syncronous
    setRiskScore (state, payload) {
      state.riskScore = payload
    }
  },
  actions: { // asyncronous
    async randomizeRisk (state) {
      var newRisk = Math.floor(Math.random() * 101)
      // this.setRiskScore(newRisk)
      state.commit('setRiskScore', newRisk)
    }
  },
  modules: {
  },
  getters: {
    getRiskScore (state) {
      return state.riskScore
    }
  }
})
