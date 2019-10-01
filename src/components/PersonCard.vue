
<template>
    <div>
      <div class="item-card">
        <img src="@/assets/character-1.jpg" alt="Star Wars Chaarcter" class="person-image">
        <div>
            <div class="card-name">
                <p class="card-name-title">{{name}}</p>
                <div class="card-info">
                    <small class="card-name-nickname">{{birthYear}}</small>
                    <span class="card-name-info">{{gender}}</span>
                </div>
                <p class="card-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente cupiditate non ad! Suscipit,
                    qui quidem temporibus perspiciatis laudantium hic et provident, at vero deleniti,
                    labore consequuntur eveniet molestiae similique assumenda
                </p>
                
                <!-- This button emits the open=modal event with the value of url back to the parent.
                    This way the modal in the parent can display the info for each character -->
                <div class="read-more">
                  <b-button size='sm' v-b-modal.modal-1 @click="$emit('open-modal', url)" >Read More</b-button>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: 'PersonCard',
  props: [
    'name',
    'birthYear',
    'gender',
    'url'
  ],
  methods: {
    emitModal: () => console.log('emit')
  },
  filters: {
    extract: value => {
      const url = value.slice(20, -1)
      return url
    }
  }
}
</script>

<style lang="scss" scoped>
.item-card{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  background-color: #f2f2f2;
}

// .card:hover{
//   background-color: #228CDB;
// }

.person-image{
  height: 100%;
  width: 100%;
  object-fit: cover;
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
    text-transform: capitalize;
}

.card-info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-description{
    margin-top: 10px;
    text-align: justify;
}

.read-more{
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

@media only screen and (max-width: 415px) {
  .item-card{
    display: flex;
    flex-direction: column;
    background-color: #f2f2f2;
}
}
</style>
