import axiosCalls from '@/utils/api/axiosCalls'

export default {
  state: {
    loading: false,
    starshipData: {},
    error: ''
  },
  getters: {
    getStarshipById: (state) => (url) => {
      if (url === '') {
        return ''
      }
      return state.starshipData.results.find(starship => starship.url === url)
    },
    filteredStarships: (state) => (name) => {
      return state.starshipData.results.filter(
        (starshipdata) => {
          let newName = starshipdata.name.toLowerCase()
          return newName.match(name)
        }
      )
    }
  },
  mutations: {
    FETCH_STARSHIPS_LOADING (state) {
      state.loading = true
    },
    FETCH_STARSHIPS_SUCCESS (state, payload) {
      state.starshipData = payload
      state.loading = false
    },
    FETCH_STARSHIPS_ERROR (state, payload) {
      state.error = payload
      state.loading = false
    }
  },
  actions: {
    getStarships: async ({ commit }, pageNumber) => {
      commit('FETCH_STARSHIPS_LOADING')
      try {
        const data = await axiosCalls.Get(`starships/?page=${pageNumber}`)
        if (data) {
          const { results } = data
          commit('FETCH_STARSHIPS_SUCCESS', { results })
        }
      } catch (error) {
        commit('FETCH_STARSHIPS_ERROR', error)
      }
    }
  }
}
