<template>
  <div id="container">
    <span class="circle" style="width:90px; height:90px">
        <ion-avatar style="margin:5px; width:80px; height:80px">
            <img :src="imageLink">
        </ion-avatar>
    </span>

    <strong style="vertical-align:top; margin-left:43px; width:225px; height:40px">
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
  font-size: 24px;
}
</style>