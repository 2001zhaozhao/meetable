<template>
  <div id="container">
    <div class="border">
        <h3><strong>{{name}}</strong></h3>
        <img :src="imageLink" style="float:left; height:94px; margin-left:5px">
        <div class="buttonWrapper" v-for="interest in interests" :key="interest.name">
            <ion-button size=small shape=round>{{ interest }}</ion-button>
        </div>
        <div class="buttonWrapper">
            <ion-button size=small shape=round color=secondary style="font-size:12px">Info ></ion-button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IonButton } from '@ionic/vue';

export default {
  name: 'UserCard',
  components: { IonButton },
  props: {
      name: String,
      imageLink: String,
      interests: Array
  }
}
</script>

<style scoped>
#container {
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 25px;
    width: 134px;
    height: 125px;
}

#container ion-button {
    text-transform: none;
    font-size: 9px;
    box-shadow: none;
}

#container h3 {
    font-size: 15px;
    text-align: center;
    color: var(--ion-color-secondary)
}

#container .buttonWrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: -5px;
}

#container .border {
    border: 1px solid #22B926;
    box-sizing: "border-box";
    border-radius: 10px;
    display: block;
}
</style>