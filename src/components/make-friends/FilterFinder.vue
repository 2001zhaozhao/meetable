<template>
  <div id="container">
    <ion-button shape=round size=small color=secondary>Travelling</ion-button>
    <ion-button shape=round size=small color=secondary>Asia</ion-button>
    <ion-button shape=round size=small color=secondary>Europe</ion-button>
    <ion-button shape=round size=small color=secondary fill=outline>More Filters</ion-button>
  </div>
</template>

<script lang="ts">
import { IonButton } from '@ionic/vue';

export default {
  name: 'FilterFinder',
  components: { IonButton },
  props: {
  }
}
</script>

<style scoped>
#container {
    margin: auto;
    padding-left: 5px;
    padding-right: 5px;
}

#container ion-button {
    text-transform: none;
    font-size: 15px
}
</style>