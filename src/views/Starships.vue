<template>
  <div class="home">
    <Header/>
    <div class="container">
        <div class="headline-top">
            <p class="headline">Popular Starships</p>
            <div class="headline-line"></div>
        </div>
      <div class="spinner" v-if="loading">
          <font-awesome-icon icon="spinner" spin/>
      </div>
      <div class="error" v-if="error">
          <p>There was an error getting your data from the database</p>
      </div>
      <div class="grid-container">
        <div v-for="starship in starships" :key="starship.name">
          <StarshipCard
          :name="starship.name"
          :model="starship.model"
          :cargoCapacity="starship.cargo_capacity"/>
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
import { mapActions, mapState } from 'vuex'
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
      linkGen: ''
    }
  },
  created () {
    this.getStarships()
  },
  methods: {
    ...mapActions([
      'getStarships'
    ])
  },
  computed: {
    ...mapState({
      starships: state => state.Starship.starshipData.results,
      loading: state => state.Starship.loading,
      error: state => state.Starship.error
    })
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
  font-size: 100px;
  margin-top: 70px;
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

@media only screen and (max-width: 800px) {
  .grid-container {
    grid-template-columns: 100%;
  }
}
</style>
