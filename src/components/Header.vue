<template>
    <div class="container-fluid">
        <div class="logo-container">
            <router-link :to="`/`"><img alt="Starwars logo" src="../assets/logo.png" class="logo"></router-link>
            <div class="navigation">
                <router-link class="starship-nav" :to="`/starships`">Starships</router-link>
                <router-link class="planet-nav" :to="`/planets`">Planets</router-link>
            </div>
        </div>
        <div class="header">
            <div class="hero-header">
               <img alt="Starswars logo" src="../assets/logo.png" class="logo">
               <h3 class="hero-header-text">Directory</h3>
            </div>
            <div class="header-text">
               <p>Find your favorite Characters, Films, Species, Starships and Planets</p>
            </div>
            <div class="search">
            <!-- <div style="padding-left: 20px">
                <font-awesome-icon icon="search" style="color: white"/>
            </div> -->
                <b-form-input
                type="search"
                v-model="searchTerm"
                size="lg"
                placeholder="Enter a search term"
                @keyup="changeMethod"
                v-on:keyup="$emit('search', searchTerm)"></b-form-input>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'Header',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    changeMethod () {
      console.log(this.searchTerm)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fluid{
  padding: 0px;
  background-image: url('../assets/hero-banner.jpg');
  background-color: #000;
  height: 500px;
  background: center no-repeat cover;
}

.logo-container{
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    padding-top: 30px;
}

.logo{
    width: 100px;
}

.header{
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    margin-top: 80px;
}

.hero-header{
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
}

.hero-header-text{
    margin-left: 10px;
    color: #fff;
    font-weight: bold;
}

.header-text{
    color: white;
    margin-top: 20px;
    margin-bottom: 5px;
}

.search{
    width: 40%;
    display: flex;
}

.search-bar{
    border-left: none;
    width: 100%;
    outline: none;
}

.navigation{
    display: flex;
    margin-right: 100px;
}

.navigation .starship-nav{
    padding-right: 10px;
    color: #fff;
}

.navigation .planet-nav{
    color: #fff;
}

@media only screen and (max-width: 400px) {
    .header-text{
        margin-left: 20px;
    }
    .search{
        width: 80%;
        display: flex;
    }
    .navigation{
        display: flex;
        margin-right: 30px;
    }
}
</style>
