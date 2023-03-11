<script lang="ts" setup>
import { IonGrid, IonRow, IonCol, IonIcon, IonToggle, IonText } from '@ionic/vue';
import { bicycle } from 'ionicons/icons';
</script>

<template>
  <ion-grid class="ion-no-padding widget">
     <ion-row class="ion-padding-vertical ion-align-items-center">
        <ion-col size="6" class="">
           <ion-icon color="white" class="app-icon" :icon="bicycle"></ion-icon>
        </ion-col>
        <ion-col size="6" class="ion-text-end">
           <ion-toggle color="light" mode="md" checked aria-label="Currently active"></ion-toggle>
        </ion-col>
     </ion-row>
     <ion-row>
        <ion-col size="12" class="ion-margin-bottom">
           <ion-text color="white">
              <h1 class="ion-no-margin count">3655</h1>
              <h6 class="sub-title ion-text-capitalize ion-no-margin ion-margin-bottom">Total Activities</h6>
           </ion-text>
        </ion-col>
        <ion-col size="12">
           <h6 class="sub-title ion-text-capitalize ion-no-margin">Friend Lists</h6>
           <ul class="avatars">
              <li class="avatars__item">
                 <img src="https://images.unsplash.com/photo-1614880353165-e56fac2ea9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
              </li>
              <li class="avatars__item">
                 <img src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
              </li>
              <li class="avatars__item">
                 <img src="https://images.unsplash.com/photo-1569243478735-8fcf29052262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
              </li>
              <li class="avatars__item">
                 <img src="https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQzfHxmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="avatars__img">
              </li>
           </ul>
        </ion-col>
     </ion-row>
  </ion-grid>
</template>

<style lang="scss" scoped>
.widget {
  background-color: #8dceca !important;
  border-radius: 16px !important;
  height: auto;
  width: 100%;
  min-width: 170px;
  padding: 10px 25px;
  color: var(--ion-color-light);

  .app-icon {
    font-size: 2.5rem;
  }
  .count {
    font-size: 1.3rem;
    letter-spacing: 1.3px;
    font-weight: 500;
  }
  .sub-title {
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-weight: 400;
  }
  ul.avatars {
    display: flex;
    list-style-type: none;
    margin: 5px 8px 16px;
    padding: 0;
    float: left;
    z-index: 1;
  }
  li.avatars__item {
    height: 35px;
    margin: 0px 0px 0px -12px;
    padding: 0px 0px 0px 0px;
    position: relative;
  }
  img.avatars__img,
  span.avatars__initials,
  span.avatars__others {
    background-color: #e1e1e1;
    border: 3px solid #ffffff;
    border-radius: 50%;
    color: #a1a1a1;
    font-size: 12px;
    letter-spacing: 1.2px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    width: 35px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    object-position: center;
  }
  span.avatars__others {
    background-color: #303030;
    color: #ebebeb;
  }
}
</style>
