<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <h1 style="margin:15px; padding-top:20px">Find friends who share common interests</h1>
      <FilterFinder />

      <div id="usercardlist">
        <div style="display:flex">
          <UserCard name="Jaya Guthrie" class="left" :interests="['#travelling', '#Asia', '#Europe']" imageLink="mock/other-avatar-1.png" />
          <UserCard name="Salmon Dotson" class="right" :interests="['#travelling', '#Europe', '#Asia']" imageLink="mock/other-avatar-5.png" />
        </div>
        <div style="display:flex">
          <UserCard name="Hunter Odonnell" class="left" :interests="['#travelling', '#Asia', '#cooking']" imageLink="mock/other-avatar-2.png" />
          <UserCard name="Blake Lyans" class="right" :interests="['#travelling', '#Europe', '#running']" imageLink="mock/other-avatar-6.png" />
        </div>
        <div style="display:flex">
          <UserCard name="Ameer Workman" class="left" :interests="['#Asia', '#Asiancuisine', '#foodie']" imageLink="mock/other-avatar-3.png" />
          <UserCard name="Rex Delaney" class="right" :interests="['#travelling', '#backpacking', '#Europe']" imageLink="mock/other-avatar-7.png" />
        </div>
        <div style="display:flex">
          <UserCard name="Zachary Christian" class="left" :interests="['#Asia', '#Asiancuisine', '#foodie']" imageLink="mock/other-avatar-4.png" />
          <UserCard name="Naya Hutchinson" class="right" :interests="['#travelling', '#Europe', '#rock']" imageLink="mock/other-avatar-8.png" />
        </div>
      </div>
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import FilterFinder from '@/components/make-friends/FilterFinder.vue';
import UserCard from '@/components/make-friends/UserCard.vue';

export default  {
  name: 'TabMakeFriends',
  components: { IonContent, IonPage, FilterFinder, UserCard }
}
</script>


<style scoped>
h1 {
  font-size: 30px;
  color: var(--ion-color-primary);
  margin: 0;
  text-align: center;
}

#usercardlist {
  padding: 40px;
  padding-top: 0px;
}

.left {
  flex: 0 0 50%;
}

.right {
  flex: 1;
}
</style>