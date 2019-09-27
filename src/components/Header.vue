<template>
    <div class="container-fluid">
        <div class="logo-container">
             <img alt="Vue logo" src="../assets/logo.png" class="logo">
        </div>
        <div class="header">
            <div class="hero-header">
               <img alt="Vue logo" src="../assets/logo.png" class="logo">
               <h3 class="hero-header-text">Directory</h3>
            </div>
            <div class="header-text">
               <p>Find your favorite Characters, Films, Species, Starships and Planets</p>
            </div>
            <div class="search">
                <b-form-input v-model="text" size="lg" placeholder="Enter a search term"></b-form-input>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  data () {
    return {
      text: ''
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

@media only screen and (max-width: 400px) {
    .header-text{
        margin-left: 20px;
    }
    .search{
        width: 80%;
        display: flex;
    }
}
</style>
