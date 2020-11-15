<template>
  <div id="container">
    <span class="circle" style="width:50px; height:50px">
        <ion-avatar style="position:absolute; top:3px; left:3px; width:44px; height:44px">
            <img :src="imageLink">
        </ion-avatar>
    </span>

    <strong style="position:absolute; top:14px; left:75px; width:225px">
        {{ name }}
    </strong>
  </div>
</template>

<script lang="ts">
import { IonAvatar } from '@ionic/vue';

export default {
  name: 'PersonItem',
  components: { IonAvatar },
  props: {
      name: String,
      imageLink: String
  }
}
</script>

<style scoped>
#container .circle {
  display: inline-block;
  border-radius: 50%;
  background-color: var(--ion-color-primary)
}

#container strong {
  font-size: 18px;
}
</style>