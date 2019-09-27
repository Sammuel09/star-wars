<template>
  <div class="home">
    <Header/>
    <div class="container">
        <div class="headline-top">
        <p class="headline">Starwars Characters</p>
        <div class="headline-line"></div>
      </div>
      <div class="select-options">
        <div class="filter-gender">
          <label for="filter-gender">FILTER</label>
          <select name="" id="filter-gender">
            <option value="volvo">Male</option>
            <option value="saab">Female</option>
            <option value="saab">Robot</option>
          </select>
        </div>

        <div class="filter-gender">
          <label for="filter-gender">VIEW</label>
          <select name="" id="filter-gender">
            <option value="volvo">Grid</option>
            <option value="saab">Landscape</option>
          </select>
        </div>
      </div>
      <div class="spinner" v-if="loading">
          <font-awesome-icon icon="spinner" spin/>
      </div>
      <div class="error" v-if="error">
          <p>There was an error getting your data from the database</p>
      </div>
      <div class="grid-container">
        <div v-for="person in peopleData" :key="person.name">
          <PersonCard :name="person.name"/>
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
import PersonCard from '@/components/PersonCard.vue'
import { mapActions, mapState } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import vSelect from 'vue-select'

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    PersonCard,
    FontAwesomeIcon
  },
  data () {
    return {
      filterOptionSelected: '',
      filterOptions: ['Male', 'Female', 'Robot'],
      linkGen: ''
    }
  },
  created () {
    this.getPeople()
  },
  methods: {
    ...mapActions([
      'getPeople'
    ])
  },
  computed: {
    ...mapState({
      peopleData: state => state.Home.peopleData.results,
      loading: state => state.Home.loading,
      error: state => state.Home.error
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
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  grid-template-columns: auto auto;
  margin-top: 10px;
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

@media only screen and (max-width: 400px) {
  .select-options{
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (max-width: 800px) {
  .grid-container {
    grid-template-columns: 100%;
  }
}
</style>
