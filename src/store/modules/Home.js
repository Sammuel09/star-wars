import axiosCalls from '@/utils/api/axiosCalls'

export default {
  state: {
    loading: false,
    peopleData: {},
    error: ''
  },
  getters: {
    getPersonById: (state) => (url) => {
      return state.peopleData.results.find(person => person.url === url)
    },
    filteredPersonsByName: (state) => (name) => {
      return state.peopleData.results.filter(
        (data) => {
          let newName = data.name.toLowerCase()
          return newName.match(name)
        }
      )
    },
    filteredPersonsByGender: (state) => (gender) => {
      if (gender === 'all') {
        return state.peopleData.results
      }
      return state.peopleData.results.filter(
        (data) => {
          console.log(data)
          return data.gender === gender
        }
      )
    },
    filteredPersons: (state, getters) => (gender, name) => {
      if (name === '') {
        return getters.filteredPersonsByGender(gender)
      } else {
        return getters.filteredPersonsByName(name)
      }
    }
  },
  mutations: {
    FETCH_PEOPLE_LOADING (state) {
      state.loading = true
    },
    FETCH_PEOPLE_SUCCESS (state, payload) {
      state.peopleData = payload
      state.loading = false
    },
    FETCH_PEOPLE_ERROR (state, payload) {
      state.error = payload
      state.loading = false
    }
  },
  actions: {
    getPeople: async ({ commit }) => {
      commit('FETCH_PEOPLE_LOADING')
      try {
        const data = await axiosCalls.Get(`people/`)
        console.log(data)
        if (data) {
          const { results } = data
          console.log(results)
          commit('FETCH_PEOPLE_SUCCESS', { results })
        }
      } catch (error) {
        commit('FETCH_PRODUCTS_ERROR', error)
      }
    }
  }
}
