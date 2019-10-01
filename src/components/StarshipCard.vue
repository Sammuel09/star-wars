
<template>
    <div class="card">
        <img src="@/assets/starship-3.jpg" alt="A Starwars Starship" class="starship-image">
        <div>
              <div class="card-name">
                <p class="card-name-title">{{name}}</p>
                <div class="card-info">
                    <small class="card-name-nickname">{{model}}</small>
                    <span class="card-name-info">{{cargoCapacity}}</span>
                </div>
                <p class="card-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente cupiditate non ad! Suscipit,
                    qui quidem temporibus perspiciatis laudantium hic et provident, at vero deleniti,
                    labore consequuntur eveniet molestiae similique assumenda
                </p>

                <!-- This button emits the open=modal event with the value of url back to the parent.
                    This way the modal in the parent can display the info for each starship -->
                <div class="read-more">
                    <b-button size='sm' v-b-modal.modal-1 @click="$emit('open-modal', url)" >Read More</b-button>
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
    'cargoCapacity',
    'url'
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

.starship-image{
    height: 100%;
    width: 100%;
}

.card-name{
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.card-name p{
    margin-bottom: 0;
}

.card-name-title{
    font-weight: bold;
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
    margin-top: 10px;
}

@media only screen and (max-width: 400px) {
  .card{
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
}
}
</style>
