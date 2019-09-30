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
                <div class="info-detail">{{getPersonById(data).height}}cm</div>
              </div>
              <div class="info">
                <div class="info-title">Mass: </div>
                <div class="info-detail">{{getPersonById(data).mass}}Kg</div>
              </div>
            </div>
        </template>
      </b-modal>
      <div class="grid-container">
        <div v-for="person in peopleData" :key="person.name">

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
      linkGen: '',
      isModalVisible: false,
      data: 'https://swapi.co/api/people/1/'
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
    closeModal () {
      this.isModalVisible = false
    }
  },
  computed: {
    ...mapState({
      peopleData: state => state.Home.peopleData.results,
      loading: state => state.Home.loading,
      error: state => state.Home.error
    }),
    ...mapGetters([
      'getPersonById'
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
