<template>
  <div class="home">
    <Header
    v-on:search="searchMethod"/>
    <div v-if="loading" class="spinner">
      <font-awesome-icon icon="spinner" spin/>
    </div>
    <div v-else-if="error" class="error">
      <p>There was an error getting your starshipData from the starshipDatabase</p>
    </div>
    <div v-else class="container">
        <div class="headline-top">
            <p class="headline">Popular Starships</p>
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
                <div class="info-title">MGLT: </div>
                <div class="info-detail">{{getStarshipById(starshipData).MGLT}}</div>
              </div>
              <div class="info">
                <div class="info-title">Cargo Capacity: </div>
                <div class="info-detail">{{getStarshipById(starshipData).cargo_capacity}}</div>
              </div>
              <div class="info">
                <div class="info-title">Consumables: </div>
                <div class="info-detail">{{getStarshipById(starshipData).consumables}}</div>
              </div>
              <div class="info">
                <div class="info-title">Cost in Credits: </div>
                <div class="info-detail">{{getStarshipById(starshipData).cost_in_credits}}</div>
              </div>
              <div class="info">
                <div class="info-title">Crew: </div>
                <div class="info-detail">{{getStarshipById(starshipData).crew}}</div>
              </div>
              <div class="info">
                <div class="info-title">Hyperdrive Rating: </div>
                <div class="info-detail">{{getStarshipById(starshipData).hyperdrive_rating}}</div>
              </div>
              <div class="info">
                <div class="info-title">Manufacturer: </div>
                <div class="info-detail">{{getStarshipById(starshipData).manufacturer}} </div>
              </div>
              <div class="info">
                <div class="info-title">Max Atmosphering Speed: </div>
                <div class="info-detail">{{getStarshipById(starshipData).max_atmosphering_speed}} kg</div>
              </div>
            </div>
        </template>
      </b-modal>
      <div class="grid-container">
        <div v-for="starship in filteredStarships(searchData)" :key="starship.name">
          <StarshipCard
          :name="starship.name"
          :model="starship.model"
          :cargoCapacity="starship.cargo_capacity"
          :url="starship.url"
          v-on:open-modal="openModal"/>
        </div>
      </div>
      <div class="empty-search" v-if="filteredStarships(searchData).length == 0">
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
import StarshipCard from '@/components/StarshipCard.vue'
import { mapActions, mapState, mapGetters } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import vSelect from 'vue-select'

export default {
  name: 'starships',
  components: {
    Header,
    Footer,
    StarshipCard,
    FontAwesomeIcon
  },
  data () {
    return {
      linkGen: '',
      starshipData: 'https://swapi.co/api/starships/15/',
      searchData: ''
    }
  },
  created () {
    this.getStarships()
  },
  methods: {
    ...mapActions([
      'getStarships'
    ]),
    openModal (url) {
      this.starshipData = url
    },
    searchMethod (searchValue) {
      this.searchData = searchValue.toLowerCase()
      console.log(searchValue)
    }
  },
  computed: {
    ...mapState({
      starships: state => state.Starship.starshipData.results,
      loading: state => state.Starship.loading,
      error: state => state.Starship.error
    }),
    ...mapGetters([
      'getStarshipById',
      'filteredStarships'
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
