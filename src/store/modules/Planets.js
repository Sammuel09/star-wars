import axiosCalls from '@/utils/api/axiosCalls'

export default {
  state: {
    loading: false,
    planetData: {},
    error: ''
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
      const data = await axiosCalls.Get(`planets`)
      // const {data, message} = await AxiosCalls.awaitGet(`users/${userId}/products`)
      // if (data) {
      //   const { results, message } = data
      //   commit('FETCH_PLANETS_SUCCESS', { results, message })
      // } else {
      //   commit('FETCH_PLANETS_ERROR', message)
      // }
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
