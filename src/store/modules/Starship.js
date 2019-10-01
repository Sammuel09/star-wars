import axiosCalls from '@/utils/api/axiosCalls'

export default {
  state: {
    loading: false,
    starshipData: {},
    error: ''
  },
  getters: {
    // getPersonById: (state) => (url) => {
    //   return state.peopleData.results.find(person => person.url === url)
    // },
    getStarshipById: (state) => (url) => {
      return state.starshipData.results.find(starship => starship.url === url)
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
    getStarships: async ({ commit }) => {
      commit('FETCH_STARSHIPS_LOADING')
      try {
        console.log('hit')
        const data = await axiosCalls.Get(`starships/`)
        console.log('hello')
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
