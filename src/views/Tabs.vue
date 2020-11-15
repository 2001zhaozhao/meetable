<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab-messages" href="/messages">
          <ion-icon :icon="chatbubbles" />
          <ion-label>Messages</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab-make-friends" href="/make-friends">
          <ion-icon :icon="people" />
          <ion-label>Make Friends</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab-challenge" href="/challenge">
          <ion-icon :icon="trophy" />
          <ion-label>Challenge</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab-my-vibe" href="/my-vibe">
          <ion-icon :icon="person" />
          <ion-label>My Vibe</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { chatbubbles, people, trophy, person } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      chatbubbles,
      people, 
      trophy, 
      person,
    }
  }
}
</script>