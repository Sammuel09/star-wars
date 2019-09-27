import axiosCalls from '@/utils/api/axiosCalls'

export default {
  state: {
    loading: false,
    planetData: {},
    error: ''
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
    getStarships: async ({ commit }) => {
      commit('FETCH_STARSHIPS_LOADING')
      try {
        const data = await axiosCalls.Get(`starships/`)
        console.log(data)
        if (data) {
          const { results } = data
          console.log(results)
          commit('FETCH_STARSHIPS_SUCCESS', { results })
        }
      } catch (error) {
        commit('FETCH_STARSHIPS_ERROR', error)
      }
    }
  }
}
