import axios from 'axios'

class axiosCalls {
  static async Get (path) {
    try {
      const { data } = await axios(`https://swapi.co/api/${path}`)
      return data
    } catch ({ response }) {
      return response
        ? { error: response.status, message: response.data.message }
        : { error: 500, message: 'Connection Error' }
    }
  }
}
export default axiosCalls
