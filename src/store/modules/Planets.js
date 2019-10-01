import axiosCalls from '@/utils/api/axiosCalls'

export default {
  state: {
    loading: false,
    planetData: {},
    error: ''
  },
  getters: {
    getPlanetById: (state) => (url) => {
      return state.planetData.results.find(planet => planet.url === url)
    },
    filteredPlanets: (state) => (name) => {
      return state.planetData.results.filter(
        (planetdata) => {
          console.log(planetdata)
          let newName = planetdata.name.toLowerCase()
          return newName.match(name)
        }
      )
    },

    // filteredStarships: (state) => (name) => {
    //   return state.starshipData.results.filter(
    //     (starshipdata) => {
    //       console.log(starshipdata)
    //       let newName = starshipdata.name.toLowerCase()
    //       return newName.match(name)
    //     }
    //   )
    // }
  },
  mutations: {
    FETCH_PLANETS_LOADING (state) {
      state.loading = true
    },
    FETCH_PLANETS_SUCCESS (state, payload) {
      state.planetData = payload
      state.loading = false
    },
    FETCH_PLANET_ERROR (state, payload) {
      state.error = payload
      state.loading = false
    }
  },
  actions: {
    getPlanets: async ({ commit }) => {
      commit('FETCH_PLANETS_LOADING')
      try {
        const data = await axiosCalls.Get(`planets/`)
        console.log(data)
        if (data) {
          const { results } = data
          console.log(results)
          commit('FETCH_PLANETS_SUCCESS', { results })
        }
      } catch (error) {
        commit('FETCH_PLANETS_ERROR', error)
      }
    }
  }
}
