import Vue from 'vue'
import Vuex from 'vuex'
import Home from './modules/Home'
import Starship from './modules/Starship'
import Planets from './modules/Planets'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Home,
    Starship,
    Planets
  }
})
