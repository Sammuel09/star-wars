
<template>
    <div>
      <div class="item-card card">
        <!-- <img src="@/assets/character-1.jpg" alt="Star Wars Chaarcter" class="person-image"> -->
        <div class="person-image">

        </div>
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
                  <b-button size='lg' v-b-modal.modal-1 @click="$emit('open-modal', url)" class="rd-btn">Read More</b-button>
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
  background-color: #f2f2f2;
  overflow: hidden;
}

.person-image{
  height: 100%;
  width: 100%;
  background-image: url('../assets/character-1.jpg');
  background-size: cover;
  background-position: center;
  object-fit: cover;
  opacity: 0.8;
}

.person-image:hover{
  opacity: 1;
  transform: scale(1.1);
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)
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
    text-align: left;
}

.read-more{
  // display: flex;
  // justify-content: flex-end;
  margin-top: 20px;
}

.rd-btn{
  width: 100%;
}

@media only screen and (max-width: 415px) {
  .item-card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
