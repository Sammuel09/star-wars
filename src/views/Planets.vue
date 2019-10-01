<template>
  <div class="home">
    <Header
    v-on:search="searchMethod"/>
    <div class="spinner" v-if="loading">
        <font-awesome-icon icon="spinner" spin/>
    </div>
    <div class="error" v-else-if="error">
      <p>There was an error getting your data from the database</p>
    </div>
    <div class="container" v-else>
      <div class="headline-top">
          <p class="headline">Popular Planets</p>
          <div class="headline-line"></div>
      </div>
      <b-modal
      id="modal-1"
      size="md"
      centered
      hide-header-close
      ok-only
      ok-title="close"
      ok-variant="danger">
        <template v-slot:modal-title class="my-4 hello">
          Detailed Information
        </template>
        <template class="my-4">
            <div class="modal-info">
              <div class="info">
                <div class="info-title">Diameter: </div>
                <div class="info-detail">{{getPlanetById(planetData).diameter}}</div>
              </div>
              <div class="info">
                <div class="info-title">Gravity: </div>
                <div class="info-detail">{{getPlanetById(planetData).gravity}}</div>
              </div>
              <div class="info">
                <div class="info-title">Orbital Period: </div>
                <div class="info-detail">{{getPlanetById(planetData).orbital_period}}</div>
              </div>
              <div class="info">
                <div class="info-title">Rotation Period: </div>
                <div class="info-detail">{{getPlanetById(planetData).rotation_period}}</div>
              </div>
              <div class="info">
                <div class="info-title">Surface Water: </div>
                <div class="info-detail">{{getPlanetById(planetData).surface_water}}</div>
              </div>
              <div class="info">
                <div class="info-title">Terrain: </div>
                <div class="info-detail">{{getPlanetById(planetData).terrain}}</div>
              </div>
            </div>
        </template>
      </b-modal>
      <div class="grid-container">
        <div v-for="planet in filteredPlanets(searchData)" :key="planet.name">
          <PlanetCard
          :name="planet.name"
          :temperature="planet.climate"
          :population="planet.population"
          :url="planet.url"
          v-on:open-modal="openModal"/>
        </div>
      </div>
      <div class="empty-search" v-if="filteredPlanets(searchData).length == 0">
          <img src="@/assets/no_data.svg" alt="No Data" class="empty-search-image">
          <div class="empty-search-text">
            No results
          </div>
      </div>
      <div class="pagination">
        <b-pagination-nav :link-gen="linkGen" :number-of-pages="2" use-router></b-pagination-nav>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PlanetCard from '@/components/PlanetCard.vue'
import { mapActions, mapState, mapGetters } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import vSelect from 'vue-select'

export default {
  name: 'planets',
  components: {
    Header,
    Footer,
    PlanetCard,
    FontAwesomeIcon
  },
  data () {
    return {
      linkGen: '',
      planetData: 'https://swapi.co/api/planets/2/',
      searchData: ''
    }
  },
  created () {
    this.getPlanets()
  },
  methods: {
    ...mapActions([
      'getPlanets'
    ]),
    openModal (url) {
      this.planetData = url
    },
    searchMethod (searchValue) {
      this.searchData = searchValue.toLowerCase()
      console.log(searchValue)
    }
  },
  computed: {
    ...mapState({
      planets: state => state.Planets.planetData.results,
      loading: state => state.Planets.loading,
      error: state => state.Planets.error
    }),
    ...mapGetters([
      'getPlanetById',
      'filteredPlanets'
    ])
  }
}
</script>

<style scoped lang="scss">
.headline{
  font-weight: 900;
  margin-top: 25px;
}

hr{
  font-weight: bolder;
}

.headline{
  text-align: center;
}

.headline-top{
  position: relative;
}

.headline-top p{
 margin-bottom: 0;
}
.headline-line{
  position: absolute;
  background-color: #000;
  height: 4px;
  width: 75px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 4px;
}

select{
  border-radius: 5%;
  border: 1px solid #424242;
}

.select-options{
  display: flex;
  margin-top: 15px;
}

.filter-gender{
  margin-top: 15px;
  margin-right: 30px;
}

#filter-gender{
  margin-left: 10px;
  padding: 4px;
}

.grid-container{
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 50px;
  margin-bottom: 15px;
}

.spinner{
  text-align: center;
  font-size: 150px;
  margin-top: 100px;
}

.error{
  font-size: 40px;
  margin: 0 auto;
}

.pagination{
  display: flex;
  justify-content: center;
  margin-top:35px;
  margin-bottom: 20px;
}

.modal-info{
  display: flex;
  flex-direction: column;
}

.info{
  display: flex;
}

.info-detail{
  text-transform: capitalize;
  font-weight: bold;
  margin-left: 20px;
}

.empty-search{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty-search-text{
  display: flex;
  // justify-items: center;
  background-color: yellow;
  font-size: 30px;
  font-style: italic;
}

.empty-search-image{
  width: 40%;
  height: 40%;
}

@media only screen and (max-width: 800px) {
  .grid-container {
    grid-template-columns: 100%;
  }
}
</style>
