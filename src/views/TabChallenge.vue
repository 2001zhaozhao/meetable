<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <h1 style="margin-left:35px; margin-top:45px"><b>Your weekly challenge:</b></h1>
      <h1 style="margin-left:35px; margin-top:45px"><b>Your weekly challenge:</b></h1>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'TabChallenge',
  components: { IonContent, IonPage }
}
</script>


<style scoped>
  h1 {
    font-size: 26px;
  }
</style>