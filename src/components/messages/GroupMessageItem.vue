<template>
  <div id="container">
    <span class="circle" style="width:50px; height:50px">
        <ion-avatar style="margin-left:3px; margin-top:3px; width:44px; height:44px">
            <img :src="imageLink">
        </ion-avatar>
    </span>

    <span style="position:absolute; top:14px; left:70px; width:225px; font-size:18px">
        {{ name }}
    </span>

    <span style="position:absolute; top:9px; left:87%; width:225px; font-size:10px">
        {{ time }}
    </span>

    <span style="position:absolute; top:40px; left:70px; width:225px; font-size:11px">
        {{ latestMessage }}
    </span>
  </div>
</template>

<script lang="ts">
import { IonAvatar } from '@ionic/vue';

export default {
  name: 'GroupMessageItem',
  components: { IonAvatar },
  props: {
      name: String,
      imageLink: String,
      latestMessage: String,
      time: String
  }
}
</script>

<style scoped>
#container .circle {
  display: inline-block;
  border-radius: 50%;
  background-color: var(--ion-color-primary)
}
</style>