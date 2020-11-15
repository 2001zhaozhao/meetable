<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <h1><strong>Your profile, your vibe</strong></h1>

      <div id="userdiv">
        <div style="flex:0 0 37%">
          <img src="mock/user-avatar.png" style="height:145px; margin-left:12px">
        </div>
        <div style="flex:1">
          <strong id="name">Dylan, 21</strong>
          <div id="accounttier">
            &nbsp;BASIC &nbsp;
          </div>
          <div style="margin-top:5px">
            <ion-icon :icon="school" />
            <span class=usertrait>
              Loughborough University
            </span>
          </div>
          <div style="margin-top:5px">
            <ion-icon :icon="book" />
            <span class=usertrait>
              BSc Computer Science
            </span>
          </div>
          <div style="margin-top:5px">
            <ion-icon :icon="star" />
            <span class=usertrait>
              <b>Year:</b> 2
            </span>
          </div>
          <div style="margin-top:5px">
            <ion-icon :icon="walk" />
            <span class=usertrait>
              Football
            </span>
          </div>
        </div>
      </div>

      <div id="userbuttondiv">
        <ion-button fill=solid size=large shape=round style="flex:0 0 50%">My Challenge</ion-button> 
        <ion-button fill=solid size=large shape=round color=light style="flex:1">Edit Profile</ion-button> 
      </div>
      
      <InterestSelector style="padding-left:8px; padding-right:8px"/>

      <div id="entriesdiv">
        <ion-button fill=clear size=large>
          <ion-icon :icon="notifications" style="color:var(--ion-color-primary)" />
          <span>Notifications</span>
        </ion-button>
        <hr/>
        <ion-button fill=clear size=large>
          <ion-icon :icon="time" style="color:var(--ion-color-secondary)" />
          <span>Past Groups</span>
        </ion-button>
        <hr/>
        <ion-button fill=clear size=large>
          <ion-icon :icon="settings" style="color:#777777" />
          <span>Group Settings</span>
        </ion-button>
        <hr/>
        <ion-button fill=clear size=large>
          <ion-icon :icon="help" style="color:#000000" />
          <span>Feedback & Help</span>
        </ion-button>
      </div>
      
      <ion-button fill=solid size=medium color=secondary shape=round
          style="text-transform:none; margin:30px; margin-left:28%; margin-right:28%; width:44%">
        Contact us
      </ion-button> 

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import InterestSelector from '@/components/my-vibe/InterestSelector.vue';
import { school, book, star, walk, notifications, settings, time, help } from 'ionicons/icons';

export default  {
  name: 'TabMyVibe',
  components: { IonContent, IonPage, IonButton, InterestSelector },
  setup() {
    return {
      school,
      book, 
      star, 
      walk,
      notifications,
      settings,
      time,
      help
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 26px;
  text-align: center;
}

#userdiv {
  display: flex;
  padding: 20px;
}

#userdiv .usertrait {
  color: var(--ion-color-medium);
  margin-left: 5px;
}

#userbuttondiv {
  display: flex;
  padding: 20px;
  padding-top: 0px;
}

#userbuttondiv ion-button {
  --box-shadow: none;
  text-transform: none;
  font-size: 16px;
}

#entriesdiv ion-button {
  width: 100%;
  text-transform: none;
  text-align: left;
  color: #000000;
  font-size: 18px;
}

#entriesdiv ion-icon {
  padding: 24px;
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

#name {
  font-size: 20px;
}

#accounttier {
  display: inline;
  background-color: var(--ion-color-primary);
  border-radius: 14px;
  color: #ffffff;
  margin-left: 10px;
  padding: 3px;
  font-size: 8px;
  vertical-align: 4px;
}
</style>