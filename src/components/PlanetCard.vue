
<template>
    <div class="card">
        <img src="@/assets/planet-3.jpg" alt="A Starwars Planet" class="planet-image">
        <div>
              <div class="card-name">
                <p class="card-name-title">Yavin IV</p>
                <div class="card-info">
                    <small class="card-name-nickname">temperate</small>
                    <span class="card-name-info">1000</span>
                </div>
                <p class="card-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente cupiditate non ad! Suscipit,
                    qui quidem temporibus perspiciatis laudantium hic et provident, at vero deleniti,
                    labore consequuntur eveniet molestiae similique assumenda
                </p>
                <div class="read-more">
                    <router-link class="btn btn-secondary" tag="button" :to="`#`">Read More</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'StarshipCard',
  props: [
    'name',
    'model',
    'cargoCapacity'
  ],
  components: {
    // FontAwesomeIcon,
  },
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
}

.planet-image{
    height: 100%;
    width: 100%;
}

.card-name{
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-bottom: 25px;
    margin-right: 10px;
}

.card-name p{
    margin-bottom: 0;
}

.card-name-title{
    font-weight: bold;
    margin-top: 20px;
}

.card-name-nickname{
    font-style: italic;
    margin-top: 5px;
}

.card-name-info{
    font-style: italic;
}

.card-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-description{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: justify;
}

.read-more{
    display: flex;
    justify-content: flex-end;
}

@media only screen and (max-width: 400px) {
  .card{
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
}
}
</style>
