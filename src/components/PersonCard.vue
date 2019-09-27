
<template>
    <div class="card">
        <img src="@/assets/character-1.jpg" alt="Star Wars Chaarcter" class="person-image" width="150px">
        <div class="card-name">
            <p class="card-name-title">{{name}}</p>
            <small class="card-name-nickname">Son of Anakin</small>
            <p class="card-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente cupiditate non ad! Suscipit,
                qui quidem temporibus perspiciatis laudantium hic et provident, at vero deleniti,
                labore consequuntur eveniet molestiae similique assumenda
                <span><router-link class="read-more" :to="`#`">... Read More</router-link></span>
            </p>
        </div>
    </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'PersonCard',
  props: [
    'name'
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
    flex-direction: row;
    background-color: #f2f2f2;
}

.person-image{
    height: 100;
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

.card-description{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: justify;
}
</style>
