<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div style="display:flex">
        <h1 style="margin-top:35px; padding-left:35px; flex:0 0 80%"><strong>Messages</strong></h1>
        <span style="margin-top:20px; flex:1"><img src="mock/search.png" style="height:60px"/></span>
      </div>

      <div id="entriesdiv">
        <ion-button fill=clear size=large><span>
          <GroupMessageItem name="Group #Travelling 014" time="12:34 AM" latestMessage="Michael: Great, see you on Wednesday!" imageLink="./assets/default-profile-icon.png" />
        </span></ion-button>
        <hr/>
        <ion-button fill=clear size=large><span>
          <GroupMessageItem name="Alice Henry" time="12:34 AM" latestMessage="I'm not really sure..." imageLink="./assets/default-profile-icon.png" />
        </span></ion-button>
        <hr/>
        <ion-button fill=clear size=large><span>
          <GroupMessageItem name="Alberto Raya" time="12:34 AM" latestMessage="Great, see you on Wednesday!" imageLink="./assets/default-profile-icon.png" />
        </span></ion-button>
        <hr/>
        <ion-button fill=clear size=large><span>
          <GroupMessageItem name="Group #066 - Resellers" time="12:34 AM" latestMessage="Alice: Want to meet up in the library?" imageLink="./assets/default-profile-icon.png" />
        </span></ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import GroupMessageItem from '@/components/messages/GroupMessageItem.vue';

export default  {
  name: 'TabMessages',
  components: {  IonContent, IonPage, IonButton, GroupMessageItem }
}
</script>

<style scoped>
  h1 {
    font-size: 26px;
  }

  #entriesdiv ion-button {
    width: 100%;
    text-transform: none;
    text-align: left;
    color: #000000;
    font-size: 25px;
  }

  #entriesdiv span {
    text-align: left;
    width: 100%;
  }

  #entriesdiv hr {
    margin: -4px;
    margin-left: 22%;
    margin-right: 8%;
    border-top: 1px solid #bbb;
  }
</style>