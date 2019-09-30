<template>
  <div class="home">
    <Header/>
    <div class="container">
        Hello word
    </div>
    <div>
      {{getPersonById("https://swapi.co/api/people/1/")}}
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { mapGetters, mapState } from 'vuex'

// import vSelect from 'vue-select'

export default {
  name: 'planets',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      linkGen: ''
    }
  },
  // created () {
  //   this.getPersonById()
  // },
  //   methods: {
  //     ...mapActions([
  //       'getPlanets'
  //     ])
  //   },
  computed: {
    ...mapState({
      planets: state => state.Planets.planetData.results,
      loading: state => state.Planets.loading,
      error: state => state.Planets.error
    }),
    ...mapGetters([
      'getPersonById'
    ])
    // getPersonById: function (url) {
    //   return this.$store.getters.getPersonById(url)
    // }
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
