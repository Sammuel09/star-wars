<template>
  <div class="home">
    <Header
    v-on:search="searchMethod"
    />
    <div class="container">
      <div class="headline-top">
        <p class="headline">Starwars Characters</p>
        <div class="headline-line"></div>
      </div>
      <div class="select-options">
        <div>
          <b-form-select class="select" size="sm" v-model="gender" :options="options"></b-form-select>
        </div>
      </div>
      <div class="spinner" v-if="loading">
          <font-awesome-icon icon="spinner" spin/>
      </div>
      <div class="error" v-if="error">
          <p>There was an error getting your data from the database</p>
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
                <div class="info-title">Name: </div>
                <div class="info-detail">{{getPersonById(data).name}}</div>
              </div>
              <div class="info">
                <div class="info-title">BirthYear: </div>
                <div class="info-detail">{{getPersonById(data).birth_year}}</div>
              </div>
              <div class="info">
                <div class="info-title">Gender: </div>
                <div class="info-detail">{{getPersonById(data).gender}}</div>
              </div>
              <div class="info">
                <div class="info-title">Hair-Colour: </div>
                <div class="info-detail">{{getPersonById(data).hair_color}}</div>
              </div>
              <div class="info">
                <div class="info-title">Eye-Colour: </div>
                <div class="info-detail">{{getPersonById(data).eye_color}}</div>
              </div>
              <div class="info">
                <div class="info-title">Skin-Colour: </div>
                <div class="info-detail">{{getPersonById(data).skin_color}}</div>
              </div>
              <div class="info">
                <div class="info-title">Height: </div>
                <div class="info-detail">{{getPersonById(data).height}} cm</div>
              </div>
              <div class="info">
                <div class="info-title">Mass: </div>
                <div class="info-detail">{{getPersonById(data).mass}} Kg</div>
              </div>
            </div>
        </template>
      </b-modal>
      <div class="grid-container">
        <div v-for="person in filteredPersons(gender, searchData)" :key="person.name">

          <!-- The open-modal custom event listens for an emit event from the child component
              On receiving the emit event, it fires the openModal method that opens the modal -->
          <PersonCard
          :name="person.name"
          :birthYear="person.birth_year"
          :gender="person.gender"
          :url="person.url"
          v-on:open-modal="openModal"/>
        </div>
      </div>
      <div class="empty-search" v-if="filteredPersonsByName(searchData).length == 0">
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
import PersonCard from '@/components/PersonCard.vue'
import { mapActions, mapState, mapGetters } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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
      gender: 'all',
      linkGen: '',
      isModalVisible: false,
      data: 'https://swapi.co/api/people/1/',
      searchData: '',
      options: [
        { value: 'all', text: 'All' },
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
        { value: 'n/a', text: 'Robot' }
      ]
    }
  },
  created () {
    this.getPeople()
  },
  methods: {
    ...mapActions([
      'getPeople'
    ]),
    openModal (url) {
      this.data = url
    },
    searchMethod (searchValue) {
      this.searchData = searchValue.toLowerCase()
      console.log(searchValue)
    }
  },
  computed: {
    ...mapState({
      peopleData: state => state.Home.peopleData.results,
      loading: state => state.Home.loading,
      error: state => state.Home.error
    }),
    ...mapGetters([
      'getPersonById',
      'filteredPersons',
      'filteredPersonsByName'
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
  border: 1px solid #424242;
}

.select-options{
  display: flex;
  margin-top: 25px;
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
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-columns: 1fr 1fr;
  margin-top: 25px;
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
