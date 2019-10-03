import axiosCalls from '@/utils/api/axiosCalls'

export default {
  state: {
    loading: false,
    planetData: {},
    error: ''
  },
  getters: {
    getPlanetById: (state) => (url) => {
      if (url === '') {
        return ''
      }
      return state.planetData.results.find(planet => planet.url === url)
    },
    filteredPlanets: (state) => (name) => {
      return state.planetData.results.filter(
        (planetdata) => {
          let newName = planetdata.name.toLowerCase()
          return newName.match(name)
        }
      )
    }
  },
  mutations: {
    FETCH_PLANETS_LOADING (state) {
      state.loading = true
    },
    FETCH_PLANETS_SUCCESS (state, payload) {
      state.planetData = payload
      state.loading = false
    },
    FETCH_PLANETS_ERROR (state, payload) {
      state.error = payload
      state.loading = false
    }
  },
  actions: {
    getPlanets: async ({ commit }, pageNumber) => {
      commit('FETCH_PLANETS_LOADING')
      try {
        const data = await axiosCalls.Get(`planets/?page=${pageNumber}`)
        if (data) {
          const { results } = data
          commit('FETCH_PLANETS_SUCCESS', { results })
        }
      } catch (error) {
        commit('FETCH_PLANETS_ERROR', error)
      }
    }
  }
}
