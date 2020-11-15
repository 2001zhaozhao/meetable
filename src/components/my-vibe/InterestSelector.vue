<template>
  <div id="container">
    <ion-card>
        <ion-card-header :key="compKey">
            <ion-card-title v-if="!secondChoice">
                <b>Select your interests for next week!</b>
            </ion-card-title>
            <ion-card-title v-if="secondChoice">
                <b style="color:var(--ion-color-secondary)">Interests selected!</b>
            </ion-card-title>
            <ion-card-subtitle>
                <b>7 hours left until regroup!</b>
            </ion-card-subtitle>
            <ion-card-subtitle v-if="firstChoice">
                First Choice: <span style="color:var(--ion-color-primary)"><b>{{firstChoice}}</b></span>
            </ion-card-subtitle>
            <ion-card-subtitle v-if="secondChoice">
                Second Choice: <span style="color:var(--ion-color-secondary)"><b>{{secondChoice}}</b></span>
            </ion-card-subtitle>

            <ion-searchbar show-cancel-button="focus" placeholder="Search Interests" v-if="!secondChoice"></ion-searchbar>

            <ion-card-content style="padding-left:3px; padding-right:3px" v-if="!secondChoice">
                <div class="scrolling-wrapper-out">
                    <div class="scrolling-wrapper-in">
                        <p>
                        <ion-button @click="selectInterest('Science Fiction')">Science Fiction</ion-button>
                        <ion-button @click="selectInterest('Rock Music')">Rock Music</ion-button>
                        <ion-button @click="selectInterest('Among Us')">Among Us</ion-button>
                        <ion-button @click="selectInterest('Just Chat')">Just Chat</ion-button>
                        <ion-button @click="selectInterest('Learn MySQL')">Learn MySQL</ion-button>
                        <ion-button @click="selectInterest('Biking')">Biking</ion-button>
                        </p>
                        <p>
                        <ion-button @click="selectInterest('Poetry')">Poetry</ion-button>
                        <ion-button @click="selectInterest('Creative Writing')">Creative Writing</ion-button>
                        <ion-button @click="selectInterest('Photography')">Photography</ion-button>
                        <ion-button @click="selectInterest('Hacking')">Hacking</ion-button>
                        <ion-button @click="selectInterest('Meditation')">Meditation</ion-button>
                        <ion-button @click="selectInterest('RTS Games')">RTS Games</ion-button>
                        </p>
                        <p>
                        <ion-button @click="selectInterest('Video Creation')">Video Creation</ion-button>
                        <ion-button @click="selectInterest('Painting')">Painting</ion-button>
                        <ion-button @click="selectInterest('DIY Furniture')">DIY Furniture</ion-button>
                        <ion-button @click="selectInterest('Working Out')">Working Out</ion-button>
                        <ion-button @click="selectInterest('Mathematics')">Mathematics</ion-button>
                        <ion-button @click="selectInterest('Chess')">Chess</ion-button>
                        </p>
                    </div>
                </div>
            </ion-card-content>
        </ion-card-header>
        <ion-button v-if="secondChoice" size=small fill=clear @click="reset()" style="margin:20px; margin-top:5px">Reset</ion-button>
    </ion-card>
  </div>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton, IonSearchbar } from '@ionic/vue';

export default {
  name: 'InterestSelector',
  components: { IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton, IonSearchbar },
  props: {
      
  },
  setup() {
    return {
    }
  },
  data: function() {
      return {
        firstChoice: "",
        secondChoice: "",
        selectInterest: function(str: string) {
            if(this.firstChoice == "") {
                this.firstChoice = str;
            }
            else if(this.firstChoice == str) {
                // Do nothing if the selection is already first choice
            }
            else if(this.secondChoice == "") {
                this.secondChoice = str;
            }
        },
        reset: function() {
            this.firstChoice = ""
            this.secondChoice = ""
        }
      } 
  },
  methods: {
    
  }
}
</script>

<style scoped>
#container strong {
    font-size: 24px;
}

/* Needed to hide scrollbar! */
#container .scrolling-wrapper-out {
    overflow: hidden;
}

#container .scrolling-wrapper-in {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    margin-bottom: -60px; /* Maximum width of scrollbar */
    padding-bottom: 50px; /* Maximum width of scrollbar */
}

#container .scrolling-wrapper-in p {
    margin-top: -4px;
}
</style>